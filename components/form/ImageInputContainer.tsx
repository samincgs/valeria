'use client';
import { CircleUserRound } from 'lucide-react';
import { actionFunction } from '@/utils/types';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import FormContainer from './FormContainer';
import ImageInput from './ImageInput';
import { SubmitButton } from './Buttons';

type ImageInputContainerProps = {
  image: string;
  name: string;
  text: string;
  action: actionFunction;
  children?: React.ReactNode;
};

const ImageInputContainer = ({
  image,
  name,
  text,
  action,
  children,
}: ImageInputContainerProps) => {
  const [isUpdateFormVisible, setUpdatedFormVisible] = useState(false);

  return (
    <div>
      {image ? (
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className='rounded object-cover mb-4 w-24 h-24'
        />
      ) : (
        <CircleUserRound className='w-24 h-24 bg-primary rounded text-white mb-4' />
      )}
      <Button
        variant='outline'
        size='sm'
        onClick={() => setUpdatedFormVisible(!isUpdateFormVisible)}
        className='capitalize'
      >
        {text}
      </Button>
      {isUpdateFormVisible && (
        <div className='max-w-lg mt-4'>
          <FormContainer action={action}>
            {children}
            <ImageInput />
            <SubmitButton size='sm' text='upload' className='mt-2' />
          </FormContainer>
        </div>
      )}
    </div>
  );
};
export default ImageInputContainer;
