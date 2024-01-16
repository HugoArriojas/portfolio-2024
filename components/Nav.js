// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiEnvelope,
} from 'react-icons/hi2';

import { RiArticleFill } from 'react-icons/ri';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'resume',
    path: '/HugoArriojasResume.pdf',
    icon: <RiArticleFill />,
    target: '_blank',
  },
  {
    name: 'contact',
    path: 'mailto:hugo.arriojas@hotmail.com?subject=Hello Hugo',
    icon: <HiEnvelope />,
  },
];

// next link
import Link from 'next/link';
// next router
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav>
      {/* Inner */}
      <div>
        {navData.map((link, index) => {
          return (
            <Link
              className={`${link.path === pathname}s`}
              href={link.path}
              key={index}
              target={link.target}
            >
              {/* Tooltip */}
              <div>{link.name}</div>
              {/* Icon */}
              {link.icon}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
