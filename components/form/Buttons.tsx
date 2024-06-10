'use client';

import { Loader2, Trash, PenSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';
import { SignInButton } from '@clerk/nextjs';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

type SubmitButtonProps = {
  text?: string;
  className?: string;
  size?: 'default' | 'lg' | 'sm';
};

type actionType = 'edit' | 'delete';

export const SubmitButton = ({
  text = 'submit',
  className,
  size = 'lg',
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type='submit'
      size={size}
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

export const CardSignInButton = () => {
  return (
    <SignInButton mode='modal'>
      <Button type='button' size={'icon'} variant={'outline'}>
        <FaRegHeart className='w-4 h-4' />
      </Button>
    </SignInButton>
  );
};

export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
  const { pending } = useFormStatus();
  return (
    <Button type='submit' size={'icon'} variant={'outline'}>
      {pending ? (
        <Loader2 className='h-4 w-4 animate-spin' />
      ) : isFavorite ? (
        <FaHeart className='text-rose-500 w-4 h-4' />
      ) : (
        <FaRegHeart className='w-4 h-4' />
      )}
    </Button>
  );
};

export const IconButton = ({ actionType }: { actionType: actionType }) => {
  const { pending } = useFormStatus();
  const renderIcon =
    actionType === 'edit' ? (
      <PenSquare className='w-5 h-5' />
    ) : (
      <Trash className='w-5 h-5 text-rose-700 fill-none hover:fill-current transition duration-200' />
    );

  return (
    <Button type='submit' size={'icon'} variant={'link'}>
      {pending ? <Loader2 className='w-4 h-4 animate-spin' /> : renderIcon}
    </Button>
  );
};
