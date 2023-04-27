import { FormEvent, useContext, useState } from "react";

import Context from "../store/context";
import classes from "./Two.module.css";

const Two = () => {
  const context = useContext(Context);
  const [payPeriod, setPayPeriod] = useState("monthly");
  const [selection, setSelection] = useState<string>();

  const payPeriodHandler = () => {
    if (payPeriod === "monthly") {
      setPayPeriod("yearly");
    }
    if (payPeriod === "yearly") {
      setPayPeriod("monthly");
    }
  };

  const selectionHandler = (selected: string) => {
    setSelection(selected);

    context?.resetTotal();

    if (payPeriod === "monthly" && selection === "arcade") {
      context?.totalHandler(9);
    }
    if (payPeriod === "yearly" && selection === "arcade") {
      context?.totalHandler(90);
    }
    if (payPeriod === "monthly" && selection === "advanced") {
      context?.totalHandler(12);
    }
    if (payPeriod === "yearly" && selection === "advanced") {
      context?.totalHandler(120);
    }
    if (payPeriod === "monthly" && selection === "pro") {
      context?.totalHandler(15);
    }
    if (payPeriod === "yearly" && selection === "pro") {
      context?.totalHandler(150);
    }
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    console.log(context?.total);

    if (context?.total === 0) {
      return;
    } else {
      context?.nextStep();
    }
  };

  return (
    <section hidden={context?.step === 2 ? false : true}>
      <form onSubmit={submitHandler}>
        <div className={classes.container}>
          <h1>Select your plan</h1>
          <p>You have the option of monthly or yearly billing.</p>
          <button type="button" onClick={selectionHandler.bind(null, "arcade")}>
            <img src="/images/icon-arcade.svg" alt="arcade icon" />
            <div className={classes.details}>
              <h2>Arcade</h2>
              <p>{payPeriod === "monthly" ? "$9/mo" : "$90/yr"}</p>
              {payPeriod === "yearly" && (
                <p className={classes.free}>2 months free</p>
              )}
            </div>
          </button>
          <button
            type="button"
            onClick={selectionHandler.bind(null, "advanced")}
          >
            <img src="/images/icon-advanced.svg" alt="advanced icon" />
            <div className={classes.details}>
              <h2>Advanced</h2>
              <p>{payPeriod === "monthly" ? "$12/mo" : "$120/yr"}</p>
              {payPeriod === "yearly" && (
                <p className={classes.free}>2 months free</p>
              )}
            </div>
          </button>
          <button type="button" onClick={selectionHandler.bind(null, "pro")}>
            <img src="/images/icon-pro.svg" alt="pro icon" />
            <div className={classes.details}>
              <h2>Pro</h2>
              <p>{payPeriod === "monthly" ? "$15/mo" : "$150/yr"}</p>
              {payPeriod === "yearly" && (
                <p className={classes.free}>2 months free</p>
              )}
            </div>
          </button>
          <div className={classes.options}>
            <span className={payPeriod === "monthly" ? classes.chosen : ""}>
              Monthly
            </span>
            <label className={classes.switch}>
              <input type="checkbox" onClick={payPeriodHandler} />
              <span className={classes.toggle}></span>
            </label>
            <span className={payPeriod === "yearly" ? classes.chosen : ""}>
              Yearly
            </span>
          </div>
        </div>
        <div className={classes.bottom}>
          <button
            type="button"
            onClick={() => {
              context?.prevStep();
            }}
          >
            Go Back
          </button>
          <button type="submit">Next Step</button>
        </div>
      </form>
    </section>
  );
};

export default Two;
