import React, { Fragment, useState } from "react";
import SubmitButton from "../ContactForm/Button/SubmitButton";
import styles from "./form.module.css";

const FormwithObjectApproach = () => {
  const initialFormvalues = {
    username: "",
    email: "",
    password: "",
  };
  const [formValues, setFormvalues] = useState(initialFormvalues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const inputChangeHandler = (event) => {
    setFormvalues({ ...formValues, [event.target.name]: event.target.value });
  };

  const formSubmitHandler = function (event) {
    event.preventDefault();

    setFormErrors(validate(formValues));

    if (Object.keys(formErrors).length === 0) {
      setIsSubmit(true);
      setFormvalues(initialFormvalues);
    } else {
      setIsSubmit(false);
    }
  };

  const validate = (values) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errors = {};

    //? username validations
    if (values.username.trim() === "") {
      errors.username = "username is required";
    }
    //? email validations
    if (values.email.trim() === "") {
      errors.email = "email is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "email should be of valid type";
    }
    //? password validations
    if (values.password.trim() === "") {
      errors.password = "password is required";
    } else if (values.password.trim().length <= 4) {
      errors.password = "password should have more than 4 characters";
    } else if (values.password.trim().length > 8) {
      errors.password = "password should not exceed more than 8 characters";
    }

    return errors;
  };
  return (
    <Fragment>
      {Object.keys(formErrors).length === 0 && isSubmit && (
        <p className={styles.form_submitionMessage}>
          Form Submited Successfully ✅
        </p>
      )}
      <form onSubmit={formSubmitHandler}>
        <div className={styles.form_container}>
          <div className={styles.userInput_wrapper}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className={styles.userInput}
              value={formValues.username}
              onChange={inputChangeHandler}
            />
            <p className={styles.error_text}>{formErrors.username}</p>
          </div>
          <div className={styles.userInput_wrapper}>
            <label htmlFor="username">Email Id</label>
            <input
              type="email"
              name="email"
              className={styles.userInput}
              value={formValues.email}
              onChange={inputChangeHandler}
            />
            <p className={styles.error_text}>{formErrors.email}</p>
          </div>
          <div className={styles.userInput_wrapper}>
            <label htmlFor="username">Password</label>
            <input
              type="password"
              name="password"
              className={styles.userInput}
              value={formValues.password}
              onChange={inputChangeHandler}
            />
            <p className={styles.error_text}>{formErrors.password}</p>
          </div>
        </div>
        <div className={styles.submitButton_container}>
          <SubmitButton />
        </div>
      </form>
    </Fragment>
  );
};

export default FormwithObjectApproach;
