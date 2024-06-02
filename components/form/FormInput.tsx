import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import FormLabel from './FormLabel';

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
};

const FormInput = ({
  name,
  label,
  type,
  placeholder,
  defaultValue,
}: FormInputProps) => {
  return (
    <div className='flex flex-col gap-2 mb-4'>
      <FormLabel name={name} text={label || name} />
      <Input
        type={type}
        id={name}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
      />
    </div>
  );
};
export default FormInput;
