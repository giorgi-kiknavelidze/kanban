'use client';

import { useColumnOvalColor } from '../../../hooks';

export interface ColumnTitleProps {
  title: string;
  itemCount: number;
}

export const ColumnTitle = ({ title, itemCount }: ColumnTitleProps) => {
  const ovalColor = useColumnOvalColor(title);

  return (
    <div className="flex items-center gap-3 uppercase tp-heading-s text-kb-medium-gray">
      <div
        className="rounded-full w-[0.938rem] h-[0.938rem]"
        style={{ backgroundColor: ovalColor }}
      />
      <span>
        {title} ({itemCount})
      </span>
    </div>
  );
};
