// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// components
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className="absolute z-50 flex h-[85px] w-full items-center xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-row items-center justify-between px-2 pb-5 pt-8 md:px-0">
          <Link href={'/'}>
            <Image
              src={'/hugo-logo.svg'}
              width={220}
              height={48}
              alt="Hugo Arriojas Logo"
              priority={true}
            />
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
