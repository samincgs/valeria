import { FaHeart } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

type FavoriteToggleButtonProps = {
  propertyId: string;
};

const FavoriteToggleButton = ({ propertyId }: FavoriteToggleButtonProps) => {
  return (
    <Button size={'icon'} variant={'outline'}>
      <FaHeart className='w-4 h-4' />
    </Button>
  );
};
export default FavoriteToggleButton;
