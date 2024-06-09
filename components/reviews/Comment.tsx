'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Comment = ({ comment }: { comment: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongComment = comment.length > 200;
  const displayedComment =
    isLongComment && !isExpanded ? `${comment.slice(0, 200)}...` : comment;

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className=''>
      <p className='text-sm leading-relaxed'>{displayedComment}</p>
      {isLongComment && (
        <Button
          variant={'link'}
          className='pl-0 capitalize'
          onClick={toggleExpanded}
        >
          {isExpanded ? 'hide' : 'show more'}
        </Button>
      )}
    </div>
  );
};
export default Comment;
