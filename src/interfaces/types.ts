export type HeaderProps = {
  step: number;
};

export type Form1Props = {
  onNext: () => void;
};

export type Form2Props = {
  onNext: () => void;
  onBack: () => void;
};

export type Form3Props = {
  onNext: () => void;
  onBack: () => void;
};

export type ReviewFormProps = {
  onBack: () => void;
  onSubmit: () => void;
}



export type Form1Data = {
  name: string;
  age: number;
  email: string;
};

export type Form2Data = {
  country: string;
  city: string;
  zipCode: string;
};

export type Form3Data = {
  contactMethod: "email" | "phone" | "whatsapp";
  subscribe: boolean; // obligatorio y NO undefined
}

