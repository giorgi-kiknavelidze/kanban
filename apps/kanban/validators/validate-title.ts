import { ValidationError } from 'yup';
import { nonEmptySchema } from './schemas';

export const validateTitle = (title: string) => {
  try {
    nonEmptySchema.validateSync(title);
  } catch (err) {
    // err will always be ValidationError
    if (err instanceof ValidationError) return err.message;
  }
};
