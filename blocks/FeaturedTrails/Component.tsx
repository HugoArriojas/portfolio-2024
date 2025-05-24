import React from 'react';
import FeaturedPathway from '@/components/FeaturedPathway';

import type { FeaturedTrails as FeaturedTrailsProps } from '@/payload-types';

export const FeaturedTrails: React.FC<FeaturedTrailsProps> = (props) => {
  return <FeaturedPathway isTrail={true} {...props} />;
};
