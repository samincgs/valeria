import { Input } from '@/components/ui/input';

const NavSearch = () => {
  return (
    <Input
      type='text'
      placeholder='find a property...'
      className='max-w-xs dark:bg-muted'
    />
  );
};
export default NavSearch;
