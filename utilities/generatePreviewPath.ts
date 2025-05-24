import { PayloadRequest, CollectionSlug } from 'payload';

const collectionPrefixMap: Partial<Record<CollectionSlug, string>> = {
  work: 'work/',
};

type Props = {
  collection: keyof typeof collectionPrefixMap | 'homepage' | 'work';
  slug: string;
  routeSlug?: string;
  req: PayloadRequest;
};

export const generatePreviewPath = ({ collection, slug, req }: Props) => {
  if (collection === 'homepage') {
    return `/`;
  }

  const path = `/${collectionPrefixMap[collection]}${slug ? `${slug}` : ''}`;

  const params = new URLSearchParams({
    slug,
    collection,
    path,
  });

  const isProduction =
    process.env.NODE_ENV === 'production' ||
    Boolean(process.env.VERCEL_PROJECT_PRODUCTION_URL);
  const protocol = isProduction ? 'https:' : req.protocol;
  const host = req.host || 'localhost';

  const url = `${protocol}//${host}/next/preview?${params.toString()}`;

  return url;
};
