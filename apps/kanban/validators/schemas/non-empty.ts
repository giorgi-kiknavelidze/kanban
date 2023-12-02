import * as yup from 'yup';

export const nonEmptySchema = yup.string().trim().required('Cannot Be Empty');
