import { clsx } from 'clsx';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { ButtonVariant } from '../types';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  fullWidth?: boolean;
  variant: ButtonVariant;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ fullWidth = false, variant, className, ...rest }, ref) => {
    const baseClassNames = clsx({
      'flex items-center justify-center rounded-3xl font-jak font-bold text-center cursor-pointer disabled:cursor-not-allowed':
        true,

      'bg-kb-purple hover:bg-kb-purple-hover disabled:bg-kb-purple-hover':
        variant === 'primary-l' || variant === 'primary-s',
      'bg-kb-purple/10 hover:bg-kb-purple/25 dark:bg-white dark:hover:bg-white':
        variant === 'secondary',
      'bg-kb-red hover:bg-kb-red-hover': variant === 'destructive',

      'py-2': variant !== 'primary-l',
      'py-3.5': variant === 'primary-l',

      'text-base': variant !== 'primary-l',
      'text-lg': variant === 'primary-l',

      'text-white': variant !== 'secondary',
      'text-kb-purple': variant === 'secondary',
      'w-full': fullWidth,
      'px-6': !fullWidth,
    });

    return (
      <button className={clsx(baseClassNames, className)} ref={ref} {...rest} />
    );
  },
);

Button.displayName = 'Button';
