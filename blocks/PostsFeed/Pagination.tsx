'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PostCard } from '@/components/PostCard';
import { ArrowDown, Loader2 } from 'lucide-react';
import strings from '@/lib/strings.json';
import type { Blog, Trail, Media as MediaType } from '@/payload-types';

type PostsFeedPaginationProps = {
  postsCollection: 'blog' | 'trails';
  baseUrl: string;
  hasNextPage: boolean;
  postsPerPage: number;
};

export const PostsFeedPagination = ({
  postsCollection,
  baseUrl,
  hasNextPage: initialHasNextPage,
  postsPerPage = 6,
}: PostsFeedPaginationProps) => {
  const [posts, setPosts] = useState<Array<Blog | Trail>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(2);
  const [hasNextPage, setHasNextPage] = useState<boolean>(initialHasNextPage);

  const loadMorePosts = async () => {
    if (loading || !hasNextPage) return;

    try {
      setLoading(true);

      const response = await fetch(
        `/api/posts?collection=${postsCollection}&page=${currentPage}&limit=${postsPerPage}`,
      );
      const data = await response.json();

      if (data && data.docs) {
        setPosts([...posts, ...data.docs]);
        setHasNextPage(data.hasNextPage);
        setCurrentPage(currentPage + 1);
      }
    } catch (error) {
      console.error('Error loading more posts:', error);
    } finally {
      setLoading(false);
    }
  };

  if (posts.length === 0 && !hasNextPage) {
    return null;
  }

  return (
    <div className="container-lg flex flex-col items-center">
      {posts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {posts.map((post) => (
            <PostCard
              title={post.title}
              key={post.id}
              image={post.heroImage as MediaType | string | null}
              publishedAt={post.publishedAt as string | null}
              summary={post.summary}
              content={post.content}
              slug={post.slug as string}
              baseUrl={baseUrl}
            />
          ))}
        </div>
      )}

      {hasNextPage && (
        <Button
          onClick={loadMorePosts}
          disabled={loading}
          className="px-4 py-2 group font-semibold mt-16 mx-auto"
          variant="link"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <Loader2 className="animate-spin" size={20} strokeWidth={2.5} />
              <span>{strings.posts.loadingPosts}</span>
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <span>{strings.posts.loadMore}</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
            </span>
          )}
        </Button>
      )}
    </div>
  );
};
