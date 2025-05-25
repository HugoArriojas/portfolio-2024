import Link from 'next/link';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import React from 'react';

// Define TypeScript interfaces for work objects
interface WorkObject {
  title: string;
  name: string;
  detailsLink: string;
  liveLink?: string;
  alt?: string;
  technologies: string;
  github?: string;
}

interface ExperienceBlockProps {
  work: WorkObject;
  index: number;
}

const ExperienceBlock: React.FC<ExperienceBlockProps> = ({ work, index }) => {
  return (
    <div
      key={index}
      className='flex flex-col sm:flex-row justify-between bg-gradient-to-b from-primary/50 to-black/50 my-3 p-5 rounded-lg group/work'
    >
      <div className='flex flex-col justify-between '>
        <Link
          className='text-[13px] tracking-[0.2em] h-full group group-hover/work:text-accent'
          href={work.detailsLink}
          cursor-pointer='true'
        >
          <h3 className='group-hover:text-accent mb-2'>{work.title}</h3>
          <p className='text-[11px] py-auto flex items-center'>
            {work.technologies}
          </p>
        </Link>
        {(work.liveLink || work.github) && (
          <div className='flex flex-col sm:flex-row w-[60%] justify-between gap-x-5 gap-y-5  pt-2'>
            {work.liveLink && (
              <Link
                className='flex items-center gap-x-2 text-[13px] tracking-[0.2em] group'
                href={work.liveLink}
                target='_blank'
              >
                <p className='font-bold group-hover:text-accent'>
                  LIVE&nbsp;PROJECT
                </p>
                <div className='text-xl group-hover:text-accent'>
                  <BsArrowRight />
                </div>
              </Link>
            )}
            {work.github && (
              <Link
                className='flex items-center gap-x-2 text-[13px] tracking-[0.2em] group'
                href={work.github}
                target='_blank'
              >
                <p className='font-bold group-hover:text-accent'>GITHUB</p>
                <div className='text-xl group-hover:text-accent'>
                  <BsArrowRight />
                </div>
              </Link>
            )}
          </div>
        )}
      </div>
      <Link
        className='mt-5 sm:mt-0 sm:max-w-[35%] group'
        href={work.detailsLink}
      >
        <Image
          src={`/${work.name}/mocks1.png`}
          height={1000}
          width={500}
          alt={work.alt || `Image of ${work.title} project`}
          className='group-hover/work:scale-110 transition-all duration-700'
        />
      </Link>
    </div>
  );
};

export default ExperienceBlock;
