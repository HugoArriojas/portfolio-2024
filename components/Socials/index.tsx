import { Setting } from '@/payload-types';
import { cn } from '@/utilities/cn';
import { Facebook, Instagram, Linkedin, Pinterest, Youtube, X } from 'iconoir-react';
import Link from 'next/link';
import Image from 'next/image';
import { getClientSideURL } from '@/utilities/getURL';

const iconMap = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
  pinterest: Pinterest,
  x: X,
};

export const Socials = ({
  data,
  className,
  iconClassName,
}: {
  data: Setting['socialLinks'];
  className?: string;
  iconClassName?: string;
}) => {
  if (!data) return null;

  return (
    <div className={cn('flex gap-2 items-center', className)}>
      {data.map((social) => {
        const key = `${social.platform}-${social.url}`;

        if (
          social.platform === 'other' &&
          social.customIcon &&
          typeof social.customIcon === 'object'
        ) {
          return (
            <Link key={key} href={social.url} target="_blank" rel="noopener noreferrer">
              <Image
                src={`${social.customIcon.url}`}
                alt={social.platform}
                width={24}
                height={24}
              />
            </Link>
          );
        }

        const Icon = iconMap[social.platform.toLowerCase()];
        if (!Icon) return null;

        return (
          <Link key={key} href={social.url} target="_blank" rel="noopener noreferrer">
            <Icon
              className={cn(
                'w-5 h-5 text-[#606850] hover:text-green-800 shrink-0 transition-all duration-300 stroke-2',
                iconClassName,
              )}
            />
          </Link>
        );
      })}
    </div>
  );
};
