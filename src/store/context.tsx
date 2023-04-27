import React from "react";

type ContextType = {
  total: number;
  step: number;
  payPeriod: string;
  plan: string | undefined;
  addons: string[];
  nextStep: () => void;
  prevStep: () => void;
  totalHandler: (amount: number) => void;
  resetTotal: () => void;
  payPeriodHandler: () => void;
  planHandler: (selected: string) => void;
  addAddonHandler: (addon: string) => void;
  removeAddonHandler: (toremove: string) => void;
  changePlan: () => void;
};

const Context = React.createContext<ContextType | null>(null);

export default Context;
