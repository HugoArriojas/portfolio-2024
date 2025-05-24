'use client';
import { Embed as EmbedProps } from '@/payload-types';
import { cn } from '@/utilities/cn';
import { CMSLink } from '@/components/Link';

// Memoized embedded object to prevent full re-renders
const EmbeddedObject = ({ embedCode }: { embedCode: string }) => {
  return <div dangerouslySetInnerHTML={{ __html: embedCode }} data-lenis-prevent />;
};

export const Embed = ({
  heading,
  embedCode,
  links,
  background = 'none',
  size = 'default',
}: EmbedProps) => {
  let wrapperClasses = '';

  if (size === 'default') {
    wrapperClasses = 'wrapper-col';
  } else if (size === 'wide') {
    wrapperClasses = 'wrapper-lg container-lg max-w-[calc(1200px+2rem)]';
  } else if (size === 'full') {
    wrapperClasses = 'wrapper-lg';
  }

  const embedContainerClass =
    background === 'white'
      ? size === 'full'
        ? 'bg-white p-4 lg:p-8'
        : 'bg-white shadow-card !shadow-black/25 rounded-lg mx-2 py-8 md:py-12 px-6 md:px-[60px]'
      : 'bg-transparent';

  return (
    <section
      className={cn(wrapperClasses, 'flex flex-col justify-center my-2 gap-4 overflow-x-hidden')}
    >
      {heading && (
        <h4 className="mb-4 font-sans font-semibold text-base text-center uppercase tracking-[0.125rem]">
          {heading}
        </h4>
      )}

      <div className={cn('h-fit', embedContainerClass)}>
        {embedCode && <EmbeddedObject embedCode={embedCode} />}
      </div>

      {links && links.length > 0 && (
        <div className="flex flex-wrap justify-center gap-8 mt-4">
          {links.map((link, index) => (
            <CMSLink key={index} {...link.link} />
          ))}
        </div>
      )}
    </section>
  );
};
