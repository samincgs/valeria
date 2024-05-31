'use client';

import { useClerk } from '@clerk/nextjs';
import { useToast } from '@/components/ui/use-toast';

const SignOutLink = () => {
  const { toast } = useToast();
  const { signOut } = useClerk();

  const handleLogout = () => {
    signOut({
      redirectUrl: '/',
    });
    toast({
      description: 'you have been signed out.',
    });
  };

  return (
    <button onClick={handleLogout} className='w-full text-left'>
      Logout
    </button>
  );
};
export default SignOutLink;
