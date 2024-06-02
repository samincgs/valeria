import { Label } from '@/components/ui/label';

type FormLabelProps = {
  name: string;
  text?: string;
};

const FormLabel = ({ name, text }: FormLabelProps) => {
  return (
    <Label htmlFor={name} className='tracking-wide font-semibold capitalize'>
      {text || name}
    </Label>
  );
};
export default FormLabel;
