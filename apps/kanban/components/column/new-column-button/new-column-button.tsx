import { Dispatch } from 'react';

export interface NewColumnButtonProps {
  onClick?: Dispatch<void>;
}

export const NewColumnButton = ({ onClick }: NewColumnButtonProps) => (
  <div
    className="rounded-md flex items-center justify-center h-full bg-kb-lines-light dark:bg-kb-dark-gray w-72 shrink-0"
    onClick={() => onClick?.()}
  >
    <button className="tp-heading-xl text-kb-medium-gray cursor-pointer hover:text-kb-purple">
      + New Column
    </button>
  </div>
);
