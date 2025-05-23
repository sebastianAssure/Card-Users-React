import { useRef, useState, type ChangeEvent } from "react";

export const ControlledUncontrolledForm = () => {
  const [userInput, setUserInput] = useState("");
  const passwordRef = useRef<HTMLInputElement>(null);

  const setUser = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleClick = () => {
    alert(`User: ${userInput}`);
    alert(`Password: ${passwordRef.current?.value}`);
    setUserInput("");
    passwordRef.current!.value = "";
  }

  return (
    <div className="flex flex-col w-60 h-max gap-3 p-8 border-2 rounded-2xl bg-amber-50">
      <label htmlFor="user">Username (Controlled)</label>
      <input id="user" className="rounded-sm border-2" type="text" value={userInput} onChange={setUser} />
      <label htmlFor="pass">Password (Uncontrolled)</label>
      <input type="password" className="rounded-sm border-2" ref={passwordRef} id="pass" />
      <button onClick={handleClick} className="bg-teal-500 text-white rounded-3xl py-2 hover:bg-teal-600">
        Loggin
      </button>
    </div>
  );
};
