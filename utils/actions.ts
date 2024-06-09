'use server';

import {
  imageSchema,
  profileSchema,
  propertySchema,
  reviewSchema,
  validateWithZodSchema,
} from './schemas';
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
  if (!user.privateMetadata.hasProfile) redirect('/profile/create');
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

export async function createPropertyAction(prevState: any, formData: FormData) {
  const user = await getAuthUser();

  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = validateWithZodSchema(propertySchema, rawData);
    const file = formData.get('image') as File;
    const validatedFile = validateWithZodSchema(imageSchema, { image: file });

    const fullPath = await uploadImage(validatedFile.image);

    await db.property.create({
      data: {
        ...validatedFields,
        image: fullPath,
        profileId: user.id,
      },
    });
  } catch (error) {
    return renderError(error);
  }

  redirect('/');
}

export async function fetchProperties({
  search = '',
  category,
}: {
  search?: string;
  category?: string;
}) {
  const properties = await db.property.findMany({
    where: {
      category,
      OR: [
        {
          name: {
            contains: search,
            mode: 'insensitive',
          },
        },
        {
          tagline: {
            contains: search,
            mode: 'insensitive',
          },
        },
      ],
    },
    select: {
      id: true,
      image: true,
      name: true,
      tagline: true,
      country: true,
      price: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return properties;
}

export async function fetchFavoriteId({ propertyId }: { propertyId: string }) {
  const user = await getAuthUser();

  const favorite = await db.favorite.findFirst({
    where: {
      profileId: user.id,
      propertyId,
    },
    select: {
      id: true,
    },
  });

  return favorite?.id || null;
}

export async function toggleFavoriteAction(
  prevState: {
    propertyId: string;
    favoriteId: string | null;
    pathname: string;
  },
  formData: FormData
) {
  const { propertyId, favoriteId, pathname } = prevState;
  const user = await getAuthUser();

  try {
    if (favoriteId) {
      await db.favorite.delete({
        where: {
          id: favoriteId,
        },
      });
    } else {
      await db.favorite.create({
        data: {
          profileId: user.id,
          propertyId,
        },
      });
    }

    revalidatePath(pathname);
    return {
      message: favoriteId ? 'removed from favorites' : 'added to favorites',
    };
  } catch (error) {
    return renderError(error);
  }
}

export async function fetchFavorites() {
  const user = await getAuthUser();

  const favorites = await db.favorite.findMany({
    where: {
      profileId: user.id,
    },
    select: {
      property: {
        select: {
          id: true,
          tagline: true,
          name: true,
          country: true,
          price: true,
          image: true,
        },
      },
    },
  });

  return favorites.map((favorite) => favorite.property);
}

export async function fetchPropertyDetails(id: string) {
  return db.property.findUnique({
    where: {
      id,
    },
    include: {
      profile: true,
    },
  });
}

export async function createReviewAction(prevState: any, formData: FormData) {
  const user = await getAuthUser();

  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = validateWithZodSchema(reviewSchema, rawData);

    await db.review.create({
      data: {
        profileId: user.id,
        ...validatedFields,
      },
    });

    revalidatePath(`/properties/${validatedFields.propertyId}`);
    return { message: 'review has been created successfully' };
  } catch (error) {
    return renderError(error);
  }
}
