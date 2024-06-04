import { Skeleton } from '@/components/ui/skeleton';

const SkeletonCard = () => {
  return (
    <div>
      <Skeleton className='h-[300px] rounded-md' />
      <Skeleton className='h-4 mt-2 w-3/4' />
      <Skeleton className='h-4 mt-2 w-1/2' />
    </div>
  );
};

const LoadingCards = () => {
  return (
    <div className='mt-4 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
};
export default LoadingCards;
