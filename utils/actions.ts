'use server';

import { imageSchema, profileSchema, validateWithZodSchema } from './schemas';
import { db } from './db';
import { currentUser, clerkClient } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { uploadImage } from './supabase';

async function getAuthUser() {
  const user = await currentUser();
  if (!user) {
    throw new Error('You must be logged in to access this route');
  }
  if (!user?.privateMetadata?.hasProfile) {
    redirect(`/profile/create`);
  }

  return user;
}

function renderError(error: unknown) {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : 'An error has occured',
  };
}

export async function createProfileAction(prevState: any, formData: FormData) {
  try {
    const user = await currentUser();
    if (!user) throw new Error('Please login to create a profile');

    const rawData = Object.fromEntries(formData);
    const validatedFields = validateWithZodSchema(profileSchema, rawData);

    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl,
        ...validatedFields,
      },
    });

    await clerkClient.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });
  } catch (error) {
    return renderError(error);
  }

  redirect('/');
}

export async function fetchProfileImage() {
  const user = await currentUser();
  if (!user) return null;

  const profile = await db.profile.findUnique({
    where: {
      clerkId: user.id,
    },
    select: {
      profileImage: true,
    },
  });

  return profile?.profileImage;
}

export async function fetchProfile() {
  const user = await getAuthUser();
  const profile = await db.profile.findUnique({
    where: {
      clerkId: user.id,
    },
  });

  if (!profile) redirect(`/profile/create`);
  return profile;
}

export async function updateProfileAction(prevState: any, formData: FormData) {
  const user = await getAuthUser();

  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = validateWithZodSchema(profileSchema, rawData);

    await db.profile.update({
      where: {
        clerkId: user.id,
      },
      data: {
        ...validatedFields,
      },
    });

    revalidatePath('/profile');
    return { message: 'profile has been updated' };
  } catch (error) {
    return renderError(error);
  }
}

export async function updateProfileImageAction(
  prevState: any,
  formData: FormData
) {
  const user = await getAuthUser();

  try {
    const image = formData.get('image') as File;
    const validatedFields = validateWithZodSchema(imageSchema, { image });
    const fullPath = await uploadImage(validatedFields.image);

    await db.profile.update({
      where: {
        clerkId: user.id,
      },
      data: {
        profileImage: fullPath,
      },
    });

    revalidatePath('/profile');

    return { message: 'profile image has been updated' };
  } catch (error) {
    return renderError(error);
  }
}
