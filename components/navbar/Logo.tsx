import Link from 'next/link';
import { University } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Logo = () => {
  return (
    <Button size='icon' asChild>
      <Link href='/'>
        <University className='w-6 h-6' />
      </Link>
    </Button>
  );
};
export default Logo;
