import { ValidationError } from 'yup';
import { isNonEmptyObject } from '../functions';
import { nonEmptySchema } from './schemas';

export interface ValidateNonEmptyManyItem {
  id: string | number;
  value: string;
}

export const validateNonEmptyMany = (items: ValidateNonEmptyManyItem[]) => {
  const validationErrors: Record<string | number, string | undefined> = {};

  items.forEach(({ value, id }) => {
    try {
      nonEmptySchema.validateSync(value);
    } catch (err) {
      if (!(err instanceof ValidationError)) return;
      validationErrors[id] = err.message;
    }
  });

  return isNonEmptyObject(validationErrors) ? validationErrors : undefined;
};
