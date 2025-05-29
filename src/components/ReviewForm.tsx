import type { ReviewFormProps } from "../interfaces/types";

export const ReviewForm = ({ onBack, onSubmit }: ReviewFormProps) => {
  const step1 = JSON.parse(localStorage.getItem("formDataStep1") || "{}");
  const step2 = JSON.parse(localStorage.getItem("formDataStep2") || "{}");
  const step3 = JSON.parse(localStorage.getItem("formDataStep3") || "{}");

  const formData = {
    ...step1,
    ...step2,
    ...step3,
  };

  return (
    <div className="flex flex-col gap-4 p-8 rounded-md w-full max-w-md shadow-md bg-white mt-6">
      <h2 className="text-2xl text-blue-600 font-bold">Review Your Information</h2>
      <div className="text-gray-700">
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Age:</strong> {formData.age}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Country:</strong> {formData.country}</p>
        <p><strong>City:</strong> {formData.city}</p>
        <p><strong>Zip Code:</strong> {formData.zipCode}</p>
        <p><strong>Preferred Contact:</strong> {formData.contactMethod}</p>
        <p><strong>Newsletter:</strong> {formData.subscribe ? "Yes" : "No"}</p>
      </div>
      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="border-2 mt-2 rounded-2xl px-10 py-1 bg-gray-400 border-gray-400 text-white cursor-pointer"
        >
          Back
        </button>
        <button
          onClick={onSubmit}
          className="border-2 mt-2 rounded-2xl px-10 py-1 bg-blue-400 border-blue-400 text-white cursor-pointer"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
