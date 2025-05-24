import React from 'react';
import RichText from '@/components/RichText';
import { Media } from '@/components/Media';
import type {
  TestimonialSection as TestimonialSectionType,
  TestimonialLexicalBlock as TestimonialLexicalBlockType,
} from '@/payload-types';
import { cn } from '@/utilities/cn';

type RenderTestimonialProps = {
  heading: TestimonialSectionType['heading'];
  testimonials: TestimonialSectionType['testimonials'];
  blockType: 'lexical' | 'section';
};

const renderTestimonials = ({ heading, testimonials, blockType }: RenderTestimonialProps) => {
  const wrapper = blockType === 'lexical' ? 'wrapper-col py-6' : 'wrapper-lg py-6';

  const numberOfTestimonials = testimonials?.length;

  return (
    <section className={wrapper}>
      <div
        className={cn(
          'bg-textured flex flex-col gap-9 not-prose',
          blockType === 'lexical' && 'w-full',
          blockType === 'section' && 'container-lg',
        )}
      >
        {heading && <h2 className={cn('w-fit', blockType === 'lexical' ? 'text-left' : 'mx-auto')}>{heading}</h2>}

        <div
          className={cn(
            'w-full grid grid-cols-1 gap-12',
            blockType === 'lexical' && 'sm:grid-cols-2 justify-start px-2',
            blockType === 'section' && 'justify-center',
            blockType === 'section' && numberOfTestimonials === 2 && 'max-w-[800px] mx-auto md:grid-cols-2 md:justify-between',
            blockType === 'section' && numberOfTestimonials && numberOfTestimonials >= 3 && 'xs:grid-cols-[repeat(auto-fill,368px)]',
          )}
        >
          {testimonials?.map((testimonial) => (
            <div key={testimonial.id} className="w-full max-w-[800px] flex flex-col gap-9 mx-auto">
              {testimonial.testimonial && (
                <RichText data={testimonial.testimonial} className="p-0" />
              )}
              <div className={'flex gap-6 items-center'}>
                {testimonial.image && (
                  <Media
                    resource={testimonial.image}
                    className="rounded-10 overflow-hidden aspect-square w-[132px]"
                    imgClassName="object-cover h-full w-full"
                  />
                )}

                <div className="text-green-800 flex flex-col gap-2">
                  {testimonial.author && <p className="heading-h3">{testimonial.author}</p>}
                  {testimonial.title && (
                    <p className="heading-h4 whitespace-pre-line flex flex-col">
                      {testimonial.title}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const TestimonialLexicalBlock = ({ heading, testimonials }: TestimonialLexicalBlockType) => {
  return renderTestimonials({ heading, testimonials, blockType: 'lexical' });
};

export const TestimonialSection = ({ heading, testimonials }: TestimonialSectionType) => {
  return renderTestimonials({ heading, testimonials, blockType: 'section' });
};
