import React from 'react';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import Link from 'next/link';
import { Media } from '@/components/Media';
import RichText from '@/components/RichText';
import { ArrowRight } from 'lucide-react';
import { truncateRichText } from '@/utilities/truncateRichText';
import strings from '@/lib/strings.json';

import type { Trail, TrailsUpdateBlock as TrailsUpdateProps } from '@/payload-types';
import {SerializedEditorState, SerializedLexicalNode } from '@payloadcms/richtext-lexical/lexical';

async function getLatestTrailsUpdate(): Promise<Trail | null> {
  try {
    const payload = await getPayload({
      config: configPromise,
    });

    const result = await payload.find({
      collection: 'trails',
      limit: 1,
      sort: '-publishedAt',
      depth: 1,
      where: {
        _status: {
          equals: 'published',
        },
      },
    });

    return result.docs[0] || null;
  } catch (error) {
    console.error('Error fetching latest trails post:', error);
    return null;
  }
}

export async function TrailsUpdate({ heading, qrCode, body }: TrailsUpdateProps) {
  const latestTrail = await getLatestTrailsUpdate();

  const truncatedContent = latestTrail?.content ? truncateRichText(latestTrail.content) : undefined;

  const link = qrCode?.link ? qrCode.link : `/news/trails`;

  return (
    <section className="wrapper-lg py-16 px-4 relative">
      <div className="mx-auto w-fit">
        {heading && <h2 className="mb-8">{heading}</h2>}

        <div className="flex flex-col lg:flex-row gap-8">
          {latestTrail && (
            <div className="flex-grow max-w-[720px] bg-white shadow-card !shadow-black/25 rounded-lg p-8 h-full">
              {latestTrail.title && (
                <h3 className="text-interaction-800 mb-7">{latestTrail.title}</h3>
              )}

              {truncatedContent && (
                <RichText
                  data={truncatedContent as SerializedEditorState<SerializedLexicalNode>}
                  enableProse={true}
                  enableGutter={false}
                  className="mb-4"
                />
              )}

              {latestTrail.slug && (
                <Link
                  href={`/news/trails/${latestTrail.slug}`}
                  className="text-interaction-800 font-semibold uppercase tracking-[0.32px] leading-[160%] inline-flex items-center gap-2 mt-auto hover:underline group transition-all"
                >
                  {strings.trailsUpdate.readFullUpdate}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-all" />
                </Link>
              )}
            </div>
          )}

          {/* Right Column - QR Code and Rich Text */}
          <div className="lg:max-w-[360px] p-4 lg:p-10 flex flex-col gap-6">
            {qrCode?.image && (
              <Link href={link} target="_blank" rel="noopener noreferrer">
                <Media resource={qrCode.image} className="w-[120px] h-[120px]" />
              </Link>
            )}

            {body && <RichText data={body} enableGutter={false} />}
          </div>
        </div>
      </div>
    </section>
  );
}
