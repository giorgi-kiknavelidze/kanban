import { useEffect } from 'react';
import { TitleAndInputValidationErrors } from '../validators';

export interface UseUpdateErrorsParams {
  isEdit: boolean;
  onAddErrors: TitleAndInputValidationErrors;
  onEditErrors: TitleAndInputValidationErrors;
  updateErrors: (errors: Record<string, string | undefined>) => void;
}

export const useUpdateErrors = ({
  isEdit,
  onAddErrors,
  onEditErrors,
  updateErrors,
}: UseUpdateErrorsParams) => {
  useEffect(() => {
    updateErrors(
      (isEdit ? onEditErrors.inputErrors : onAddErrors.inputErrors) ?? {},
    );
  }, [isEdit, onAddErrors, onEditErrors, updateErrors]);
};
