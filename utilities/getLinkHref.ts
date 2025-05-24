import type { Page, Blog, Trail, Media } from '@/payload-types';

type LinkReference = {
  relationTo: 'pages' | 'blog' | 'trails' | 'media';
  value: string | Page | Blog | Trail | Media;
};

type LinkType = {
  url?: string | null;
  reference?: LinkReference | null;
};

export const getLinkHref = (link?: LinkType): string => {
  if (!link) return '';

  if (link.url) {
    return link.url;
  }

  if (!link.reference) return '';

  // Handle string IDs (should return empty string if no further info available)
  if (typeof link.reference.value === 'string' || typeof link.reference.value === 'number') {
    return '';
  }

  // Handle object references
  if (typeof link.reference.value === 'object') {
    const value = link.reference.value as Page | Blog | Trail | Media;

    if (link.reference.relationTo === 'media') {
      return `/media/${value.id}`;
    }

    // Skip if the slug is missing (unpublished content)
    if (!('slug' in value)) {
      console.warn('Missing slug for referenced content:', value);
      return '';
    }

    if (link.reference.relationTo === 'blog') {
      return `/blog/${value.slug}`;
    } 
    else if (link.reference.relationTo === 'pages') {
      return (value as Page).path ? `${(value as Page).path}` : `/${value.slug}`;
    } 
    else {
      return `/${value.slug}`;
    }
  }

  return '';
};
