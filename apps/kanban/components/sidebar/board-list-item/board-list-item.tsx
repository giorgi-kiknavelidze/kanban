'use client';

import { clsx } from 'clsx';
import { Dispatch } from 'react';
import { ReactComponent as BoardListItemIcon } from '../../../assets/BoardListItemIcon.svg';
import { BoardListItemVariant } from '../types';

export interface BoardListItemProps {
  id: string;
  label: string;
  variant: BoardListItemVariant;
  onClick?: Dispatch<string>;
}

export const BoardListItem = ({
  id,
  label,
  variant,
  onClick,
}: BoardListItemProps) => {
  const baseClassNames = {
    'tp-heading-m flex items-center pl-8 gap-3 py-3.5 w-60 xl:w-[17.25rem] rounded-r-[6.25rem]':
      true,

    'text-white': variant === 'selected',
    'text-kb-medium-gray': variant === 'unselected',
    'text-kb-purple': variant === 'add',

    'bg-kb-purple': variant === 'selected',

    'hover:bg-kb-purple/10 dark:hover:bg-white hover:text-kb-purple':
      variant !== 'selected',
  };

  return (
    <button className={clsx(baseClassNames)} onClick={() => onClick?.(id)}>
      <BoardListItemIcon />
      <span>{label}</span>
    </button>
  );
};
