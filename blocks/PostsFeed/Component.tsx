import React from 'react';
import { cn } from '@/utilities/cn';
import { Media } from '@/components/Media';
import { PostCard } from '@/components/PostCard';
import Link from 'next/link'; // Import Link
import { Button } from '@/components/ui/button'; // Import Button
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import strings from '@/lib/strings.json';
import { PostsFeedPagination } from './Pagination';

const PAGE_SIZE = 6;

async function getPosts(
  postsCollection: 'blog' | 'trails',
  limit: number = PAGE_SIZE,
  page: number = 1,
) {
  try {
    const payload = await getPayload({
      config: configPromise,
    });

    const posts = await payload.find({
      collection: postsCollection,
      overrideAccess: false,
      draft: false,
      depth: 1,
      limit,
      page,
      pagination: true,
      where: {
        _status: {
          equals: 'published',
        },
      },
      sort: '-publishedAt',
    });

    return posts;
  } catch (error) {
    console.error(`Error fetching ${postsCollection} posts:`, error);
    return {
      docs: [],
      hasNextPage: false,
      nextPage: null,
      totalDocs: 0,
      totalPages: 0,
      page: 1,
    };
  }
}

export const PostsFeed = async ({ postsCollection, postsPerPage = 6 }) => {
  const baseUrl = postsCollection === 'blog' ? '/news/talk-of-the-town' : '/news/trails';

  const initialLimit = postsPerPage + 1;
  const results = await getPosts(postsCollection, initialLimit, 1);
  const { docs: posts, hasNextPage } = results;

  if (!posts || posts.length === 0) {
    return null;
  }

  const featuredPost = posts[0];
  const teaserPosts = posts.slice(1);

  return (
    <section className="flex flex-col wrapper-lg my-12 container">
      {featuredPost && (
        <div className={cn('container-lg flex flex-col w-full md:gap-[60px]', 'md:flex-row')}>
          {featuredPost.heroImage && (
            <Media
              className="object-cover w-full h-full rounded-xl overflow-hidden"
              imgClassName="h-full w-full object-cover min-h-[350px] md:min-h-[520px]"
              resource={featuredPost.heroImage || ''}
              alt={featuredPost.title}
            />
          )}

          <div className="flex flex-col justify-center z-10 md:max-w-[40%] w-full mx-auto max-w-2xl">
            <h2 className="text-left my-9 text-green-800">{featuredPost.title}</h2>

            {featuredPost.summary && (
              <p className="w-full mb-4 text-base line-clamp-3">{featuredPost.summary}</p>
            )}

            {featuredPost.slug && (
              <Link href={`${baseUrl}/${featuredPost.slug}`}>
                <Button variant="default" className="px-9">
                  {strings.homepage.posts.readMore}
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}

      {teaserPosts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-9 mt-16 container-lg">
          {teaserPosts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              image={post.heroImage}
              publishedAt={post.publishedAt}
              summary={post.summary}
              content={post.content}
              slug={post.slug}
              baseUrl={baseUrl}
            />
          ))}
        </div>
      )}

      {hasNextPage && (
        <PostsFeedPagination
          postsCollection={postsCollection}
          baseUrl={baseUrl}
          hasNextPage={hasNextPage}
          postsPerPage={postsPerPage}
        />
      )}
    </section>
  );
};
