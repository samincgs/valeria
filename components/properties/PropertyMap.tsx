'use client';
import 'leaflet/dist/leaflet.css';
import { findCountryByCode } from '@/utils/countries';
import Title from './Title';
import { MapContainer, Marker, TileLayer, ZoomControl } from 'react-leaflet';
import L from 'leaflet';

const customIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [20, 30],
});

const PropertyMap = ({ countryCode }: { countryCode: string }) => {
  const defaultLocation = [51.505, -0.09] as [number, number];
  const location = findCountryByCode(countryCode)?.location as [number, number];
  return (
    <div className='mt-4'>
      <div className='mb-4'>
        <Title text='where you will be staying' />
      </div>
      <MapContainer
        center={location || defaultLocation}
        zoomControl={false}
        scrollWheelZoom={false}
        zoom={6}
        className='h-[50vh] rounded-lg relative z-0'
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <ZoomControl position='bottomright' />
        <Marker position={location || defaultLocation} icon={customIcon} />
      </MapContainer>
    </div>
  );
};
export default PropertyMap;
