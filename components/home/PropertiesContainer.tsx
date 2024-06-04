import { fetchProperties } from '@/utils/actions';
import { PropertyCardProps } from '@/utils/types';
import EmptyList from './EmptyList';
import PropertiesList from './PropertiesList';

type PropertiesContainerProps = {
  category?: string;
  search?: string;
};

const PropertiesContainer = async ({
  category,
  search,
}: PropertiesContainerProps) => {
  const properties: PropertyCardProps[] = await fetchProperties({
    category,
    search,
  });

  if (properties.length === 0)
    return (
      <EmptyList
        heading='No results found.'
        message='Try changing or remove some of your filters.'
        btnText='clear filters'
      />
    );

  return <PropertiesList properties={properties} />;
};
export default PropertiesContainer;
