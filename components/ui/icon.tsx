import React from 'react';
import Image from 'next/image';

const Icon: React.FC = () => {
  return (
    <div>
      <Image
        src='/favicon.png'
        alt='Hugo Arriojas Initials'
        width={16}
        height={16}
      />
    </div>
  );
};

export default Icon;
