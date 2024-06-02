import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import FormLabel from './FormLabel';

type TextAreaInputProps = {
  name: string;
  labelText?: string;
  defaultValue?: string;
};

const TextAreaInput = ({
  name,
  labelText,
  defaultValue,
}: TextAreaInputProps) => {
  const tempDefaultDescription =
    'This charming retreat features two spacious bedrooms with queen-sized beds and air conditioning for your comfort. The cozy living room has comfortable seating, a fireplace, and large windows that flood the space with natural light. The fully-equipped kitchen includes modern appliances and all the necessary cookware. The dining area seats six, perfect for family meals. The cottage has two bathrooms stocked with fresh towels and toiletries. Amenities include complimentary Wi-Fi, a flat-screen TV with streaming services, board games, books, and a washer and dryer.';
  return (
    <div className='mb-2'>
      <FormLabel name={name} text={labelText || name} />
      <Textarea
        placeholder=''
        name={name}
        id={name}
        defaultValue={defaultValue || tempDefaultDescription}
        rows={6}
        required
        className='leading-loose'
      />
    </div>
  );
};
export default TextAreaInput;
