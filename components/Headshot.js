// next image
import Image from 'next/image';

const Headshot = () => {
  return (
    // <div className="hidden xl:flex xl:max-w-none scale-x-[-1]">
    <div className="hidden xl:flex scale-x-[-1]">
      <Image
        src={'/hugo-headshot.png'}
        width={737}
        height={678}
        alt="Image of Hugo Arriojas"
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Headshot;
