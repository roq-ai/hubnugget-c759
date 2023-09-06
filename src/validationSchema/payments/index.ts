import * as yup from 'yup';

export const paymentValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  status: yup.string().required(),
  job_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
