'use client';

import React from 'react';
import RichText from '@/components/RichText';
import { Alert } from '@/components/Alert';
import { AlertLexicalBlock as AlertLexicalProps } from '@/payload-types';

// Alert component for use within Lexical editors
export const AlertLexicalBlock: React.FC<AlertLexicalProps> = ({ type = 'default', text }) => {
  return (
    <div className="my-4">
      <Alert type={type}>
        {text && <RichText data={text} enableGutter={false} enableProse={false} />}
      </Alert>
    </div>
  );
};
