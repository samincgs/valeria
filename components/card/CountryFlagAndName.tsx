import { findCountryByCode } from '@/utils/countries';
const CountryFlagAndName = ({ countryCode }: { countryCode: string }) => {
  const country = findCountryByCode(countryCode)!;
  const validCountryName =
    country.name.length > 20 ? country.name.substring(0, 20) : country.name;
  return (
    <span className='flex items-center justify-between gap-2 text-xs border p-1.5 rounded-md border-muted-foreground '>
      {validCountryName}
    </span>
  );
};
export default CountryFlagAndName;
