'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { Amenity, amenities } from '@/utils/amenities';
import { useState } from 'react';

type AmenitiesInputProps = {
  defaultValue?: Amenity[];
};

const AmenitiesInput = ({ defaultValue }: AmenitiesInputProps) => {
  const [selectedAmenities, setSelectedAmenities] = useState<Amenity[]>(
    defaultValue || amenities
  );

  const handleChange = (amenity: Amenity) => {
    setSelectedAmenities((prev) =>
      prev.map((a) =>
        a.name === amenity.name ? { ...a, selected: !a.selected } : a
      )
    );
  };

  return (
    <div className='mt-6 '>
      <input
        type='hidden'
        name='amenities'
        value={JSON.stringify(selectedAmenities)}
      />
      <div className='grid grid-cols-2 gap-4'>
        {selectedAmenities.map((amenity) => (
          <div key={amenity.name} className='flex items-center gap-x-2'>
            <Checkbox
              id={amenity.name}
              checked={amenity.selected}
              onCheckedChange={() => handleChange(amenity)}
            />
            <label
              htmlFor={amenity.name}
              className='text-sm font-medium leading-none capitalize flex items-center gap-x-2'
            >
              {amenity.name} <amenity.icon className='w-4 h-4' />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AmenitiesInput;
