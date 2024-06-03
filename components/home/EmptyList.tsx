import { Button } from '@/components/ui/button';
import Link from 'next/link';

type EmptyListProps = {
  heading?: string;
  message?: string;
  btnText?: string;
};

const EmptyList = ({
  heading = 'No items in the list.',
  message = 'Keep exploring our properties.',
  btnText = 'back home',
}: EmptyListProps) => {
  return (
    <div className='mt-4'>
      <h2 className='text-2xl font-bold mb-2'>{heading}</h2>
      <p className='text-lg text-zinc-400'>{message}</p>
      <Button asChild className='mt-6 capitalize' size={'lg'}>
        <Link href={'/'}>{btnText}</Link>
      </Button>
    </div>
  );
};
export default EmptyList;
