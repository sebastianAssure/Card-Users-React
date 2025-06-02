import type { ModalProps } from "../interfaces/type";

export default function Modal({ onClose, children }: ModalProps) {
  return (
     <div className="fixed inset-0 backdrop-blur-sm bg-white/10 flex justify-center items-center z-50">
      <div className="bg-white p-6 border-2 rounded-md shadow-lg w-80 text-center font-patrick">
        {children}
        <div className="flex justify-center pt-2">
          <button onClick={onClose} className="border-2 text-red-600 px-4 py-1 rounded cursor-pointer">Close</button>
        </div>
      </div>
    </div>
  );
}
