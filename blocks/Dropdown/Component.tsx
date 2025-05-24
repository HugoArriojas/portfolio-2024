'use client';

import React from 'react';
import Dropdown from '@/components/Dropdown';

import {
  DropdownLexicalBlock as DropdownLexicalBlockType,
  DropdownBlock as DropdownBlockType,
} from '@/payload-types';

// Block-level Dropdown
export const DropdownBlock: React.FC<DropdownBlockType> = ({ label, subheading, content }) => {
  return (
    <div className="accordion wrapper-col mt-5 mb-10 p-9 bg-white shadow-card !shadow-black/25 rounded-md">
      <Dropdown
        label={label}
        subheading={subheading}
        content={content}
        isBlock={true}
        isTrail={false}
      />
    </div>
  );
};

// Dropdown used within richtext editor
export const DropdownLexicalBlock: React.FC<
  Omit<DropdownLexicalBlockType, 'subheading'> & { className?: string }
> = ({ label, content, className = 'mt-0' }) => {
  return (
    <div className={className}>
      <Dropdown label={label} content={content} isBlock={false} isTrail={false} />
    </div>
  );
};
