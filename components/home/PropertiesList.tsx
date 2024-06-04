import { PropertyCardProps } from '@/utils/types';
import PropertyCard from '../card/PropertyCard';

type PropertiesListProps = {
  properties: PropertyCardProps[];
};

const PropertiesList = ({ properties }: PropertiesListProps) => {
  return (
    <div className='mt-4 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};
export default PropertiesList;
