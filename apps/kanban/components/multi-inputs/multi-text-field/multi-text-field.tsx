import { ChangeEvent } from 'react';
import { ReactComponent as DeleteItemIcon } from '../../../assets/DeleteItemIcon.svg';
import { TextField } from '../../design-system';
import { MultiTextFieldItemValue } from '../types';

export interface MultiTextFieldProps {
  items: MultiTextFieldItemValue[];
  onChange?: (id: string, event: ChangeEvent<HTMLInputElement>) => void;
  onDelete?: (id: string) => void;
}

export const MultiTextField = ({
  items,
  onChange,
  onDelete,
}: MultiTextFieldProps) => (
  <div className="flex flex-col gap-3 w-full">
    {items.map(({ id, placeholder, defaultValue, errorMessage }) => (
      <div className="flex gap-2 items-center" key={id}>
        <div className="grow">
          <TextField
            defaultValue={defaultValue}
            placeholder={placeholder}
            onChange={(e) => onChange?.(id, e)}
            errorMessage={errorMessage}
          />
        </div>
        <button onClick={() => onDelete?.(id)}>
          <DeleteItemIcon />
        </button>
      </div>
    ))}
  </div>
);
