import * as Yup from 'yup';

export const convertValidationSchema = Yup.object().shape({
  base: Yup.string().required(),
  target: Yup.string().required(),
  amount: Yup.string()
    .required()
    .matches(/^\d+(\.\d{1,2})?$/, 'Invalid amount'),
});
