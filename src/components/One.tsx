import { FormEvent, useRef, useState, useContext } from "react";

import Context from "../store/context";
import classes from "./One.module.css";

const One = () => {
  const [nameValidity, setNameValidity] = useState<boolean>(true);
  const [emailValidity, setEmailValidity] = useState<boolean>(true);
  const [phoneValidity, setPhoneValidity] = useState<boolean>(true);

  const context = useContext(Context);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);

  const validateName = (name: string): boolean => {
    return name?.trim().length >= 3;
  };

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePhone = (phone: string): boolean => {
    return phone?.trim().length >= 10;
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredName = nameInputRef.current!.value;
    const enteredEmail = emailInputRef.current!.value;
    const enteredPhone = phoneInputRef.current!.value;

    if (!validateName(enteredName)) {
      setNameValidity(false);
    }
    if (!validateEmail(enteredEmail)) {
      setEmailValidity(false);
    }
    if (!validatePhone(enteredPhone)) {
      setPhoneValidity(false);
    }
    if (
      !validateName(enteredName) ||
      !validateEmail(enteredEmail) ||
      !validatePhone(enteredPhone)
    ) {
      return;
    } else {
      context?.nextStep();
    }
  };

  return (
    <section hidden={context?.step === 1 ? false : true}>
      <form className={classes.form} onSubmit={submitHandler} noValidate>
        <div className={classes.container}>
          <h1>Personal info</h1>
          <p>Please provide your name, email address, and phone number.</p>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className={nameValidity ? "" : classes.error}
            name="name"
            placeholder="e.g. Stephen King"
            ref={nameInputRef}
            onChange={() => {
              setNameValidity(true);
            }}
          />
          <label htmlFor="email">Email Adress</label>
          <input
            type="email"
            id="email"
            className={emailValidity ? "" : classes.error}
            name="email"
            placeholder="e.g. stephenking@lorem.com"
            ref={emailInputRef}
            onChange={() => {
              setEmailValidity(true);
            }}
          />
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            className={phoneValidity ? "" : classes.error}
            name="phone"
            placeholder="e.g. +1 234 567 890"
            ref={phoneInputRef}
            onChange={() => {
              setPhoneValidity(true);
            }}
          />
        </div>
        <div className={classes.bottom}>
          <button type="submit">Next Step</button>
        </div>
      </form>
    </section>
  );
};

export default One;
