'use client';

import { Media } from '@/components/Media';
import { CMSLink } from '@/components/Link';
import RichText from '@/components/RichText';
import type {
  ImageGalleryWithText as ImageGalleryWithTextProps,
  Media as MediaType,
} from '@/payload-types';
import { useRef, useEffect } from 'react';
import { Camera } from 'iconoir-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/utilities/cn';
import { hasRichTextContent } from '@/utilities/hasRichTextContent';
import { usePhotoswipe } from '@/hooks/usePhotoswipe';
import 'photoswipe/style.css';
import { ArrowRight } from 'lucide-react';

export const ImageGalleryWithText = ({
  heading,
  body,
  images = [],
  links,
  linksTitle,
  galleryTitle = 'Open Gallery',
  backgroundColor = 'bg-primary-50',
}: ImageGalleryWithTextProps) => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const { initLightbox } = usePhotoswipe();

  const hasTextContent = Boolean(
    heading || (body && hasRichTextContent(body)) || (links && links.length > 0),
  );
  const maxVisibleImages = hasTextContent ? 4 : 8;

  useEffect(() => {
    initLightbox();
  }, [initLightbox]);

  const handleOpenGallery = () => {
    const imageLinks = galleryRef.current?.querySelectorAll('a[data-pswp-image]');
    if (imageLinks && imageLinks.length > 0) {
      (imageLinks[0] as HTMLElement)?.click();
    }
  };

  const hasGreenBg = backgroundColor === 'bg-green-700';

  return (
    <section
      className={cn(
        'py-16 px-4 md:py-20 wrapper-lg',
        backgroundColor,
        hasGreenBg ? 'text-white textured-top' : 'text-primary-800',
      )}
    >
      <div
        className={cn(
          'container max-w-[1200px] mx-auto',
          hasTextContent ? 'flex flex-col lg:flex-row gap-8 lg:gap-16' : '',
        )}
      >
        {hasTextContent && (
          <div className="lg:w-1/2 flex flex-col gap-7">
            {heading && (
              <h2 className={cn('pb-2', hasGreenBg ? 'text-white' : 'text-primary-800')}>
                {heading}
              </h2>
            )}
            {body && <RichText data={body} enableGutter={false} />}
            {links && links.length > 0 && (
              <>
                {linksTitle && <h3>{linksTitle}</h3>}
                <div className="flex flex-col gap-3">
                  {links.map((link, i) => (
                    <CMSLink key={i} {...link.link} label="" icon={false}>
                      <Button
                        variant="outline_inverted"
                        className="flex items-center gap-2 px-9 bg-green-800 w-full md:w-[390px] text-left"
                      >
                        {link.link.label}
                        <ArrowRight size={16} />
                      </Button>
                    </CMSLink>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        <div className={cn('relative', hasTextContent ? 'lg:w-1/2' : 'w-full')}>
          <div
            id="gallery"
            ref={galleryRef}
            className={cn('grid gap-4 grid-cols-2', !hasTextContent && 'md:grid-cols-4')}
          >
            {images.slice(0, maxVisibleImages).map((imageData, index) => {
              const imageResource = imageData.image as MediaType;
              return (
                // Visible Photoswipe images
                <a
                  key={index}
                  href={imageResource.url ?? ''}
                  data-pswp-width={imageResource.width}
                  data-pswp-height={imageResource.height}
                  data-pswp-image
                  className="block relative aspect-square overflow-hidden"
                >
                  <Media
                    resource={imageResource}
                    className="w-full h-full rounded-md overflow-hidden"
                    imgClassName="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                  />
                </a>
              );
            })}

            {/* Hidden images for Photoswipe */}
            {images.slice(maxVisibleImages).map((imageData, index) => {
              const imageResource = imageData.image as MediaType;
              return (
                <a
                  key={index}
                  href={imageResource.url ?? ''}
                  data-pswp-width={imageResource.width}
                  data-pswp-height={imageResource.height}
                  data-pswp-image
                  className="hidden"
                />
              );
            })}
          </div>

          <Button
            onClick={handleOpenGallery}
            variant="no_background"
            className={cn(
              'mt-6 mx-auto flex items-center gap-2',
              hasGreenBg ? 'text-white' : 'text-primary-800',
            )}
          >
            <span>{galleryTitle}</span>
            <Camera className="w-5 h-5" strokeWidth={3} />
          </Button>
        </div>
      </div>
    </section>
  );
};
