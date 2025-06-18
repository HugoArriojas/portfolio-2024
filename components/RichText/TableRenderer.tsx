import React, { ReactNode } from 'react';

export const TableRenderer: React.FC<{
  children: ReactNode;
  className?: string;
  colWidths?: number[] | null;
}> = ({ children, className, colWidths }) => {
  const tableStyles = React.useMemo(() => {
    if (!colWidths || !colWidths.length) return {};

    const totalWidth = colWidths.reduce((sum, width) => sum + width, 0);

    const colStyles = colWidths.map((width) => {
      const percentage = (width / totalWidth) * 100;
      return { width: `${percentage}%` };
    });

    return { colStyles };
  }, [colWidths]);

  return (
    <div className="w-full overflow-x-auto">
      <table className={className}>
        {colWidths && colWidths.length > 0 && (
          <colgroup>
            {tableStyles.colStyles?.map((style, index) => <col key={index} style={style} />)}
          </colgroup>
        )}
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};
