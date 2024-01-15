// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// components
import Socials from '../components/Socials';

const Header = () => {
  return (
      <header>
      <div className="container mx-auto">
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
    </header>
  );
};

export default Header;
