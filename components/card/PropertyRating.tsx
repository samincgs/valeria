import { cn } from '@/lib/utils';
import { fetchPropertyRating } from '@/utils/actions';
import { FaStar } from 'react-icons/fa';

type PropertyRatingProps = {
  propertyId: string;
  inPage: boolean;
};

const PropertyRating = async ({ propertyId, inPage }: PropertyRatingProps) => {
  const { count, rating } = await fetchPropertyRating(propertyId);

  if (count === 0) return null;

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
