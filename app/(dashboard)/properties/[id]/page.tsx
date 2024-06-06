import FavoriteToggleButton from '@/components/card/FavoriteToggleButton';
import BreadCrumbs from '@/components/properties/BreadCrumbs';
import ShareButton from '@/components/properties/ShareButton';
import { fetchPropertyDetails } from '@/utils/actions';
import { redirect } from 'next/navigation';
const PropertyDetailsPage = async ({ params }: { params: { id: string } }) => {
  const property = await fetchPropertyDetails(params.id);
  if (!property) {
    redirect('/');
  }

  const { id, name, tagline, baths, bedrooms, beds, guests } = property;
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
    </div>
  );
};
export default PropertyDetailsPage;
