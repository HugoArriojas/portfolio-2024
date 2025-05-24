import { cn } from '@/utilities/cn';
import React from 'react';
import RichText from '@/components/RichText';
import { CMSLink } from '@/components/Link';

import type { ContentBlock as ContentBlockType, ContentBlockSidebar as ContentSidebarType } from '@/payload-types';
type ContentBlockLink = NonNullable<ContentBlockType['links']>[0]['link'];

const getColumnCount = (length: number) => {
  if (length === 2) return 'two';
  if (length === 3) return 'three';
  return 'one';
};

export const ContentBlock = ({ heading, columns = [], links }: ContentBlockType) => {
  const columnCount = getColumnCount(columns?.length ?? 0);

  return (
    <div className="wrapper-col my-8 prose">
      {heading && <h2>{heading}</h2>}

      {/* Columns (limit of 3) */}
      <div className={cn('w-full flex gap-8 md:gap-6 flex-row flex-wrap justify-center')}>
        {columns?.map((column, index) => (
          <div
            key={column.id || index}
            className={cn(
              'w-full flex flex-col gap-4',
              columnCount === 'two' && 'w-fit md:w-[calc(50%-12px)]',
              columnCount === 'three' && 'w-fit md:w-[calc(33.333%-16px)]',
            )}
          >
            <div>{column.richText && <RichText data={column.richText} enableGutter={false} />}</div>

            {column.links && column.links.length > 0 && (
              <div className="flex flex-wrap my-2 gap-2">
                {column.links.map((linkGroup, linkIndex) => {
                  if (!linkGroup.link?.label) return null;

                  const columnLink = linkGroup.link as ContentBlockLink;
                  return <CMSLink key={linkIndex} {...columnLink} className="my-0" />;
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Links */}
      {links && links.length > 0 && (
        <div className="flex flex-wrap my-2 gap-2">
          {links.map((linkGroup, index) => {
            if (!linkGroup.link?.label) return null;
            return <CMSLink key={index} {...linkGroup.link} className="my-0" />;
          })}
        </div>
      )}
    </div>
  );
};

export const ContentSidebar = ({ heading, richText, links, background }: ContentSidebarType) => {
  return (
    <div className={cn('wrapper-col', { 'my-2 p-5 pt-6 bg-white rounded-md shadow-green': background === 'white' })}>
      {heading && <h4 className="mb-8">{heading}</h4>}
      {richText && (
        <div className="mb-8">
          <RichText data={richText} enableGutter={false} />
        </div>
      )}
      {links && links.length > 0 && (
        <div className="flex flex-wrap my-4 gap-2">
          {links.map((linkGroup, index) => {
            if (!linkGroup.link?.label) return null;
            return <CMSLink key={index} {...linkGroup.link} className="my-0" />;
          })}
        </div>
      )}
    </div>
  );
};


