import { formatQuantity } from '@/utils/format';

type PropertyDetailProps = {
  details: {
    bedrooms: number;
    baths: number;
    guests: number;
    beds: number;
  };
};

const PropertyDetails = ({
  details: { guests, baths, beds, bedrooms },
}: PropertyDetailProps) => {
  return (
    <p className='text-md flex gap-x-2 mt-2'>
      <span>{formatQuantity(bedrooms, 'bedroom')} -</span>
      <span>{formatQuantity(baths, 'bath')} -</span>
      <span>{formatQuantity(guests, 'guest')} -</span>
      <span>{formatQuantity(beds, 'bed')}</span>
    </p>
  );
};
export default PropertyDetails;
