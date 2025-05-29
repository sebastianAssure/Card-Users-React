import * as yup from "yup";

export const form2Schema = yup.object({
  country: yup.string().required("Country is required"),
  city: yup.string().required("City is required"),
  zipCode: yup
    .string()
    .matches(/^[0-9]{4,10}$/, "Invalid zip code format")
    .required("Zip code is required"),
});
