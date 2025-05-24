import React from 'react';
import { cn } from '@/utilities/cn';
import type { PricingChart as PricingChartType } from '@/payload-types';

const PricingChart: React.FC<PricingChartType> = ({
  heading,
  subheading,
  prices,
  bgTransparent,
}) => {
  return (
    <div className="wrapper-col my-[18px]">
      <div
        className={cn(
          'container mx-auto py-9 px-12 rounded-xl',
          bgTransparent ? 'bg-transparent' : 'bg-white',
        )}
      >
        <div className="border-b border-primary-200">
          <h3 className="text-primary-800 mb-[25px]">{heading}</h3>
          {subheading && <h4 className="text-green-600 mb-[25px]">{subheading}</h4>}
        </div>

        <div className="flex flex-col">
          {prices?.map((item, index) => (
            <div key={index} className={'flex justify-between py-3 border-b border-primary-200'}>
              <span>{item.itemLabel}</span>
              <span className="font-semibold">{item.itemPrice}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingChart;
