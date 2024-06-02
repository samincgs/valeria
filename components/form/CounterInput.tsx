'use client';

import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';

type CounterInputProps = {
  detail: string;
  defaultValue?: number;
};

const CounterInput = ({ detail, defaultValue }: CounterInputProps) => {
  const [count, setCount] = useState(defaultValue || 0);

  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };

  const decreaseCount = () => {
    setCount((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  };

  return (
    <Card className='mb-4'>
      {/* input */}
      <CardHeader className='flex gap-5'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col gap-2'>
            <h3 className='font-medium capitalize '>{detail}</h3>
            <p className='text-muted-foreground text-sm'>
              Specify the number of {detail}
            </p>
          </div>
          <div className='flex items-center gap-4'>
            <Button
              type='button'
              variant='outline'
              size='icon'
              onClick={decreaseCount}
            >
              <Minus className='w-4 h-4 text-primary' />
            </Button>
            <p className='text-xl font-bold px-1'>{count}</p>
            <Button
              type='button'
              variant='outline'
              size='icon'
              onClick={increaseCount}
            >
              <Plus className='w-4 h-4 text-primary' />
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};
export default CounterInput;
