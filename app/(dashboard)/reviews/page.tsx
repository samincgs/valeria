import EmptyList from '@/components/home/EmptyList';
import Title from '@/components/properties/Title';
import DeleteReview from '@/components/reviews/DeleteReview';
import ReviewCard from '@/components/reviews/ReviewCard';
import { fetchPropertyReviewsByUser } from '@/utils/actions';

const ReviewsPage = async () => {
  const reviews = await fetchPropertyReviewsByUser();

  if (reviews.length === 0)
    return <EmptyList message='please add a review to see them here' />;

  return (
    <>
      <Title text='your reviews' />
      <div className='grid md:grid-cols-2 gap-8 mt-4'>
        {reviews.map((review) => {
          const { rating, comment, property } = review;
          const { name, image } = property;
          const reviewInfo = {
            rating,
            comment,
            name,
            image,
          };

          return (
            <ReviewCard key={review.id} reviewInfo={reviewInfo}>
              <DeleteReview reviewId={review.id} />
            </ReviewCard>
          );
        })}
      </div>
    </>
  );
};
export default ReviewsPage;
