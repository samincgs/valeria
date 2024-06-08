import { Amenity } from '@/utils/amenities';
import Title from './Title';
import { LucideFolderCheck } from 'lucide-react';

const Amenities = ({ amenities }: { amenities: string }) => {
  const amenitiesList = JSON.parse(amenities);
  const noAmenities = amenitiesList.every(
    (amenity: Amenity) => !amenity.selected
  );

  if (noAmenities) return null;

  return (
    <div className='mt-4'>
      <Title text='what this place offers' />
      <div className='grid md:grid-cols-2 gap-4 mt-4'>
        {amenitiesList.map((amenity: Amenity) => {
          if (!amenity.selected) {
            return null;
          }

          return (
            <div key={amenity.name} className='flex items-center gap-4 mb-2'>
              <LucideFolderCheck className='w-6 h-6 text-primary' />
              <span className='text-sm font-light capitalize tracking-wide '>
                {amenity.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Amenities;
