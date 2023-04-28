import { FormEvent, useContext } from "react";

import Context from "../store/context";
import classes from "./Two.module.css";

const Two = () => {
  const context = useContext(Context);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    // console.log(payPeriod, selection);

    if (!context?.plan) {
      return;
    }

    context?.nextStep();
  };

  return (
    <section hidden={context?.step === 2 ? false : true}>
      <form onSubmit={submitHandler}>
        <div className={classes.container}>
          <h1>Select your plan</h1>
          <p>You have the option of monthly or yearly billing.</p>
          <div className={classes.buttons}>
            <button
              type="button"
              className={context?.plan === "Arcade" ? classes.chosen : ""}
              onClick={context?.planHandler.bind(null, "Arcade")}
            >
              <img src="/images/icon-arcade.svg" alt="arcade icon" />
              <div className={classes.details}>
                <h2>Arcade</h2>
                <p>{context?.payPeriod === "Monthly" ? "$9/mo" : "$90/yr"}</p>
                {context?.payPeriod === "Yearly" && (
                  <p className={classes.free}>2 months free</p>
                )}
              </div>
            </button>
            <button
              type="button"
              className={context?.plan === "Advanced" ? classes.chosen : ""}
              onClick={context?.planHandler.bind(null, "Advanced")}
            >
              <img src="/images/icon-advanced.svg" alt="advanced icon" />
              <div className={classes.details}>
                <h2>Advanced</h2>
                <p>{context?.payPeriod === "Monthly" ? "$12/mo" : "$120/yr"}</p>
                {context?.payPeriod === "Yearly" && (
                  <p className={classes.free}>2 months free</p>
                )}
              </div>
            </button>
            <button
              type="button"
              className={context?.plan === "Pro" ? classes.chosen : ""}
              onClick={context?.planHandler.bind(null, "Pro")}
            >
              <img src="/images/icon-pro.svg" alt="pro icon" />
              <div className={classes.details}>
                <h2>Pro</h2>
                <p>{context?.payPeriod === "Monthly" ? "$15/mo" : "$150/yr"}</p>
                {context?.payPeriod === "Yearly" && (
                  <p className={classes.free}>2 months free</p>
                )}
              </div>
            </button>
          </div>

          <div className={classes.options}>
            <span
              className={context?.payPeriod === "Monthly" ? classes.chosen : ""}
            >
              Monthly
            </span>
            <label className={classes.switch}>
              <input type="checkbox" onClick={context?.payPeriodHandler} />
              <span className={classes.toggle}></span>
            </label>
            <span
              className={context?.payPeriod === "Yearly" ? classes.chosen : ""}
            >
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
