import { Input } from '@/components/ui/input';
import FormLabel from './FormLabel';

const ImageInput = () => {
  const name = 'image';
  return (
    <div className='mb-2'>
      <FormLabel name={name} />
      <Input
        type='file'
        id={name}
        name={name}
        required
        accept='image/*'
        className='max-w-xs'
      />
    </div>
  );
};
export default ImageInput;
