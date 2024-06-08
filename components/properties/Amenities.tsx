const Amenities = ({ amenities }: { amenities: string }) => {
  const amenitiesList = JSON.parse(amenities);
  console.log(amenities);
  return <div>Amenities</div>;
};
export default Amenities;
