import React from 'react';
import { InfoCards as InfoCardsProps } from '@/payload-types';
import { cn } from '@/utilities/cn';
import { InfoCard } from '@/components//InfoCard';
import RichText from '@/components/RichText';

export const InfoCards: React.FC<InfoCardsProps> = ({
  heading,
  infoCards,
  additionalInfo,
  background = 'none',
}) => {
  const isGreenBackground = background === 'green';

  return (
    <section className={cn('py-12 w-full wrapper-lg', isGreenBackground && 'bg-green-700')}>
      <div className="container-lg mx-auto">
        {heading && (
          <h2
            className={cn(
              'mb-9 text-center',
              isGreenBackground ? 'text-white' : 'text-primary-800',
            )}
          >
            {heading}
          </h2>
        )}

        {infoCards && infoCards.length > 0 && (
          <div className="flex max-md:flex-col gap-6 justify-center flex-wrap items-stretch">
            {infoCards.map((card, index) => (
              <InfoCard
                key={card.id || index}
                image={card.image}
                heading={card.heading}
                paragraph={card.paragraph}
              />
            ))}
          </div>
        )}

        {additionalInfo && (
          <RichText
            data={additionalInfo}
            enableGutter={false}
            className={cn(
              'mt-9 mx-auto text-center',
              isGreenBackground && '!text-white [&_strong]:text-white [&_strong]:font-bold',
            )}
          />
        )}
      </div>
    </section>
  );
};
