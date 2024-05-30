import { Input } from '@/components/ui/input';

const NavSearch = () => {
  return (
    <Input
      type='text'
      placeholder='find a property...'
      className='hidden sm:block max-w-sm dark:bg-secondary'
    />
  );
};
export default NavSearch;
