import { useForm, useFieldArray, type SubmitHandler } from "react-hook-form";
import type { SocialMedia } from "../interfaces/types";

interface IFormInput {
  socialMedia: SocialMedia[];
}

function SocialMediaForm() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      socialMedia: [{ platform: "instagram", url: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "socialMedia",
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const urlPattern =
    /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/;

  return (
    <div className="grid gap-6 grid-cols-2 grid-rows-1">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <h2>Social Media Links</h2>
        {fields.map((field, index) => (
          <div key={field.id} className="border mb-6 rounded-2xl p-6">
            <div>
              <label htmlFor={`platform-${index}`}>Platform</label>
              <select
                id={`platform-${index}`}
                {...register(`socialMedia.${index}.platform`, {
                  required: "Platform is required",
                })}
              >
                <option value="twitter">Twitter</option>
                <option value="facebook">Facebook</option>
                <option value="instagram">Instagram</option>
                <option value="linkedin">LinkedIn</option>
                <option value="github">GitHub</option>
                <option value="youtube">YouTube</option>
              </select>
              {errors.socialMedia?.[index]?.platform && (
                <p>{errors.socialMedia[index].platform?.message}</p>
              )}
            </div>

            <div>
              <label htmlFor={`url-${index}`}>URL</label>
              <input
                type="text"
                id={`url-${index}`}
                {...register(`socialMedia.${index}.url`, {
                  required: "URL is required",
                  pattern: {
                    value: urlPattern,
                    message: "Please enter a valid URL",
                  },
                })}
              />
              {errors.socialMedia?.[index]?.url && (
                <p className="text-red-500">{errors.socialMedia[index].url?.message}</p>
              )}
            </div>

            {fields.length > 1 && (
              <button type="button" onClick={() => remove(index)}>
                Remove
              </button>
            )}
          </div>
        ))}

        {fields.length < 5 && (
          <button
            type="button"
            onClick={() => append({ platform: "instagram", url: "" })}
          >
            Add Social Media
          </button>
        )}

        <button type="submit">Submit</button>
      </form>
      <div>
        <pre>{JSON.stringify(watch(), null, 2)}</pre>
      </div>
    </div>
  );
}

export default SocialMediaForm;