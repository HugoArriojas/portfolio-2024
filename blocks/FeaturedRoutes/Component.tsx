import React from 'react';
import FeaturedPathway from '@/components/FeaturedPathway';

import type { FeaturedRoutes as FeaturedRoutesProps } from '@/payload-types';

export const FeaturedRoutes: React.FC<FeaturedRoutesProps> = (props) => {
  return <FeaturedPathway isTrail={false} {...props} />;
};
