'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

import RatingInput from '@/components/form/RatingInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import FormContainer from '../form/FormContainer';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { createReviewAction } from '@/utils/actions';
import { SubmitButton } from '@/components/form/Buttons';

const SubmitReview = ({ propertyId }: { propertyId: string }) => {
  const [isReviewFormVisible, setIsReviewFormVisible] = useState(false);
  return (
    <div className='mt-8'>
      <Button
        onClick={() => setIsReviewFormVisible((prev) => !prev)}
        className='capitalize'
      >
        leave a review
      </Button>
      {isReviewFormVisible && (
        <Card className='p-6 m-8'>
          <CardHeader>
            <CardTitle className='text-xl lg:text-2xl font-semibold'>
              Review
            </CardTitle>
          </CardHeader>
          <CardContent>
            <FormContainer action={createReviewAction}>
              <input type='hidden' name='propertyId' value={propertyId} />
              <div className='flex flex-col gap-4'>
                <RatingInput name='rating' />
                <TextAreaInput
                  name='comment'
                  labelText='feedback'
                  defaultValue='amazing place!!!'
                />
              </div>
              <SubmitButton text='submit' className=' mt-4' />
            </FormContainer>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
export default SubmitReview;
