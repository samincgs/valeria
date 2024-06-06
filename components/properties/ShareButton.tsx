'use client';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share';

type ShareButtonProps = {
  propertyId: string;
  name: string;
};

const ShareButton = ({ propertyId, name }: ShareButtonProps) => {
  const url = process.env.NEXT_PUBLIC_WEBSITE_URL;
  const shareLink = `${url}/properties/${propertyId}`;
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size={'icon'} variant={'outline'}>
          <Share className='w-4 h-4' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-32' side='top' align='end' sideOffset={10}>
        <div className='flex items-center justify-center gap-x-2'>
          <TwitterShareButton url={shareLink} title={name}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <LinkedinShareButton url={shareLink} title={name}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          <EmailShareButton url={shareLink} title={name}>
            <EmailIcon size={32} round />
          </EmailShareButton>
        </div>
      </PopoverContent>
    </Popover>
  );
};
export default ShareButton;
