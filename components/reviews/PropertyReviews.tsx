import { fetchPropertyReviews } from '@/utils/actions';
import Title from '../properties/Title';
import ReviewCard from './ReviewCard';

const PropertyReviews = async ({ propertyId }: { propertyId: string }) => {
  const reviews = await fetchPropertyReviews(propertyId);

  if (reviews.length === 0) {
    return null;
  }

  return (
    <div className='mt-8'>
      <Title text='what our clients have to say about us' />
      <div className='grid md: grid-cols-2 gap-8 mt-4'>
        {reviews.map((review) => {
          const { rating, comment, profile } = review;
          const { firstName, profileImage } = profile;
          const reviewInfo = {
            rating,
            comment,
            name: firstName,
            image: profileImage,
          };
          return <ReviewCard key={review.id} reviewInfo={reviewInfo} />;
        })}
      </div>
    </div>
  );
};
export default PropertyReviews;
