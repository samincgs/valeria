'use client';
import { SignOutButton } from '@clerk/nextjs';
import { useToast } from '@/components/ui/use-toast';

const SignOutLink = () => {
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      description: 'you have been signed out.',
    });
  };

  return (
    <SignOutButton redirectUrl='/'>
      <button onClick={handleLogout} className='w-full text-left'>
        Logout
      </button>
    </SignOutButton>
  );
};
export default SignOutLink;
