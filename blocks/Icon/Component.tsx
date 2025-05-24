'use client';

import React from 'react';
import { cn } from '@/utilities/cn';
import * as LucideIcons from 'lucide-react';

interface IconLexicalProps {
  iconName?: string;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  color?: 'black' | 'white' | 'green' | 'blue';
}

export const IconLexicalBlock: React.FC<IconLexicalProps> = ({
  iconName = 'info',
  size = 'medium',
  color = 'black',
}) => {
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
    trash: LucideIcons.Trash,
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

  const IconComponent = iconMap[iconName] || LucideIcons.HelpCircle;

  const sizeClassMap = {
    small: 'w-[15px] h-[15px]',
    medium: 'w-5 h-5',
    large: 'w-8 h-8',
    xlarge: 'w-[50px] h-[50px]',
  };

  const colorClassMap = {
    black: 'text-black',
    white: 'text-white',
    green: 'text-green-800',
    blue: 'text-primary-800',
  };

  return (
    <span className="inline-flex items-center align-middle mx-1 -mt-2">
      <IconComponent className={cn('inline-block', sizeClassMap[size], colorClassMap[color])} />
    </span>
  );
};
