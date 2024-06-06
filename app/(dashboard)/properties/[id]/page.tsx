import FavoriteToggleButton from '@/components/card/FavoriteToggleButton';
import PropertyRating from '@/components/card/PropertyRating';
import BookingCalendar from '@/components/properties/BookingCalendar';
import BreadCrumbs from '@/components/properties/BreadCrumbs';
import ImageContainer from '@/components/properties/ImageContainer';
import ShareButton from '@/components/properties/ShareButton';
import { fetchPropertyDetails } from '@/utils/actions';
import { redirect } from 'next/navigation';
const PropertyDetailsPage = async ({ params }: { params: { id: string } }) => {
  const property = await fetchPropertyDetails(params.id);
  if (!property) {
    redirect('/');
  }

  const { id, name, tagline, baths, bedrooms, beds, guests, image } = property;
  const details = { baths, bedrooms, beds, guests };

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
        </div>
        <div className='lg:col-span-4 flex flex-col items-center'>
          <BookingCalendar />
        </div>
      </div>
    </div>
  );
};
export default PropertyDetailsPage;
