// next image
import Image from 'next/image';

const Headshot = () => {
  return (
    // <div className="hidden xl:flex xl:max-w-none scale-x-[-1]">
    <div className='background-image hidden scale-x-[-1] xl:flex'>
      <Image
        src={'/hugo-assets/hugo-headshot.png'}
        width={737}
        height={678}
        alt='Image of Hugo Arriojas'
        className='translate-z-0 h-full w-full'
      />
    </div>
  );
};

export default Headshot;
