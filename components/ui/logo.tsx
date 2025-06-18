import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div>
      <Image
        src='/favicon.png'
        alt='Hugo arriojas logo'
        width={300}
        height={90}
        style={{ width: 'auto', height: '90px' }}
      />
    </div>
  );
};

export default Logo;
