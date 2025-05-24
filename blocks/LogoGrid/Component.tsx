import { LogoGrid as LogoGridProps } from '@/payload-types';
import { Media } from '@/components/Media';
import { CMSLink } from '@/components/Link';

export default function LogoGrid({ heading, images, backgroundColor = 'bg-none' }: LogoGridProps) {
  return (
    <section className={`wrapper-lg py-16 ${backgroundColor}`}>
      <div className="container-lg mx-auto flex flex-col gap-9 items-center">
        <h3 className="heading-h4 w-fit text-center uppercase text-primary-800">{heading}</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-[68px] justify-center">
          {images.map((imageItem) => {
            const hasLink = imageItem.link?.url || imageItem.link?.reference;

            const Logo = (
              <Media
                key={imageItem.id}
                resource={imageItem.image}
                imgClassName="object-contain w-full h-[100px] md:h-[140px] lg:h-[165px] max-w-[120px] md:max-w-[180px] lg:max-w-[246px] mx-auto"
              />
            );

            if (hasLink && imageItem.link) {
              return (
                <div key={imageItem.id} className="flex justify-center items-center">
                  <CMSLink
                    {...imageItem.link}
                    icon={false}
                    appearance="inline"
                    className="flex items-center justify-center"
                  >
                    {Logo}
                  </CMSLink>
                </div>
              );
            }

            return (
              <div key={imageItem.id} className="flex justify-center items-center">
                {Logo}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
