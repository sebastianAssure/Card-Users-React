import * as yup from "yup";

export const form3Schema = yup.object({
  contactMethod: yup
    .string()
    .oneOf(["email", "phone", "whatsapp"], "Invalid contact method")
    .required("Select a contact method"),
  subscribe: yup.boolean().required().default(false),
});

