import { useRef, useState } from "react";

export const SignInForm = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const [errors, setErrors] = useState({ name: "", email: "", password: ""});

    const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const name = nameRef.current?.value.trim() || "";
        const email = emailRef.current?.value.trim() || "";
        const password = passwordRef.current?.value || "";

        const newErrors = {
            name: name ? "" : "Name required",
            email: email ? validateEmail(email)
                            ? ""
                            : "Email is invalid"
                         : "Email is required",
            password: password ? "" : "Password is required",
        }

        setErrors(newErrors);

        if (newErrors.name) {
            nameRef.current?.focus();
        } else if (newErrors.email) {
            emailRef.current?.focus();
        } else if (newErrors.password) {
            passwordRef.current?.focus();
        }

        if (!newErrors.name && !newErrors.email && !newErrors.password) {
            alert("Form submitted!");
        }
    }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center p-10 mt-5 border-1 rounded-2xl w-100 h-70 gap-3">
        <div className="flex gap-3 row-span-2">
             <label htmlFor="" className="font-bold">Name:</label>
             <input type="text" ref={nameRef} className="border-2 rounded-md" />
             {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="flex gap-3">
             <label htmlFor="" className="font-bold">Email:</label>
             <input type="email" ref={emailRef} className="border-2 rounded-md" />
             {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="flex gap-3">
             <label htmlFor="" className="font-bold">Password:</label>
            <input type="password" ref={passwordRef} className="border-2 rounded-md" />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
      <button type="submit" className="border-2 border-indigo-300 rounded-md p-2 mt-2 bg-indigo-300 hover:bg-indigo-400 cursor-pointer">Sign In</button>
    </form>
  );
};
