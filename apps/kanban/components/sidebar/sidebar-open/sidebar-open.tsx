import { Dispatch } from 'react';
import { ReactComponent as SidebarOpenIcon } from '../../../assets/SidebarOpenIcon.svg';

export interface SidebarOpenProps {
  onClick?: Dispatch<void>;
}

export const SidebarOpen = ({ onClick }: SidebarOpenProps) => {
  return (
    <button
      className="flex items-center justify-center bg-kb-purple hover:bg-kb-purple-hover w-12 h-14 rounded-r-full"
      onClick={() => onClick?.()}
    >
      <SidebarOpenIcon />
    </button>
  );
};
