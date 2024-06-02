import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import FormLabel from './FormLabel';

type PriceInputProps = {
  defaultValue?: number;
};

const PriceInput = ({ defaultValue }: PriceInputProps) => {
  const name = 'price';
  return (
    <div className='flex flex-col gap-2 mb-4'>
      <FormLabel name={name} text='price ($)' />

      <Input
        type='number'
        id={name}
        name={name}
        min={0}
        defaultValue={defaultValue || 100}
        required
      />
    </div>
  );
};
export default PriceInput;
