import { auth } from '@clerk/nextjs/server';
import { CardSignInButton } from '@/components/form/Buttons';
import { fetchFavoriteId } from '@/utils/actions';
import FavoriteToggleForm from './FavoriteToggleForm';

type FavoriteToggleButtonProps = {
  propertyId: string;
};

const FavoriteToggleButton = async ({
  propertyId,
}: FavoriteToggleButtonProps) => {
  const { userId } = auth();
  const favoriteId = await fetchFavoriteId({ propertyId });

  if (!userId) return <CardSignInButton />;

  return <FavoriteToggleForm favoriteId={favoriteId} propertyId={propertyId} />;
};
export default FavoriteToggleButton;
