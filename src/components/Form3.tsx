import { useForm } from "react-hook-form";
import type { Form2Props, Form3Data } from "../interfaces/types";
import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { form3Schema } from "../schemas/form3Schema";

export const Form3 = ({ onNext, onBack }: Form2Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<Form3Data>({
    resolver: yupResolver(form3Schema),
    defaultValues: {
      contactMethod: "email",
      subscribe: false,
    },
  });

  useEffect(() => {
    const saved = localStorage.getItem("formDataStep3");
    if (saved) {
      const parsed = JSON.parse(saved);
      setValue("contactMethod", parsed.contactMethod || "");
      setValue("subscribe", parsed.subscribe || false);
    }
  }, [setValue]);

  useEffect(() => {
    const subscription = watch((value) => {
      localStorage.setItem("formDataStep3", JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = (data: any) => {
    console.log("Form3 data:", data);
    onNext();
  };

  return (
    <div className="flex flex-wrap justify-around items-center mt-10 p-5 w-200 h-80 rounded-md">
      <div className="flex flex-col gap-2">
        <h1 className="text-blue-500 text-5xl">Preferences!</h1>
        <p className="text-blue-500">Get started under 2 minutes.</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center p-2 gap-2"
      >
        <div>
          <label className="block font-medium mb-2">
            Preferred Contact Method
          </label>
          <div className="flex flex-col gap-1">
            <label>
              <input
                type="radio"
                value="email"
                {...register("contactMethod")}
              />{" "}
              Email
            </label>
            <label>
              <input
                type="radio"
                value="phone"
                {...register("contactMethod")}
              />{" "}
              Phone
            </label>
            <label>
              <input
                type="radio"
                value="whatsapp"
                {...register("contactMethod")}
              />{" "}
              WhatsApp
            </label>
          </div>
          {errors.contactMethod && (
            <span className="text-red-500 text-sm">
              {errors.contactMethod.message}
            </span>
          )}
        </div>

        <div>
          <label className="flex items-center gap-2 font-medium">
            <input type="checkbox" {...register("subscribe")}/> Subscribe to
            Newsletter?
          </label>
        </div>

        <div className="flex justify-between mt-4 gap-2">
          <button
            type="button"
            onClick={onBack}
            className="border-2 mt-2 rounded-2xl px-10 py-1 bg-gray-400 border-gray-400 text-white cursor-pointer"
          >
            Back
          </button>
          <button
            type="submit"
            className="border-2 mt-2 rounded-2xl px-10 py-1 bg-blue-400 border-blue-400 text-white cursor-pointer"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};
