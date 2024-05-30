import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { links } from '@/utils/links';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';
import UserIcon from './UserIcon';

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
        {links.map((link) => (
          <DropdownMenuItem key={link.href}>
            <Link href={link.href} className='capitalize '>
              {link.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default LinksDropdown;
