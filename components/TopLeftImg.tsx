//next image
import Image from 'next/image';
import React from 'react';

const TopLeftImg: React.FC = () => {
  return (
    <div className='w=[200px] background-image absolute left-0 top-0 z-0 opacity-50 mix-blend-color-dodge xl:w-[400px]'>
      <Image
        src='/background-assets/top-left-img.png'
        width={400}
        height={400}
        alt=''
      />
    </div>
  );
};

export default TopLeftImg;
