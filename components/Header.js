// next image
import Image from 'next/image';

// next link
import Link from 'next/link';
const Header = () => {
  return (
      <header>
      <div className="container mx-auto">
          <Link href={'/'}>
            <Image
              src={'/logo2.svg'}
              width={220}
              height={48}
              alt="Hugo Arriojas Logo"
              priority={true}
            />
          </Link>
        </div>
    </header>
  );
};

export default Header;
