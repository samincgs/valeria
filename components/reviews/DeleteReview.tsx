import { deleteReviewAction } from '@/utils/actions';
import FormContainer from '../form/FormContainer';
import { IconButton } from '../form/Buttons';

const DeleteReview = ({ reviewId }: { reviewId: string }) => {
  const deleteReview = deleteReviewAction.bind(null, { reviewId });
  return (
    <FormContainer action={deleteReview}>
      <IconButton actionType='delete' />
    </FormContainer>
  );
};
export default DeleteReview;
