import React from 'react';
import { Media } from '@/components/Media';
import { cn } from '@/utilities/cn';
import RichText from '@/components/RichText';
import { LinkCard } from '@/components/LinkCard';
import { CMSLink } from '@/components/Link';

import type { CallToActionBlock as CTABlockProps } from '@/payload-types';

export const CallToActionBlock = ({
  bgImage,
  heading,
  links,
  textAlign = 'center',
  textColor: textColorProp = 'light',
  body,
  displayMode = 'block',
}: CTABlockProps) => {
  const textColor = textColorProp === 'light' ? 'text-white' : 'text-black';

  if (displayMode === 'section') {
    return (
      <section className="w-full relative textured-top wrapper-lg bg-interaction-700">
        <div className="container max-w-[1200px] w-full flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-16 px-4 pt-16 pb-20">
          <div className="flex flex-col gap-6">
            <h2 className={cn('font-heading leading-[110%] font-normal', textColor)}>{heading}</h2>
            {body && (
              <RichText
                data={body}
                enableGutter={false}
                className={cn('prose-a:font-semibold', textColor, `prose-a:${textColor}`)}
              />
            )}
          </div>

          {links && links.length > 0 && (
            <LinkCard
              id={links[0].id || 'cta-link'}
              link={links[0].link}
              isButtonVariation={true}
              buttonClassName="md:min-w-[320px] max-w-[calc(100vw-2rem)]"
            />
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="wrapper-col w-full relative flex justify-center items-center my-8 py-12 px-10 md:px-[60px]">
      {bgImage && typeof bgImage === 'object' ? (
        <Media
          className="w-full h-full absolute"
          imgClassName="w-full h-full object-cover object-center rounded-xl"
          priority
          resource={bgImage}
        />
      ) : (
        <div className="w-full h-full absolute bg-basic rounded-xl"></div>
      )}
      <div
        className={cn(
          'w-full flex flex-col z-10 gap-6',
          textAlign === 'left' ? 'items-start' : 'items-center',
        )}
      >
        <h2
          className={cn(
            'font-heading text-5xl leading-[110%] font-normal',
            textColor,
            textAlign === 'left' ? 'text-start' : 'text-center',
          )}
        >
          {heading}
        </h2>
        {body && (
          <RichText
            data={body}
            enableGutter={false}
            className={cn(
              textColor,
              `prose-a:font-semibold`,
              `prose-a:${textColor}`,
              textAlign === 'left' ? 'text-start mx-0' : 'text-center',
            )}
          />
        )}
        <div className={cn('flex flex-wrap justify-center gap-8 mt-2')}>
          {links?.map((link, index) => (
            <CMSLink
              key={index}
              appearance={'inverted'}
              {...link.link}
            >
            </CMSLink>
          ))}
          </div>
        </div>
      </section>
  );
};
