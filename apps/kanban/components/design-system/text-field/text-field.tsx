import { clsx } from 'clsx';
import { ChangeEventHandler } from 'react';

interface TextFieldPropsCommon {
  errorMessage?: string;
  placeholder?: string;
  defaultValue?: string;
}

interface TextFieldPropsInput extends TextFieldPropsCommon {
  variant?: 'input';
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

interface TextFieldPropsTextArea extends TextFieldPropsCommon {
  variant: 'textarea';
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  rows?: number;
  cols?: number;
}

export type TextFieldProps = TextFieldPropsInput | TextFieldPropsTextArea;

export const TextField = ({
  errorMessage = '',
  placeholder,
  defaultValue,
  onChange,
  variant,
  ...rest // should contain rows and cols if
}: TextFieldProps) => {
  const rows = 'rows' in rest ? rest.rows : undefined;
  const cols = 'cols' in rest ? rest.cols : undefined;
  const baseClassNames = clsx({
    'flex font-jak border-1 border-solid tp-body-l rounded bg-white dark:bg-kb-dark-gray':
      true,
    'border-kb-medium-gray/25': !errorMessage,
    'border-kb-red': errorMessage,
  });

  const commonInputClassNames =
    'block min-w-max grow bg-white dark:bg-kb-dark-gray placeholder:text-kb-black/25 text-kb-black dark:placeholder:text-white/25 dark:text-white outline-none';

  return (
    <div className={baseClassNames}>
      <label className="flex grow items-baseline text-kb-red py-2 px-4">
        {(variant === undefined || variant === 'input') && (
          <input
            type="text"
            placeholder={placeholder}
            className={commonInputClassNames}
            onChange={onChange}
            size={1}
            defaultValue={defaultValue}
          />
        )}
        {variant === 'textarea' && (
          <textarea
            placeholder={placeholder}
            className={clsx(commonInputClassNames, 'resize-none')}
            onChange={onChange}
            defaultValue={defaultValue}
            rows={rows}
            cols={cols}
          />
        )}
        <span>{errorMessage}</span>
      </label>
    </div>
  );
};
