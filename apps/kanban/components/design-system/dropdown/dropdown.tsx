'use client';
import { Listbox } from '@headlessui/react';
import { Dispatch, useMemo } from 'react';
import { ReactComponent as ChevronDown } from '../../../assets/ChevronDown.svg';

export interface DropdownProps {
  selectedId: number;
  selectableOptions: { id: number; label: string }[];
  onChange?: Dispatch<number>;
}

export const Dropdown = ({
  selectedId,
  selectableOptions,
  onChange,
}: DropdownProps) => {
  const selectedLabel = useMemo(
    () => selectableOptions.find(({ id }) => id === selectedId)?.label,
    [selectableOptions, selectedId],
  );

  return (
    <Listbox
      as="div"
      className="relative"
      value={selectedId}
      onChange={onChange}
    >
      <Listbox.Button className="flex items-center justify-between px-4 py-2 tp-body-l text-kb-black dark:text-white w-full rounded border-1 border-solid border-kb-medium-gray/25 focus:border-kb-purple">
        <span className="truncate">{selectedLabel}</span>
        <ChevronDown />
      </Listbox.Button>
      <Listbox.Options className="absolute w-full rounded bg-white dark:bg-kb-dark-bg flex flex-col gap-2 p-4 text-kb-medium-gray tp-body-l shadow-[0px_10px_20px_0px_rgba(54,78,126,0.25)]">
        {selectableOptions.map((option) => (
          <Listbox.Option
            key={option.id}
            value={option.id}
            className="cursor-pointer"
          >
            {option.label}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};
