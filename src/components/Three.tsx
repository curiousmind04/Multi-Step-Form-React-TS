import { FormEvent, ChangeEvent, useContext } from "react";

import Context from "../store/context";
import classes from "./Three.module.css";

const Three = () => {
  const context = useContext(Context);

  const prevStepHandler = () => {
    context?.prevStep();
  };

  const checkHandler = (addon: string, event: ChangeEvent) => {
    // console.log((event.target as HTMLInputElement).checked);

    if ((event.target as HTMLInputElement).checked === true) {
      context?.addAddonHandler(addon);
    }
    if ((event.target as HTMLInputElement).checked === false) {
      context?.removeAddonHandler(addon);
    }
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (!context) {
      return;
    }

    if (context.payPeriod === "Monthly") {
      if (context.plan === "Arcade") {
        context.totalHandler(9);
      }
      if (context.plan === "Advanced") {
        context.totalHandler(12);
      }
      if (context.plan === "Pro") {
        context.totalHandler(15);
      }
      if (context.addons.includes("online service")) {
        context.totalHandler(1);
      }
      if (context.addons.includes("larger storage")) {
        context.totalHandler(2);
      }
      if (context.addons.includes("customizable profile")) {
        context.totalHandler(2);
      }
    }

    if (context.payPeriod === "Yearly") {
      if (context.plan === "Arcade") {
        context.totalHandler(90);
      }
      if (context.plan === "Advanced") {
        context.totalHandler(120);
      }
      if (context.plan === "Pro") {
        context.totalHandler(150);
      }
      if (context.addons.includes("online service")) {
        context.totalHandler(10);
      }
      if (context.addons.includes("larger storage")) {
        context.totalHandler(20);
      }
      if (context.addons.includes("customizable profile")) {
        context.totalHandler(20);
      }
    }

    context.nextStep();
  };

  return (
    <section hidden={context?.step === 3 ? false : true}>
      <form onSubmit={submitHandler}>
        <div className={classes.container}>
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience.</p>
          <label
            htmlFor="one"
            className={
              context?.addons.includes("online service") ? classes.chosen : ""
            }
          >
            <div className={classes.left}>
              <label className={classes.checkmark}>
                <input
                  type="checkbox"
                  id="one"
                  onChange={checkHandler.bind(null, "online service")}
                />
                <span className={classes.check}></span>
                <img src="/images/icon-checkmark.svg" alt="checkmark icon" />
              </label>
              <div className={classes.details}>
                <h2>Online service</h2>
                <p>Access to multiplayer games.</p>
              </div>
            </div>
            <p>{context?.payPeriod === "Monthly" ? "+$1/mo" : "+$10/yr"}</p>
          </label>

          <label
            htmlFor="two"
            className={
              context?.addons.includes("larger storage") ? classes.chosen : ""
            }
          >
            <div className={classes.left}>
              <label className={classes.checkmark}>
                <input
                  type="checkbox"
                  id="two"
                  onChange={checkHandler.bind(null, "larger storage")}
                />
                <span className={classes.check}></span>
                <img src="/images/icon-checkmark.svg" alt="checkmark icon" />
              </label>
              <div className={classes.details}>
                <h2>Larger storage</h2>
                <p>Extra 1TB of cloud save</p>
              </div>
            </div>
            <p>{context?.payPeriod === "Monthly" ? "+$2/mo" : "+$20/yr"}</p>
          </label>

          <label
            htmlFor="three"
            className={
              context?.addons.includes("customizable profile")
                ? classes.chosen
                : ""
            }
          >
            <div className={classes.left}>
              <label className={classes.checkmark}>
                <input
                  type="checkbox"
                  id="three"
                  onChange={checkHandler.bind(null, "customizable profile")}
                />
                <span className={classes.check}></span>
                <img src="/images/icon-checkmark.svg" alt="checkmark icon" />
              </label>
              <div className={classes.details}>
                <h2>Customizable profile</h2>
                <p>Custom theme on your profile</p>
              </div>
            </div>
            <p>{context?.payPeriod === "Monthly" ? "+$2/mo" : "+$20/yr"}</p>
          </label>
        </div>
        <div className={classes.bottom}>
          <button type="button" onClick={prevStepHandler}>
            Go Back
          </button>
          <button type="submit">Next Step</button>
        </div>
      </form>
    </section>
  );
};

export default Three;
