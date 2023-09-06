import * as yup from 'yup';

export const jobValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  organization_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
