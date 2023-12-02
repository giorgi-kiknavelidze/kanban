import { MultiTextFieldItemValue } from '../components';
import { validateTitle } from './validate-title';
import { validateNonEmptyMany } from './validate-non-empty-many';
import { isNonEmptyObject } from '../functions';

export interface TitleAndInputValidationErrors {
  title?: string;
  inputErrors?: Record<string, string | undefined>;
}

export const validateTitleAndInput = (
  title: string,
  input: MultiTextFieldItemValue[],
) => {
  const validationErrors: TitleAndInputValidationErrors = {};
  validationErrors.title = validateTitle(title);
  validationErrors.inputErrors = validateNonEmptyMany(input);
  return isNonEmptyObject(validationErrors) ? validationErrors : undefined;
};
