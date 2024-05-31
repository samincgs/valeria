import { Menu } from 'lucide-react';
import { links } from '@/utils/links';
import Link from 'next/link';
import { SignInButton, SignUpButton, SignedIn, SignedOut } from '@clerk/nextjs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import UserIcon from './UserIcon';
import SignOutLink from './SignOutLink';

const LinksDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='flex items-center gap-x-4'>
          <Menu className='w-5 h-5' />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-52' sideOffset={10}>
        <SignedIn>
          {links.map((link) => (
            <DropdownMenuItem key={link.href}>
              <Link href={link.href} className='capitalize '>
                {link.label}
              </Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator className='bg-slate-200 dark:bg-slate-700' />
          <DropdownMenuItem>
            <SignOutLink />
          </DropdownMenuItem>
        </SignedIn>
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode='modal'>
              <button>Login</button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuSeparator className='bg-slate-200 dark:bg-slate-700' />
          <DropdownMenuItem>
            <SignUpButton mode='modal'>
              <button>Register</button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default LinksDropdown;
