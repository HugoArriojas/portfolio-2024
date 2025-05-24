import { VideoEmbed as VideoEmbedProps } from '@/payload-types';

export const VideoEmbed = ({ embedCode }: VideoEmbedProps) => {
  if (!embedCode) return null;

  return <div dangerouslySetInnerHTML={{ __html: embedCode }} />;
};
