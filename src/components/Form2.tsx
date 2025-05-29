import { useForm } from "react-hook-form";
import type { Form2Data, Form2Props } from "../interfaces/types";
import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { form2Schema } from "../schemas/form2Schema";

export const Form2 = ({ onNext, onBack }: Form2Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<Form2Data>({resolver: yupResolver(form2Schema)});

  useEffect(() => {
    const saved = localStorage.getItem("formDataStep2");
    if (saved) {
      const parsed = JSON.parse(saved);
      setValue("country", parsed.country || "");
      setValue("city", parsed.city || "");
      setValue("zipCode", parsed.zipCode || "");
    }
  }, [setValue]);

  useEffect(() => {
    const subscription = watch((value) => {
      localStorage.setItem("formDataStep2", JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = (data: Form2Data) => {
    console.log("Form2: ", data);
    onNext();
  };

  return (
    <div className="flex flex-wrap justify-around items-center mt-10 p-5 w-200 h-80 rounded-md">
      <div className="flex flex-col gap-2">
        <h1 className="text-blue-500 text-5xl">Address!</h1>
        <p className="text-blue-500">Get started under 2 minutes.</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center p-2 gap-2">
        <div className="flex flex-col gap-1">
          <label className="block font-medium">Country</label>
          <input
            className="border-2 rounded-md w-80 p-1 border-stone-400"
            {...register("country")}
          />
          {errors.country && (
            <span className="text-red-500 text-xs">{errors.country.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="block font-medium">City</label>
          <input
            className="border-2 rounded-md w-80 p-1 border-stone-400"
            {...register("city")}
          />
          {errors.city && (
            <span className="text-red-500 text-xs">{errors.city.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="block font-medium">Zip Code</label>
          <input
            className="border-2 rounded-md w-80 p-1 border-stone-400"
            {...register("zipCode")}
          />
          {errors.zipCode && (
            <span className="text-red-500 text-xs">{errors.zipCode.message}</span>
          )}
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
