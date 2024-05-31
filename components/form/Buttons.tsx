'use client';

import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';

type SubmitButtonProps = {
  text?: string;
  className?: string;
};

export const SubmitButton = ({
  text = 'submit',
  className,
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type='submit'
      size='lg'
      disabled={pending}
      className={`capitalize ${className}`}
    >
      {pending ? (
        <>
          <Loader2 className='mr-2 h-4 w-4 animate-spin' />
          Please wait...
        </>
      ) : (
        <p>{text}</p>
      )}
    </Button>
  );
};
