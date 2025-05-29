import { useState } from "react";
import { Form1 } from "./components/Form1";
import { Header } from "./components/Header";
import { Form2 } from "./components/Form2";
import { Form3 } from "./components/Form3";
import { ReviewForm } from "./components/ReviewForm";

function App() {
  const [step, setStep] = useState(1);

  const handleFinalSubmit = () => {
  const formData = JSON.parse(localStorage.getItem("data") || "{}");
  console.log("Submitted data:", formData);
  // Aquí puedes hacer una petición POST o mostrar un mensaje de éxito
  alert("Form submitted successfully!");
  localStorage.removeItem("formData");
  setStep(1); // Volver al inicio si lo deseas
};

  
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <Header step={step}/>
      {step === 1 && <Form1 onNext={() => setStep(2)} />}
      {step === 2 && <Form2 onNext={() => setStep(3)} onBack={() => setStep(1)} />}
      {step === 3 && <Form3 onNext={() => setStep(4)} onBack={() => setStep(2)} />}
      {step === 4 && <ReviewForm onBack={() => setStep(3)} onSubmit={handleFinalSubmit} />}
    </main>
  );
}
export default App;
