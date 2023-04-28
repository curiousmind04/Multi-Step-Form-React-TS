import { useContext } from "react";

import Context from "../store/context";
import classes from "./Steps.module.css";

const Steps = () => {
  const context = useContext(Context);

  return (
    <div className={classes.steps}>
      <div>
        <div className={context?.step === 1 ? classes.current : classes.step}>
          <span>1</span>
        </div>
        <div className={classes.title}>
          <p>Step 1</p>
          <p>Your Info</p>
        </div>
      </div>
      <div>
        <div className={context?.step === 2 ? classes.current : classes.step}>
          <span>2</span>
        </div>
        <div className={classes.title}>
          <p>Step 2</p>
          <p>Select Plan</p>
        </div>
      </div>
      <div>
        <div className={context?.step === 3 ? classes.current : classes.step}>
          <span>3</span>
        </div>
        <div className={classes.title}>
          <p>Step 3</p>
          <p>Add-ons</p>
        </div>
      </div>
      <div>
        <div
          className={
            context?.step === 4 || context?.step === 5
              ? classes.current
              : classes.step
          }
        >
          <span>4</span>
        </div>
        <div className={classes.title}>
          <p>Step 4</p>
          <p>Summary</p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
