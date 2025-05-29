import * as yup from "yup";

export const form1Schema = yup.object({
  name: yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
  age: yup
    .number()
    .typeError("Age must be a number")
    .min(14, "You must be at least 14")
    .required("Age is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
});
