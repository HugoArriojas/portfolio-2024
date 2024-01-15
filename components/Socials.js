// Links
import Link from 'next/link';

// icons
import { RiLinkedinBoxFill, RiGithubFill } from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={'https://linkedin.com/in/hugoarriojas'}
        target="_blank"
        className="hover:text-accent transition-all duration-300 relative flex items-center group"
      >
        <RiLinkedinBoxFill />
      </Link>
      <Link
        href={'https://github.com/HugoArriojas'}
        target="_blank"
        className="hover:text-accent transition-all duration-300 relative flex items-center group"
      >
        <RiGithubFill />
      </Link>
    </div>
  );
};

export default Socials;
