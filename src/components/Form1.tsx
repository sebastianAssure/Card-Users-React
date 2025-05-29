import { useForm } from "react-hook-form";
import type { Form1Data, Form1Props } from "../interfaces/types";
import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { form1Schema } from "../schemas/form1Schema";

export const Form1 = ({ onNext }: Form1Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<Form1Data>({resolver: yupResolver(form1Schema),});

  useEffect(() => {
    const savedData = localStorage.getItem("formDataStep1");
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setValue("name", parsed.name);
      setValue("age", parsed.age);
      setValue("email", parsed.email);
    }
  }, [setValue]);

  useEffect(() => {
    const subscription = watch((value) => {
      localStorage.setItem("formDataStep1", JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = (data: Form1Data) => {
    console.log("Step 1 Data:", data);
    onNext();
  };

  return (
    <div className="flex flex-wrap justify-around items-center mt-10 p-5 w-200 h-80 rounded-md">
      <div className="flex flex-col gap-2">
        <h1 className="text-blue-500 text-5xl">Welcome!</h1>
        <p className="text-blue-500">Get started under 2 minutes.</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center p-2 gap-2">
        <div className="flex flex-col gap-1">
          <label className="block font-medium">Name</label>
          <input
            className="border-2 rounded-md w-80 p-1 border-stone-400"
            type="text"
            id="name"
            {...register("name")}
          />
          {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
        </div>
        <div className="flex flex-col gap-1">
          <label className="block font-medium">Age</label>
          <input
            className="border-2 rounded-md w-80 p-1 border-stone-400"
            type="number"
            id="age"
            {...register("age")}
          />
          {errors.age && <span className="text-red-500 text-xs">{errors.age.message}</span>}
        </div>
        <div className="flex flex-col gap-1">
          <label className="block font-medium">Email</label>
          <input
            className="border-1 rounded-md w-80 p-1 border-stone-400"
            type="email"
            id="email"
            {...register("email")}
          />
          {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
        </div>
        <button type="submit" className="border-2 mt-2 rounded-2xl px-10 py-1 bg-blue-400 border-blue-400 text-white cursor-pointer">
          Next
        </button>
      </form>
    </div>
  );
};
