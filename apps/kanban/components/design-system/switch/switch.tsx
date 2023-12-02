'use client';

import { clsx } from 'clsx';
import { Dispatch, useCallback } from 'react';
import { SwitchValue } from '../types';

export interface SwitchProps {
  value: SwitchValue;
  onChange?: Dispatch<SwitchValue>;
}

export const Switch = ({ value, onChange }: SwitchProps) => {
  const onClickHandler = useCallback(() => {
    if (value === 'left') onChange?.('right');
    else onChange?.('left');
  }, [onChange, value]);

  return (
    <button
      className="flex items-center justify-between rounded-full bg-kb-purple p-[3px] gap-1.5 w-10 h-5"
      onClick={onClickHandler}
    >
      <div
        className={clsx(
          'w-3.5 h-3.5 bg-white rounded-full',
          value !== 'left' && 'invisible'
        )}
      ></div>
      <div
        className={clsx(
          'w-3.5 h-3.5 bg-white rounded-full',
          value !== 'right' && 'invisible'
        )}
      ></div>
    </button>
  );
};
