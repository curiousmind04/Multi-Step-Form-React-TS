import { useContext, FormEvent } from "react";

import Context from "../store/context";
import classes from "./Four.module.css";

const Four = () => {
  const context = useContext(Context);

  const prevStepHandler = () => {
    context?.resetTotal();
    context?.prevStep();
  };

  const changePlanHandler = () => {
    context?.resetTotal();
    context?.changePlan();
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    context?.nextStep();
  };

  return (
    <section hidden={context?.step === 4 ? false : true}>
      <form>
        <div className={classes.container}>
          <h1>Finishing up</h1>
          <p>Double-check everything looks OK before confirming.</p>
          <div className={classes.summary}>
            <div className={classes.top}>
              <div>
                <h2>{`${context?.plan} (${context?.payPeriod})`}</h2>
                <button type="button" onClick={changePlanHandler}>
                  Change
                </button>
              </div>
              {context?.plan === "Arcade" && (
                <span>
                  {context?.payPeriod === "Monthly" ? "$9/mo" : "$90/yr"}
                </span>
              )}
              {context?.plan === "Advanced" && (
                <span>
                  {context?.payPeriod === "Monthly" ? "$12/mo" : "$120/yr"}
                </span>
              )}
              {context?.plan === "Pro" && (
                <span>
                  {context?.payPeriod === "Monthly" ? "$15/mo" : "$150/yr"}
                </span>
              )}
            </div>
            <div className={classes.hr}></div>
            {context?.addons.includes("online service") && (
              <div className={classes.addon}>
                <span>Online Service</span>
                <span>
                  {context.payPeriod === "Monthly" ? "+$1/mo" : "+$10/yr"}
                </span>
              </div>
            )}
            {context?.addons.includes("larger storage") && (
              <div className={classes.addon}>
                <span>Larger Storage</span>
                <span>
                  {context.payPeriod === "Monthly" ? "+$2/mo" : "+$20/yr"}
                </span>
              </div>
            )}
            {context?.addons.includes("customizable profile") && (
              <div className={classes.addon}>
                <span>Customizable Profile</span>
                <span>
                  {context.payPeriod === "Monthly" ? "+$2/mo" : "+$20/yr"}
                </span>
              </div>
            )}
          </div>
          <div className={classes.total}>
            <span>{`Total (${
              context?.payPeriod === "Monthly" ? "per month" : "per year"
            })`}</span>
            <span>{`$${context?.total}/${
              context?.payPeriod === "Monthly" ? "mo" : "yr"
            }`}</span>
          </div>
        </div>
        <div className={classes.bottom}>
          <button type="button" onClick={prevStepHandler}>
            Go Back
          </button>
          <button type="submit" onClick={submitHandler}>
            Confirm
          </button>
        </div>
      </form>
    </section>
  );
};

export default Four;
