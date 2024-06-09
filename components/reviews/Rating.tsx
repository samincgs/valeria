import { RiStarSLine, RiStarFill } from 'react-icons/ri';
import { FaStar, FaRegStar } from 'react-icons/fa';

const Rating = ({ rating }: { rating: number }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1 <= rating);
  return (
    <div className='flex items-center gap-1'>
      {stars.map((star, index) => {
        return star ? (
          <FaStar key={index} className='w-3 h-3 text-primary' />
        ) : (
          <FaRegStar key={index} className='w-3 h-3' />
        );
      })}
    </div>
  );
};
export default Rating;
