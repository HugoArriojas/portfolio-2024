import React from 'react';

export const SectionHeading: React.FC<{
  label: string;
  description?: string;
}> = ({ label, description }) => {
  return (
    <div className="w-full mb-6">
      <div className="heading-h4 text-primary-800">{label}</div>
      {description && <p className="mt-2 text-gray-600">{description}</p>}
    </div>
  );
};
