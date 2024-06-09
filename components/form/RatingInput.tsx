import FormLabel from './FormLabel';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const RatingInput = ({
  name,
  labelText,
}: {
  name: string;
  labelText?: string;
}) => {
  const numbers = Array.from({ length: 5 }, (_, i) => (i + 1).toString());

  console.log(numbers);

  return (
    <div className='mb-2 max-w-xs'>
      <FormLabel name={name} text={labelText} />
      <Select defaultValue={numbers[numbers.length - 1]} name={name} required>
        <SelectTrigger id={name}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {numbers.map((num, index) => {
            return (
              <SelectItem key={index} value={num}>
                {num}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
export default RatingInput;
