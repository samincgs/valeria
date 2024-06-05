import { FaHeart } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { auth } from '@clerk/nextjs/server';
import { CardSignInButton } from '@/components/form/Buttons';

type FavoriteToggleButtonProps = {
  propertyId: string;
};

const FavoriteToggleButton = ({ propertyId }: FavoriteToggleButtonProps) => {
  const { userId } = auth();

  if (!userId) return <CardSignInButton />;

  return (
    <Button size={'icon'} variant={'outline'}>
      <FaHeart className='w-4 h-4' />
    </Button>
  );
};
export default FavoriteToggleButton;
