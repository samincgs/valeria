import { cn } from '@/lib/utils';
import { FaStar } from 'react-icons/fa';

type PropertyRatingProps = {
  propertyId: string;
  inPage: boolean;
};

const PropertyRating = ({ propertyId, inPage }: PropertyRatingProps) => {
  // temp
  const rating = 4.7;
  const count = 100;
  const countText = count > 1 ? 'reviews' : 'review';
  const countValue = `(${count}) ${inPage ? countText : ''}`;
  return (
    <div
      className={cn(
        'flex items-center gap-x-1',
        inPage ? 'text-md' : 'text-xs'
      )}
    >
      <FaStar className='w-3 h-3' />
      {rating}
      {countValue}
    </div>
  );
};
export default PropertyRating;
