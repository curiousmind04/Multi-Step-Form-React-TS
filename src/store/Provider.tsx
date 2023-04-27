import { useState } from "react";

import Context from "./context";

type Props = {
  children: React.ReactNode;
};

const Provider = (props: Props) => {
  const [step, setStep] = useState<number>(2);
  const [total, setTotal] = useState<number>(0);

  const nextStepHandler = () => {
    setStep((prevState) => prevState + 1);
  };

  const prevStepHandler = () => {
    setStep((prevState) => prevState - 1);
  };

  const totalHandler = (amount: number) => {
    setTotal((prevState) => prevState + amount);
  };

  const resetTotal = () => {
    setTotal(0);
  };

  const context = {
    total: total,
    step: step,
    nextStep: nextStepHandler,
    prevStep: prevStepHandler,
    totalHandler: totalHandler,
    resetTotal: resetTotal,
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};

export default Provider;
