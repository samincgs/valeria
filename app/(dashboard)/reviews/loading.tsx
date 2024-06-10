'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const loading = () => {
  return (
    <div className='grid md:grid-cols-2 mt-4 gap-8'>
      <ReviewLoadingCard />
      <ReviewLoadingCard />
    </div>
  );
};

const ReviewLoadingCard = () => {
  return (
    <Card>
      <CardHeader>
        <div className='flex items-center'>
          <Skeleton className='w-12 h-12 rounded-full' />
          <div className='ml-4'>
            <Skeleton className='w-[150px] h-4 mb-2' />
            <Skeleton className='w-[100px]' />
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default loading;
