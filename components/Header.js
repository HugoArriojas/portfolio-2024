// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// components
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className="absolute z-50 w-full flex items-center sm:px-16 xl:px-0 h-[85px]">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center pt-8 pb-5 lg:pl-5">
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
