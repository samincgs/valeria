'use server';

import { profileSchema } from './schemas';
import { db } from './db';
import { currentUser, auth, clerkClient } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createProfileAction(prevState: any, formData: FormData) {
  try {
    const user = await currentUser();
    if (!user) throw new Error('Please login to create a profile');

    const rawData = Object.fromEntries(formData);
    const validatedFields = profileSchema.parse(rawData);

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
    return {
      message: error instanceof Error ? error.message : 'An error has occured',
    };
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
