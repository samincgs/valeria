import FavoriteToggleButton from '@/components/card/FavoriteToggleButton';
import PropertyRating from '@/components/card/PropertyRating';
import Amenities from '@/components/properties/Amenities';
import BookingCalendar from '@/components/properties/BookingCalendar';
import BreadCrumbs from '@/components/properties/BreadCrumbs';
import Description from '@/components/properties/Description';
import ImageContainer from '@/components/properties/ImageContainer';
import PropertyDetails from '@/components/properties/PropertyDetails';
import ShareButton from '@/components/properties/ShareButton';
import UserInfo from '@/components/properties/UserInfo';
import PropertyReviews from '@/components/reviews/PropertyReviews';
import SubmitReview from '@/components/reviews/SubmitReview';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { fetchPropertyDetails, fetchExistingReview } from '@/utils/actions';
import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';

const DynamicMap = dynamic(
  () => import('@/components/properties/PropertyMap'),
  {
    ssr: false,
    loading: () => <Skeleton className='h-[400px] w-full' />,
  }
);

const PropertyDetailsPage = async ({ params }: { params: { id: string } }) => {
  const property = await fetchPropertyDetails(params.id);
  if (!property) {
    redirect('/');
  }

  const {
    id,
    name,
    tagline,
    baths,
    bedrooms,
    beds,
    guests,
    image,
    description,
    amenities,
    country,
  } = property;
  const { firstName, profileImage } = property.profile;
  const details = { baths, bedrooms, beds, guests };

  const { userId } = auth();
  const isNotOwner = property.profile.clerkId !== userId;
  const reviewDoesNotExist =
    userId && isNotOwner && !(await fetchExistingReview(userId, id));

  return (
    <div>
      <BreadCrumbs name={name} />
      <div className='flex items-center justify-between mt-8'>
        <h1 className='text-4xl font-bold capitalize'>{tagline}</h1>
        <div className='flex items-center gap-x-4'>
          <ShareButton propertyId={id} name={name} />
          <FavoriteToggleButton propertyId={id} />
        </div>
      </div>
      <ImageContainer mainImage={image} name={name} />
      <div className='lg:grid lg:grid-cols-12 gap-x-12 mt-12'>
        <div className='lg:col-span-8'>
          <div className='flex gap-x-4 items-center'>
            <h1 className='text-2xl font-bold'>{name}</h1>
            <PropertyRating inPage propertyId={id} />
          </div>
          <PropertyDetails details={details} />
          <UserInfo profileImage={profileImage} firstName={firstName} />
          <Separator className='mt-4' />
          <Description description={description} />
          <Amenities amenities={amenities} />
          <DynamicMap countryCode={country} />
        </div>
        <div className='lg:col-span-4 flex flex-col items-center'>
          <BookingCalendar />
        </div>
      </div>
      {reviewDoesNotExist && <SubmitReview propertyId={id} />}
      <PropertyReviews propertyId={id} />
    </div>
  );
};
export default PropertyDetailsPage;
