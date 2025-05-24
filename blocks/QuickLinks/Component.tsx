'use client';

import React from 'react';
import * as LucideIcons from 'lucide-react';
import Link from 'next/link';
import { getLinkHref } from '@/utilities/getLinkHref';
import { QuickLinks as QuickLinksType } from '@/payload-types';
import { cn } from '@/utilities/cn';

type QuickLinksSidebarProps = Partial<QuickLinksType> & {
  isHomepage?: boolean;
};

export const QuickLinksSidebar: React.FC<QuickLinksSidebarProps> = (props) => {
  const { heading, links = [] } = props;
  const isHomepage = props.isHomepage || false;

  if (!links?.length) return null;

  const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    info: LucideIcons.Info,
    check: LucideIcons.Check,
    'alert-triangle': LucideIcons.AlertTriangle,
    x: LucideIcons.X,
    star: LucideIcons.Star,
    heart: LucideIcons.Heart,
    camera: LucideIcons.Camera,
    clock: LucideIcons.Clock,
    calendar: LucideIcons.Calendar,
    flag: LucideIcons.Flag,
    map: LucideIcons.Map,
    'map-pin': LucideIcons.MapPin,
    trash2: LucideIcons.Trash2,
    phone: LucideIcons.Phone,
    mail: LucideIcons.Mail,
    globe: LucideIcons.Globe,
    bookmark: LucideIcons.Bookmark,
    user: LucideIcons.User,
    users: LucideIcons.Users,
    smile: LucideIcons.Smile,
    baby: LucideIcons.Baby,
    'trending-up': LucideIcons.TrendingUp,
    'arrow-right': LucideIcons.ArrowRight,
    scroll: LucideIcons.Scroll,
    'clipboard-check': LucideIcons.ClipboardCheck,
    flame: LucideIcons.Flame,
    newspaper: LucideIcons.Newspaper,
    fish: LucideIcons.Fish,
    'file-text': LucideIcons.FileText,
  };

  const renderIcon = (item: NonNullable<QuickLinksType['links']>[number]) => {
    if (item.useCustomIcon && item.customSvg) {
      return (
        <div
          className="w-[50px] h-[50px] flex-shrink-0 text-white [&_svg]:w-full [&_svg]:h-full"
          dangerouslySetInnerHTML={{ __html: item.customSvg }}
        />
      );
    } else {
      const IconComponent =
        item.iconName && iconMap[item.iconName] ? iconMap[item.iconName] : LucideIcons.HelpCircle;

      return <IconComponent className="w-[50px] h-[50px] flex-shrink-0 text-white" />;
    }
  };

  return (
    <div className="py-4">
      {heading && (
        <div className={cn('mx-auto mt-2 mb-8', isHomepage ? 'max-w-full' : 'max-w-[320px]')}>
          {isHomepage ? (
            <h2 className="heading-h2">{heading}</h2>
          ) : (
            <h4 className={cn('text-left text-primary-800 uppercase')}>{heading}</h4>
          )}
        </div>
      )}

      <div
        className={cn(
          'grid grid-cols-2 ',
          isHomepage
            ? 'md:grid-cols-3 lg:grid-cols-6 gap-5'
            : 'lg:flex lg:flex-wrap gap-6 justify-center',
        )}
      >
        {links.map((item, index) => {
          const href = getLinkHref(item.link);

          return (
            <Link
              key={`quick-link-${index}`}
              href={href}
              target={item.link.newTab ? '_blank' : undefined}
              rel={item.link.newTab ? 'noopener noreferrer' : undefined}
              className={cn(
                'flex flex-col items-center justify-center py-3 px-5 gap-2 bg-interaction-800 hover:bg-interaction-700 transition-colors rounded-md shadow-black/80 shadow-card self-stretch h-[141px]',
                isHomepage ? 'w-full' : 'basis-full grow max-md:w-full max-w-[320px]',
              )}
            >
              <div className="flex flex-col items-center gap-2">
                {renderIcon(item)}
                <span className="font-semibold text-white text-center text-base">{item.title}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
