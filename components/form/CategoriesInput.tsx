import { categories } from '@/utils/categories';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import FormLabel from './FormLabel';

type CategoriesInputProps = {
  defaultValue?: string;
};

const CategoriesInput = ({ defaultValue }: CategoriesInputProps) => {
  const name = 'category';
  return (
    <div className='mb-2'>
      <FormLabel name={name} text='categories' />
      <Select
        defaultValue={defaultValue || categories[0].label}
        name={name}
        required
      >
        <SelectTrigger id={name}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category.label} value={category.label}>
              <div className='flex items-center gap-2 capitalize'>
                <category.icon className='w-4 h-4' />
                {category.label}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
export default CategoriesInput;
