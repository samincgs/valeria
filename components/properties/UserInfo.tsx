import Image from 'next/image';

type UserInfoProps = {
  profileImage: string;
  firstName: string;
};

const UserInfo = ({ profileImage, firstName }: UserInfoProps) => {
  return (
    <div className='flex items-center gap-x-4 mt-4'>
      <div className='relative h-[50px] w-[50px] '>
        <Image
          src={profileImage}
          alt='profileImage'
          fill
          priority
          className='object-cover rounded-md'
        />
      </div>
      <div className='flex flex-col gap-y-1'>
        <p className='text-sm font-medium capitalize'>
          hosted by <span className='font-extrabold'>{firstName}</span>
        </p>
        <p className='text-muted-foreground font-light text-sm'>
          Superhost | hosting for 2 years
        </p>
      </div>
    </div>
  );
};
export default UserInfo;
