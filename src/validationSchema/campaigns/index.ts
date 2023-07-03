import * as yup from 'yup';

export const campaignValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  business_id: yup.string().nullable(),
});
