import type { Links as LinksProps, SidebarLink as SidebarLinkProps } from 'src/payload-types';
import React from 'react';
import { LinkCard } from '@/components/LinkCard';
import { cn } from '@/utilities/cn';

export const Links = ({
  heading,
  subtitle,
  linkArray,
  displayMode = 'buttons',
  backgroundColor = 'bg-interaction-900',
}: LinksProps) => {
  if (!linkArray?.length) return null;

  const isButtonVariation = displayMode === 'buttons';
  let gridClasses = isButtonVariation
    ? 'w-full mx-auto flex flex-wrap justify-center gap-5 gap-y-8'
    : 'w-full grid justify-center gap-6';

  if (isButtonVariation && linkArray.length === 4) {
    gridClasses += ' max-w-[800px]';
  }

  return (
    <section className={`wrapper-lg py-[60px] ${backgroundColor}`}>
      <div className="container-lg w-full flex flex-col gap-y-6">
        {(heading || subtitle) && (
          <div>
            {heading && (
              <h2
                className={cn(
                  'w-full my-8',
                  subtitle ? 'text-left' : 'text-center',
                  backgroundColor === 'bg-interaction-900' && 'text-white',
                )}
              >
                {heading}
              </h2>
            )}
            {subtitle && (
              <p
                className={cn(
                  'text-left w-full text-primary-surface-default md:max-w-[30%] mb-2 md:mr-16',
                  backgroundColor === 'bg-interaction-900' && 'text-white',
                )}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className={cn(gridClasses, 'grid-cols-[repeat(auto-fill,384px)]')}>
          {linkArray.map((props, index) => {
            const { id, media, cardColor } = props;
            return (
              <LinkCard
                key={id}
                id={id || `${heading}-${index}`}
                media={!isButtonVariation ? media : undefined}
                link={props.link}
                linkHeading={undefined}
                isButtonVariation={isButtonVariation}
                cardColor={cardColor}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const SidebarLink = ({
  heading,
  link,
  cardColor = 'bg-bright-green-200',
}: SidebarLinkProps) => {
  if (!link) return null;

  return (
    <div className="py-4">
      <div className="flex flex-col gap-3">
        {heading && <h4 className={cn('mb-6 text-left text-primary-800 uppercase')}>{heading}</h4>}
        <LinkCard
          id={`sidebar-link-${heading}`}
          link={link}
          isButtonVariation={true}
          cardColor={cardColor}
          buttonClassName="w-full"
        />
      </div>
    </div>
  );
};
