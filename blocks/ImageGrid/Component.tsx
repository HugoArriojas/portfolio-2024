import { Media } from '@/components/Media';
import type { ImageGrid as ImageGridProps } from '@/payload-types';
import { cn } from '@/utilities/cn';

export default function ImageGrid({ heading, images, background = 'default' }: ImageGridProps) {
  return (
    <section className={cn('layout', background === 'dark' ? 'bg-dark' : 'no-bg')}>
      <div className="container">
        {heading && (
          <h2
            className={cn(
              'text-3xl font-bold mb-16 pt-8 text-center',
              background === 'dark' ? 'text-white' : 'text-primary-text-title',
            )}
          >
            {heading}
          </h2>
        )}
        <div className="flex flex-wrap justify-center gap-6">
          {(images || []).map((imageData, index) => (
            <div key={index} className="max-w-[280px] m-2 flex items-center justify-center">
              <Media
                resource={imageData.image}
                size="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
