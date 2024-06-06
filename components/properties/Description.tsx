'use client';
import { useState } from 'react';
import Title from './Title';
import { Button } from '@/components/ui/button';

const Description = ({ description }: { description: string }) => {
  const [isFullDescriptionShown, setIsFullDescriptionShown] = useState(false);
  const words = description.split(' ');

  const isLongDescription = words.length > 50;

  const displayedDescription =
    isLongDescription && !isFullDescriptionShown
      ? words.slice(0, 50).join(' ') + '...'
      : description;

  const toggleDescription = () => {
    setIsFullDescriptionShown(!isFullDescriptionShown);
  };

  return (
    <div className='mt-4'>
      <Title text={'description'} />
      <p className='font-light leading-loose'>{displayedDescription}</p>
      {isLongDescription && (
        <Button
          variant={'link'}
          className='pl-0 capitalize'
          onClick={toggleDescription}
        >
          {isFullDescriptionShown ? 'hide' : 'show more'}
        </Button>
      )}
    </div>
  );
};
export default Description;
