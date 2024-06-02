import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import FormLabel from './FormLabel';
import { formattedCountries } from '@/utils/countries';

type CountriesInputProps = {
  defaultValue?: string;
};

const CountriesInput = ({ defaultValue }: CountriesInputProps) => {
  const name = 'country';
  return (
    <div className='mb-2'>
      <FormLabel name={name} />
      <Select
        defaultValue={defaultValue || formattedCountries[0].code}
        name={name}
        required
      >
        <SelectTrigger id={name}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {formattedCountries.map((country) => (
            <SelectItem key={country.code} value={country.code}>
              <div className='flex items-center gap-2 capitalize'>
                {country.flag}
                <p className='ml-1'>{country.name}</p>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
export default CountriesInput;
