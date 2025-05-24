'use client';
import { useRef, memo } from 'react';
import { WhereaboutsEventsEmbed as WhereaboutsEventsEmbedProps } from '@/payload-types';

// Memoized embedded object to prevent full re-renders
const WhereaboutsEventsEmbeddedObject = memo(
  ({
    widgetId,
    displayMode = 'grid',
  }: Omit<WhereaboutsEventsEmbedProps, 'title' | 'blockType'>) => {
    const ref = useRef<HTMLDivElement>(null);

    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `<whereabouts-events-widget widget-id="${widgetId}" organization-id="67ffe6fae9f844cb664fc156" event-details-display-mode="slideout" widget-display-mode="${displayMode}" style="display: block; min-height: 360px" ></whereabouts-events-widget>`,
        }}
        ref={ref}
        className="max-w-[1400px] mx-auto sm:overflow-x-hidden max-sm:h-[500px]"
      />
    );
  },
);

WhereaboutsEventsEmbeddedObject.displayName = 'WhereaboutsEventsEmbeddedObject'; // Not naming memoized components throws an error

export const WhereaboutsEventsEmbed = ({
  widgetId,
  title,
  displayMode,
  customEmbed,
  embedCode,
}: WhereaboutsEventsEmbedProps) => {
  return (
    <section className="wrapper-lg layout no-bg w-full max-w-[1400px] mx-auto my-8 px-4 overflow-x-hidden">
      {title && (
        <h2 className="text-black font-body font-bold my-4 md:mb-8 lg:mb-12 normal-case">
          {title}
        </h2>
      )}
      {!customEmbed && widgetId && (
        <WhereaboutsEventsEmbeddedObject widgetId={widgetId} displayMode={displayMode} />
      )}
      {customEmbed && embedCode && (
        <div dangerouslySetInnerHTML={{ __html: embedCode }} data-lenis-prevent />
      )}
    </section>
  );
};
