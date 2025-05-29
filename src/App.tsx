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

  alert("Form submitted successfully!");
  localStorage.removeItem("formDataStep1");
  localStorage.removeItem("formDataStep2");
  localStorage.removeItem("formDataStep3");
  setStep(1);
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
