'use client';
import { LinkGroup } from '@/payload-types';
import { RowLabelProps, useRowLabel } from '@payloadcms/ui';

export const RowLabel: React.FC<RowLabelProps> = (_props) => {
  const data = useRowLabel<NonNullable<LinkGroup>[number]>();

  const fieldsCount = Object.keys(data?.data).length;

  let label = 'Row';

  // Single Link array
  if (fieldsCount < 3 && data?.data?.link?.label) {
    label = `Link ${data.rowNumber !== undefined ? data.rowNumber + 1 : ''}: ${data?.data?.link?.label}`;
  }

  return <div>{label}</div>;
};
