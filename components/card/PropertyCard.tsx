import { formatCurrency } from '@/utils/format';
import { PropertyCardProps } from '@/utils/types';
import Image from 'next/image';
import Link from 'next/link';
import PropertyRating from './PropertyRating';

const PropertyCard = ({ property }: { property: PropertyCardProps }) => {
  const { name, price, tagline, image, country, id: propertyId } = property;
  return (
    <div className='group relative'>
      <Link href={`/properties/${propertyId}`}>
        <div className='relative h-[300px] mb-2 overflow-hidden rounded-md'>
          <Image
            src={image}
            alt={name}
            fill
            priority
            className='object-cover rounded-md transform group-hover:scale-110 transition-transform'
          />
        </div>
        <div className='flex justify-between items-center'>
          {/* add name in substring method 0 - 30 */}
          <h3 className='text-sm font-bold mt-1'>{name}</h3>
          <PropertyRating propertyId={propertyId} inPage={false} />
        </div>
        <p className='text-sm mt-1 text-muted-foreground'>{tagline}</p>
        <div className='flex items-center justify-between mt-1'>
          <p className='text-sm mt-1'>
            <span className='font-semibold'>{formatCurrency(price)}</span> per
            night
          </p>
          {/* country and flag */}
        </div>
      </Link>
      <div className='absolute top-5 right-5 z-5'>{/* favorite toggle */}</div>
    </div>
  );
};
export default PropertyCard;
