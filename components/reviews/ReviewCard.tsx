import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Rating from './Rating';
import Comment from './Comment';

type ReviewCardProps = {
  review: {
    rating: number;
    comment: string;
    profile: {
      firstName: string;
      profileImage: string;
    };
  };
  children?: React.ReactNode;
};

const ReviewCard = ({ review, children }: ReviewCardProps) => {
  const { rating, comment, profile } = review;
  const { firstName, profileImage } = profile;
  return (
    <Card className='relative'>
      <CardHeader>
        <div className='flex items-center'>
          <img
            src={profileImage}
            alt='firstName'
            className='w-12 h-12 rounded-full object-cover'
          />
          <div className='ml-4'>
            <h3 className='text-md font-bold capitalize mb-1'>{firstName}</h3>
            <Rating rating={rating} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Comment comment={comment} />
      </CardContent>
      <div className='absolute top-3 right-3'>
        {/* delete button later */}
        {children}
      </div>
    </Card>
  );
};
export default ReviewCard;
