'use client';
import { Menu } from '@headlessui/react';
import { Dispatch } from 'react';
import { ReactComponent as HeaderMenuIcon } from '../../../assets/HeaderMenuIcon.svg';
import { EditDeleteMenuVariant } from '../types';

export interface EditDeleteMenuProps {
  variant: EditDeleteMenuVariant;
  onEditClick?: Dispatch<void>;
  onDeleteClick?: Dispatch<void>;
}

export const EditDeleteMenu = ({
  variant,
  onEditClick,
  onDeleteClick,
}: EditDeleteMenuProps) => {
  const capitalizedVariant = `${variant[0].toUpperCase()}${variant.slice(1)}`;

  return (
    <Menu as="div" className="relative inline-block">
      <Menu.Button>
        <HeaderMenuIcon />
      </Menu.Button>
      <Menu.Items
        as="div"
        className="flex flex-col items-stretch gap-4 tp-body-l p-4 rounded-lg absolute top-14 -right-[0.5rem] w-48 shadow-[0_10px_20px_0_rgba(54,_78,_126,_0.25)] bg-white dark:bg-kb-dark-bg z-10"
      >
        <Menu.Item
          as="button"
          className="text-kb-medium-gray text-left"
          onClick={() => onEditClick?.()}
        >
          Edit {capitalizedVariant}
        </Menu.Item>
        <Menu.Item
          as="button"
          className="text-kb-red text-left"
          onClick={() => onDeleteClick?.()}
        >
          Delete {capitalizedVariant}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};
