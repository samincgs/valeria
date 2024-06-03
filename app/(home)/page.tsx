import CategoriesList from '@/components/home/CategoriesList';
import PropertiesContainer from '@/components/home/PropertiesContainer';

const HomePage = ({
  searchParams,
}: {
  searchParams: { category?: string; search?: string };
}) => {
  console.log(searchParams);
  return (
    <div>
      <CategoriesList
        category={searchParams.category}
        search={searchParams.search}
      />
      {/* <PropertiesContainer  category={searchParams.category} search={searchParams.search} /> */}
    </div>
  );
};
export default HomePage;
