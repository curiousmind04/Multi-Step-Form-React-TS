import React from "react";

type ContextType = {
  total: number;
  step: number;
  nextStep: () => void;
  prevStep: () => void;
  totalHandler: (amount: number) => void;
  resetTotal: () => void;
};

const Context = React.createContext<ContextType | null>(null);

export default Context;
