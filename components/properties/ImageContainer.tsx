import Image from 'next/image';

type ImageContainerProps = {
  mainImage: string;
  name: string;
};

const ImageContainer = ({ mainImage, name }: ImageContainerProps) => {
  return (
    <div className='h-[300px] md:h-[500px] relative mt-8'>
      <Image
        src={mainImage}
        alt={name}
        fill
        className='object-cover rounded'
        priority
      />
    </div>
  );
};
export default ImageContainer;
