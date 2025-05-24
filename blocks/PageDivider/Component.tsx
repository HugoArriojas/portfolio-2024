'use client';

import React from 'react';
import { cn } from '@/utilities/cn';
import { Media } from '@/components/Media';
import RichText from '@/components/RichText';
import { CameraIcon } from 'lucide-react';

import type { PageDividerSection } from '@/payload-types';

export const PageDivider: React.FC<PageDividerSection> = ({
  heading,
  image,
  blurb = false,
  blurbText,
}) => {
  const wrapperClasses = {
    'h-[560px] md:h-[660px] items-center': !blurb,
    'h-[480px] md:h-[580px] items-end mb-28': blurb,
  };

  return (
    <section className="layout wrapper-lg w-full relative py-16">
      <div className={cn('w-full relative overflow-visible flex', wrapperClasses)}>
        {image ? (
          <Media resource={image} className="absolute inset-0 object-cover mask-bottom overflow-hidden" imgClassName="w-full h-full object-cover" fill={true} />
        ) : (
          <div className="absolute inset-0 bg-basic mask-bottom overflow-hidden" />
        )}

        {blurb && blurbText && (
          <div className="relative w-[480px] max-w-[90%] -mb-28 mr-auto p-[36px] md:pl-16 flex flex-col items-center justify-center bg-white/90 rounded-r-lg">
            <div className="w-full flex items-center mb-4 text-interaction-800">
              <CameraIcon className="w-6 h-6 mr-2 inline" />
              <span className="text-base font-sans font-semibold uppercase tracking-wider">Must See</span>
            </div>
            {heading && (
              <h2 className="w-full mb-4 font-heading text-4xl md:text-5xl text-interaction-800 text-left">
                {heading}
              </h2>
            )}
            <p className="w-full font-body sm:text-base text-black text-left">
              <RichText data={blurbText} enableProse={false} enableGutter={false} />
            </p>
          </div>
        )}

        {heading && !blurb && (
          <div className="relative w-[480px] max-w-[90%] -mt-4 mr-auto p-[36px] md:pl-16 flex flex-col items-center justify-center bg-white/90 rounded-r-lg">
            <h2 className="w-full text-4xl md:text-5xl font-heading text-interaction-800 text-left">
              {heading}
            </h2>
          </div>
        )}
      </div>
    </section>
  );
};
