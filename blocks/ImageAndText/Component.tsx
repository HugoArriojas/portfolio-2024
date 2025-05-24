import { cn } from '@/utilities/cn';
import RichText from '@/components/RichText';
import { Media } from '@/components/Media';
import { CMSLink } from '@/components/Link';
import { ImageAndText as ImageAndTextProps } from '@/payload-types';

/**
 * @param param0
 * @returns
 */
export const ImageAndText = ({
  contentRows,
  backgroundColor = 'bg-transparent',
}: ImageAndTextProps) => {
  return (
    <section
      className={cn(
        'flex flex-col gap-16 wrapper-lg',
        backgroundColor,
        backgroundColor === 'bg-transparent' ? 'my-8' : 'py-8',
      )}
    >
      {contentRows?.map((row, i) => {
        return (
          <div
            key={`image-text-${row.heading || i}`}
            className={cn(
              'container-lg flex flex-col w-full md:gap-[60px]',
              row.isOnLeft ? 'md:flex-row' : 'md:flex-row-reverse',
            )}
          >
            <Media
              className="object-cover w-full h-full rounded-xl overflow-hidden"
              // imgClassName="h-full w-full object-cover min-h-[350px] md:min-h-auto"
              imgClassName="h-full w-full object-cover min-h-[350px] md:min-h-[520px]"
              resource={row.media}
            />

            <div
              className={cn(
                'flex flex-col justify-center w-full z-10 md:max-w-[40%]',
                // row.isOnLeft ? 'md:px-12 lg:pr-[120px]' : 'md:px-12 lg:pl-[120px]',
              )}
            >
              <div className={cn('w-full mx-auto max-w-2xl')}>
                <h3 className="heading-h2 text-left my-9">{row.heading}</h3>
                {row.body && (
                  <RichText
                    data={row.body}
                    enableGutter={false}
                    className={cn(`w-full mb-8 text-base`)}
                  />
                )}
                {row.links?.map((item) => (
                  <CMSLink {...item.link} key={item.id} appearance="default" />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};
