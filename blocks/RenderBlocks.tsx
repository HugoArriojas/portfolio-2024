import React, { Fragment } from 'react';
import type { Page } from '@/payload-types';
import { ContentBlock, ContentSidebar } from '@/blocks/Content/Component';
import { ImageAndText } from '@/blocks/ImageAndText/Component';
import { CallToActionBlock } from '@/blocks/CallToAction/Component';
import { DisclaimerBlock } from '@/blocks/Disclaimer/Component';
import { FormBlock } from '@/blocks/Form/Component';
import { MediaBlock } from '@/blocks/MediaBlock/Component';
import { Embed } from '@/blocks/Embed/Component';
import { VideoEmbed } from '@/blocks/VideoEmbed/Component';
import { WhereaboutsEventsEmbed } from '@/blocks/WhereaboutsEventsEmbed/Component';
import ImageGrid from '@/blocks/ImageGrid/Component';
import LogoGrid from '@/blocks/LogoGrid/Component';
import { ImageGallery } from '@/blocks/ImageGallery/Component';
import { BlogFeed } from '@/blocks/BlogFeed/Component';
import { Links, SidebarLink } from '@/blocks/Links/Component';
import { TrailsPreview } from '@/blocks/TrailsPreview/Component';
import { DropdownBlock, DropdownLexicalBlock } from '@/blocks/Dropdown/Component';
import { AlertLexicalBlock } from '@/blocks/Alert/Component';
import { IconLexicalBlock } from '@/blocks/Icon/Component';
import { PageDivider } from '@/blocks/PageDivider/Component';
import { TestimonialSection, TestimonialLexicalBlock } from '@/blocks/Testimonial/Component';
import { FeaturedRoutes } from '@/blocks/FeaturedRoutes/Component';
import { FeaturedTrails } from '@/blocks/FeaturedTrails/Component';
import { ImageGalleryWithText } from '@/blocks/ImageGalleryWithText/Component';
import { TrailsUpdate } from '@/blocks/TrailsUpdate/Component';
import { PostsFeed } from '@/blocks/PostsFeed/Component';
import { InfoCards } from '@/blocks/InfoCards/Component';
import PricingChart from '@/blocks/PricingChart/Component';
import { SidebarForm } from './Form/Component';

// Sidebar blocks
import { AddressSidebarBlock } from '@/blocks/AddressBlock/Component';
import { QuickLinksSidebar } from '@/blocks/QuickLinks/Component';

const blockComponents = {
  content: ContentBlock,
  contentSidebar: ContentSidebar,
  imageAndText: ImageAndText,
  cta: CallToActionBlock,
  disclaimer: DisclaimerBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  embed: Embed,
  videoEmbed: VideoEmbed,
  whereaboutsEventsEmbed: WhereaboutsEventsEmbed,
  imageGrid: ImageGrid,
  logoGrid: LogoGrid,
  testimonial: TestimonialSection,
  testimonialLexical: TestimonialLexicalBlock,
  imageGallery: ImageGallery,
  blogFeed: BlogFeed,
  links: Links,
  sidebarLink: SidebarLink,
  trailsPreview: TrailsPreview,
  dropdown: DropdownBlock,
  dropdownLexical: DropdownLexicalBlock,
  alertLexical: AlertLexicalBlock,
  iconLexical: IconLexicalBlock,
  pageDivider: PageDivider,
  featuredRoutes: FeaturedRoutes,
  featuredTrails: FeaturedTrails,
  quickLinks: QuickLinksSidebar,
  addressBlock: AddressSidebarBlock,
  imageGalleryWithText: ImageGalleryWithText,
  trailsUpdate: TrailsUpdate,
  postsFeed: PostsFeed,
  sidebarForm: SidebarForm,
  infoCards: InfoCards,
  pricingChart: PricingChart,
};

export const RenderBlocks = (props: { blocks: Page['blocks'][0][] | any }) => {
  const { blocks } = props;

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block;

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType];

            if (Block) {
              return <Block key={index} {...block} disableInnerContainer />;
            }
          }
          return null;
        })}
      </Fragment>
    );
  }

  return null;
};
