// Links
import Link from 'next/link';

// icons
import { RiLinkedinBoxFill, RiGithubFill } from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-3xl md:text-2xl">
      <Link
        href={'https://linkedin.com/in/hugoarriojas'}
        target="_blank"
        className="group relative flex items-center transition-all duration-300 hover:text-accent"
      >
        <RiLinkedinBoxFill />
        {/* Tooltip */}
        <div className="absolute -right-6 top-9 hidden group-hover:flex">
          <div className="relative flex items-center rounded-[3px] bg-white p-[6px]">
            <p className="text-[12px] font-semibold capitalize leading-none text-primary">
              LinkedIn
            </p>
            {/* triangle */}
            <div className="absolute -top-2 left-5 border-b-8 border-l-[6px] border-r-[6px] border-solid border-b-white border-l-transparent border-r-transparent"></div>
          </div>
        </div>
      </Link>
      <Link
        href={'https://github.com/HugoArriojas'}
        target="_blank"
        className="group relative flex items-center transition-all duration-300 hover:text-accent"
      >
        <RiGithubFill />
        {/* Tooltip */}
        <div className="absolute -left-4 top-9 hidden group-hover:flex">
          <div className="relative flex items-center rounded-[3px] bg-white p-[6px]">
            <p className="text-[12px] font-semibold capitalize leading-none text-primary">
              Github
            </p>
            {/* triangle */}
            <div className="absolute -top-2 left-5 border-b-8 border-l-[6px] border-r-[6px] border-solid border-b-white border-l-transparent border-r-transparent"></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Socials;
