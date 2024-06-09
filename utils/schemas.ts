import { z } from 'zod';
import { ZodSchema } from 'zod';

export const profileSchema = z.object({
  firstName: z.string().min(2, {
    message: 'first name must be at least 2 characters',
  }),
  lastName: z.string().min(2, {
    message: 'last name must be at least 2 characters',
  }),
  username: z.string().min(2, {
    message: 'username must be at least 2 characters',
  }),
});

export const imageSchema = z.object({
  image: validateFile(),
});

function validateFile() {
  const maxUploadSize = 1024 * 1024;
  const acceptedFileTypes = ['image/'];
  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= maxUploadSize;
    }, 'File size must be less than 1 MB')
    .refine((file) => {
      return (
        !file || acceptedFileTypes.some((type) => file.type.startsWith(type))
      );
    }, 'File must be an image');
}

export const propertySchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'name must be at least 2 characters',
    })
    .max(100, {
      message: 'name must be less than 100 characters',
    }),
  tagline: z
    .string()
    .min(2, {
      message: 'tagline must be at least 2 characters',
    })
    .max(100, {
      message: 'tagline must be less than 100 characters',
    }),
  category: z.string(),
  country: z.string(),
  description: z
    .string()
    .min(10, {
      message: 'description must be at least 10 characters',
    })
    .max(1000, {
      message: 'description must be less than 1000 characters',
    }),
  price: z.coerce.number().int().min(0, {
    message: 'price must be a positive number',
  }),
  guests: z.coerce.number().int().min(0, {
    message: 'guest amount must be a positive number',
  }),
  bedrooms: z.coerce.number().int().min(0, {
    message: 'bedroom amount must be a positive number',
  }),
  beds: z.coerce.number().int().min(0, {
    message: 'bed amount must be a positive number',
  }),
  baths: z.coerce.number().int().min(0, {
    message: 'bath amount must be a positive number.',
  }),
  amenities: z.string(),
});

export const reviewSchema = z.object({
  propertyId: z.string(),
  rating: z.coerce
    .number()
    .int()
    .min(1, {
      message: 'rating has to be at least 1 or more',
    })
    .max(5, {
      message: 'rating can not be more than 5',
    }),
  comment: z
    .string()
    .min(10, {
      message: 'comment must be at least 10 characters',
    })
    .max(1000),
});

export function validateWithZodSchema<T>(schema: ZodSchema<T>, data: unknown) {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(', '));
  }

  return result.data;
}
