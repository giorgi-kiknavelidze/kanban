'use client';

import { Dispatch } from 'react';
import { ReactComponent as HideSidebarIcon } from '../../../assets/HideSidebarIcon.svg';

export interface HideSidebarProps {
  onClick?: Dispatch<void>;
}

export const HideSidebar = ({ onClick }: HideSidebarProps) => (
  <button
    className="flex items-center gap-4 tp-heading-m text-kb-medium-gray hover:text-kb-purple group hover:bg-kb-purple/10 dark:hover:bg-white w-60 lg:w-[17.25rem] rounded-r-[6.25rem] py-3.5 pl-4"
    onClick={() => onClick?.()}
  >
    <HideSidebarIcon />
    <span>Hide Sidebar</span>
  </button>
);
