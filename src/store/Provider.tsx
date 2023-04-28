import { useState } from "react";

import Context from "./context";

type Props = {
  children: React.ReactNode;
};

const Provider = (props: Props) => {
  const [step, setStep] = useState<number>(2);
  const [total, setTotal] = useState<number>(0);
  const [payPeriod, setPayPeriod] = useState<string>("Monthly");
  const [plan, setPlan] = useState<string>();
  const [addons, setAddons] = useState<string[]>([]);

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

  const payPeriodHandler = () => {
    if (payPeriod === "Monthly") {
      setPayPeriod("Yearly");
    }
    if (payPeriod === "Yearly") {
      setPayPeriod("Monthly");
    }
  };

  const planHandler = (selected: string) => {
    setPlan(selected);
  };

  const addAddonHandler = (addon: string) => {
    setAddons((prevState) => [...prevState, addon]);
  };

  const removeAddonHandler = (toremove: string) => {
    setAddons((prevState) => prevState.filter((addon) => addon !== toremove));
  };

  const changePlan = () => {
    setStep(2);
  };

  // console.log(plan);
  // console.log(addons);
  // console.log(total);

  const context = {
    total: total,
    step: step,
    payPeriod: payPeriod,
    plan: plan,
    addons: addons,
    nextStep: nextStepHandler,
    prevStep: prevStepHandler,
    totalHandler: totalHandler,
    resetTotal: resetTotal,
    payPeriodHandler: payPeriodHandler,
    planHandler: planHandler,
    addAddonHandler: addAddonHandler,
    removeAddonHandler: removeAddonHandler,
    changePlan: changePlan,
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};

export default Provider;
