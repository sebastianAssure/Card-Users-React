type ButtonProps = {
  onAction: () => void;
};

export const Button = ({ onAction }: ButtonProps) => {
  return (
    <button
      className="rounded-2xl bg-sky-500 text-white p-2 hover:bg-sky-600 hover:text-gray-700"
      onClick={onAction}
    >
      Click me!
    </button>
  );
};
