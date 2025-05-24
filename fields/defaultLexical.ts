import { Config } from 'payload';
import {
  BoldFeature,
  ItalicFeature,
  LinkFeature,
  ParagraphFeature,
  lexicalEditor,
  UnderlineFeature,
  BlocksFeature,
  OrderedListFeature,
  UnorderedListFeature,
  EXPERIMENTAL_TableFeature,
  HorizontalRuleFeature,
} from '@payloadcms/richtext-lexical';
import { VideoEmbed } from '@/blocks/VideoEmbed/config';
import { ImageGalleryBlock } from '@/blocks/ImageGallery/config';
import { DropdownLexicalBlock } from '@/blocks/Dropdown/config';
import { TestimonialLexicalBlock } from '@/blocks/Testimonial/config';
import { AlertLexicalBlock } from '@/blocks/Alert/config';
import { IconLexicalBlock } from '@/blocks/Icon/config';
import {
  TextColorFeature,
  TextSizeFeature,
  TextLetterSpacingFeature,
  TextLineHeightFeature,
  TextFontFamilyFeature,
} from 'payload-lexical-typography';

export const defaultLexical: Config['editor'] = lexicalEditor({
  features: () => {
    return [
      ParagraphFeature(),
      OrderedListFeature(),
      UnorderedListFeature(),
      UnderlineFeature(),
      BoldFeature(),
      ItalicFeature(),
      LinkFeature({
        enabledCollections: ['pages', 'blog', 'trails'],
        fields: ({ defaultFields }) => {
          const defaultFieldsWithoutUrl = defaultFields.filter((field) => {
            if ('name' in field && field.name === 'url') return false;
            return true;
          });

          return [
            ...defaultFieldsWithoutUrl,
            {
              name: 'url',
              type: 'text',
              admin: {
                condition: (_, siblingData) => {
                  return siblingData.linkType !== 'internal';
                },
              },
              label: ({ t }) => t('fields:enterURL'),
              required: true,
            },
          ];
        },
      }),
      HorizontalRuleFeature(),
      EXPERIMENTAL_TableFeature(),
      BlocksFeature({
        blocks: [
          VideoEmbed,
          ImageGalleryBlock,
          DropdownLexicalBlock,
          AlertLexicalBlock,
          TestimonialLexicalBlock,
        ],
        inlineBlocks: [IconLexicalBlock],
      }),
      TextColorFeature({
        colors: ['#FFFFFF', '#000000', '#0d2e59', '#1a504f', '#55c19a', '#ffbf43', '#de4c23'],
      }),
      TextSizeFeature(),
      TextLetterSpacingFeature(),
      TextLineHeightFeature(),
      TextFontFamilyFeature(),
    ];
  },
});
