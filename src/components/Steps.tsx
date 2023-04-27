import { useContext } from "react";

import Context from "../store/context";
import classes from "./Steps.module.css";

const Steps = () => {
  const context = useContext(Context);

  return (
    <div className={classes.steps}>
      <div className={context?.step === 1 ? classes.current : classes.step}>
        <span>1</span>
      </div>
      <div className={context?.step === 2 ? classes.current : classes.step}>
        <span>2</span>
      </div>
      <div className={context?.step === 3 ? classes.current : classes.step}>
        <span>3</span>
      </div>
      <div className={context?.step === 4 ? classes.current : classes.step}>
        <span>4</span>
      </div>
    </div>
  );
};

export default Steps;
