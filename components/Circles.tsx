// next image
import Image from 'next/image';
import React from 'react';

const Circles: React.FC = () => {
  return (
    <div className='background-image absolute -bottom-2 -right-16 z-10 w-[200px] animate-pulse mix-blend-color-dodge duration-75 xl:w-[300px]'>
      <Image
        src={'/background-assets/circles.png'}
        width={260}
        height={200}
        className='h-full w-full'
        alt=''
      />
    </div>
  );
};

export default Circles;
