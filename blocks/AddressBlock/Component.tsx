// Placeholder for Address sidebar component
import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import RichText from '@/components/RichText';
import type { AddressSidebarBlock as AddressSidebarBlockType } from '@/payload-types';

// Alert component for use within Lexical editors
export const AddressSidebarBlock: React.FC<AddressSidebarBlockType> = ({
  address,
  body,
  url,
  label = 'See it on Google maps',
  phone,
  email,
}) => {
  return (
    <div className="my-2 p-5 bg-white rounded-md shadow-green">
      <div className="flex flex-col gap-3">
        {address && (
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 mt-1 flex-shrink-0 text-interaction-800" />
            <div>
              {body && <RichText data={body} enableGutter={false} enableProse={false} />}
              {!body && address && <p className="whitespace-pre-line">{address}</p>}
              {url && (
                <Link
                  href={url}
                  className="font-semibold text-interaction-800 underline hover:no-underline hover:text-interaction-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label}
                </Link>
              )}
            </div>
          </div>
        )}

        {phone && (
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 flex-shrink-0 text-interaction-800" />
            <a href={`tel:${phone.replace(/\D/g, '')}`} className="hover:underline">
              {phone}
            </a>
          </div>
        )}

        {email && (
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 flex-shrink-0 text-interaction-800" />
            <a href={`mailto:${email}`} className="hover:underline">
              {email}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
