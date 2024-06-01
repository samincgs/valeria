import { CircleUserRound } from 'lucide-react';
import { fetchProfileImage } from '@/utils/actions';
import Image from 'next/image';

const UserIcon = async () => {
  const profileImage = await fetchProfileImage();
  if (profileImage) {
    return (
      <Image
        src={profileImage}
        alt='profile image'
        className='w-6 h-6 rounded-full object-cover'
        width={50}
        height={50}
      />
    );
  }
  return (
    <CircleUserRound className='w-6 h-6 bg-primary rounded-full text-white' />
  );
};
export default UserIcon;
