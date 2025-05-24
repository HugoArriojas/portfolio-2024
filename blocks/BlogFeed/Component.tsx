import React from 'react';
import { BlogFeed as BlogFeedComponent } from '@/components/BlogFeed';
import configPromise from '@payload-config';
import { getPayload } from 'payload';
import strings from '@/lib/strings.json';

export type BlogFeedProps = {
  blockType: 'blogFeed';
  title: string;
  limittoShow: number;
};

export async function BlogFeed({
  title,
  limittoShow = 3,
}: BlogFeedProps): Promise<React.JSX.Element> {
  try {
    const payload = await getPayload({ config: configPromise });

    const posts = await payload.find({
      collection: 'blog',
      depth: 1,
      overrideAccess: false,
    });

    return <BlogFeedComponent title={title} posts={posts.docs} limitToShow={limittoShow} />;
  } catch (error) {
    console.error('Error loading posts:', error);
    return (
      <div className="container mx-auto py-24">
        <p>{strings.posts.unableToLoad}</p>
      </div>
    );
  }
}
