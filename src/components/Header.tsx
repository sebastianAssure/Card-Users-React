import type { HeaderProps } from "../interfaces/types";

export const Header = ({ step }: HeaderProps) => {
  return (
    <header className="flex w-200 justify-around mt-8 mb-4">
      <div
        className={`${
          step === 1 ? "bg-blue-500" : "bg-gray-500"
        } rounded-full p-4 md:p-8 transition-colors duration-300`}
      >
        #1
      </div>

      <div
        className={`${
          step === 2 ? "bg-blue-500" : "bg-gray-500"
        } rounded-full p-4 md:p-8 transition-colors duration-300`}
      >
        #2
      </div>

      <div
        className={`${
          step === 3 ? "bg-blue-500" : "bg-gray-500"
        } rounded-full p-4 md:p-8 transition-colors duration-300`}
      >
        #3
      </div>

      <div
        className={`${
          step === 4 ? "bg-blue-500" : "bg-gray-500"
        } rounded-full p-4 md:p-8 transition-colors duration-300`}
      >
        #4
      </div>
    </header>
  );
};
