// next image
import Image from 'next/image';

const Bulb = () => {
  return (
    <div className='background-image absolute -bottom-[15%] -left-36 z-0 w-[200px] rotate-12 animate-pulse mix-blend-color-dodge duration-75 xl:w-[260px]'>
      <Image
        src={'/background-assets/bulb.png'}
        width={260}
        height={200}
        className='h-full w-full'
        alt=''
      />
    </div>
  );
};

export default Bulb;
