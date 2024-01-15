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
        {/* Tooltip */}
        <div className="absolute top-9 -right-6 hidden group-hover:flex">
          <div className="bg-white relative flex items-center p-[6px] rounded-[3px]">
            <p className="text-[12px] leading-none font-semibold capitalize text-primary">
              LinkedIn
            </p>
            {/* triangle */}
            <div className="border-solid border-b-white border-b-8 border-r-transparent border-l-transparent border-r-[6px] border-l-[6px] absolute -top-2 left-5"></div>
          </div>
        </div>
      </Link>
      <Link
        href={'https://github.com/HugoArriojas'}
        target="_blank"
        className="hover:text-accent transition-all duration-300 relative flex items-center group"
      >
        <RiGithubFill />
        {/* Tooltip */}
        <div className="absolute top-9 -left-4 hidden group-hover:flex">
          <div className="bg-white relative flex items-center p-[6px] rounded-[3px]">
            <p className="text-[12px] leading-none font-semibold capitalize text-primary">
              Github
            </p>
            {/* triangle */}
            <div className="border-solid border-b-white border-b-8 border-r-transparent border-l-transparent border-r-[6px] border-l-[6px] absolute -top-2 left-5"></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Socials;
