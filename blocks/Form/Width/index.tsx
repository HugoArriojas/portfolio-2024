import * as React from 'react';

export const Width: React.FC<{
  children: React.ReactNode;
  className?: string;
  width?: number | string;
}> = ({ children, className, width }) => {
  return (
    <div
      className={className}
      style={{
        maxWidth: width ? `calc(${width}% - 4px)` : undefined,
        flex: width && width !== 100 ? `1 1 calc(${width}% - 8px)` : '0 0 100%',
      }}
    >
      {children}
    </div>
  );
};
