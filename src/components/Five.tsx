import { useContext } from "react";

import Context from "../store/context";
import classes from "./Five.module.css";

const Five = () => {
  const context = useContext(Context);

  return (
    <section hidden={context?.step === 5 ? false : true}>
      <div className={classes.container}>
        <img src="/images/icon-thank-you.svg" alt="thank you icon" />
        <h1>Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </section>
  );
};

export default Five;
