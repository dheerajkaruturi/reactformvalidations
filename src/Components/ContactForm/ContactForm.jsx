import { Fragment, useState } from "react";
import "./contactform.css";
import SubmitButton from "./Button/SubmitButton";

const ContactForm = (props) => {
  //? state dealing with first name:
  const [firstName, setFirstname] = useState("");
  const [enteredNameisValid, setEnternameisValid] = useState(false);
  const [firstNameTouched, setFirstNameTouched] = useState(false);
  const [firstNameBlurred, setfirstNameBlurred] = useState(false);

  //? state dealing with last name:
  const [enteredLastName, setEnteredLastName] = useState("");
  const [lastNameisValid, setLastNameisValid] = useState(false);
  const [lastNameTouched, setLastNameTouched] = useState(false);
  const [lastNameBlurred, setLastNameBlurred] = useState(false);

  //? state dealing with email:
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailisValid, setEmailisValid] = useState(false);

  //? first name input handlers

  const firstNameChangeHandler = (event) => {
    setFirstname(event.target.value);
  };

  //* first name blur handler:

  const firstNameBlurhandler = function () {
    setFirstNameTouched(true);

    if (firstName.trim() === "") {
      setfirstNameBlurred(true);
      setEnternameisValid(false);
      return;
    }

    if (firstName.trim().length >= 2) {
      setfirstNameBlurred(false);
      setEnternameisValid(true);
      return;
    }
  };

  //? last name input handler

  const lastNameChangeHandler = function (event) {
    setEnteredLastName(event.target.value);
  };

  //* last name blur handler:

  const lastNameBlurhandler = function () {
    setLastNameTouched(true);

    if (enteredLastName.trim() === "") {
      setLastNameBlurred(true);
      setLastNameisValid(false);
      return;
    }

    if (enteredLastName.trim().length >= 2) {
      setLastNameBlurred(false);
      setLastNameisValid(true);
      return;
    }
  };

  //? email input handler:

  const emailChangeHandler = function (event) {
    setEnteredEmail(event.target.value);
  };

  //? form submission method:

  const submitHandler = function (event) {
    event.preventDefault();

    //? input value is considered as touched when the user clicks the submit button:

    setFirstNameTouched(true);

    setLastNameTouched(true);

    //! first name validation starts here

    if (firstName.trim() === "" || firstName.trim().length <= 2) {
      setEnternameisValid(false);
      return;
    } else {
      setEnternameisValid(true);
    }

    setFirstname("");

    //! last name validation starts here.

    if (enteredLastName.trim() === "" || enteredLastName.trim().length <= 2) {
      setLastNameisValid(false);
      return;
    } else {
      setLastNameisValid(true);
    }
    setEnteredLastName("");

    //! email validation starts here.

    if (enteredEmail.trim() === '' || !enteredEmail.includes('@')) {
      setEmailisValid(false);
      return;
    } else {
      setEmailisValid(true);
    }

    setEnteredEmail("");

    //! password validation starts here.

    //! comments validation starts here.
  };

  const firstName_validation = firstNameTouched && !enteredNameisValid;
  const lastName_validation = lastNameTouched && !lastNameisValid;
  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="first">
                First Name<sup>*</sup>
              </label>
              <input
                type="text"
                className={
                  firstName_validation || firstNameBlurred
                    ? "form-control input_error"
                    : "form-control"
                }
                placeholder="First Name"
                onChange={firstNameChangeHandler}
                onBlur={firstNameBlurhandler}
                value={firstName}
              />
              {firstNameTouched && !enteredNameisValid && (
                <p
                  style={{
                    color: "#f02929",
                    fontWeight: "bold",
                    fontSize: "12px",
                  }}
                >
                  Enter a valid name atleast 2 characters
                </p>
              )}
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="last">
                Last Name<sup>*</sup>
              </label>
              <input
                type="text"
                className={
                  lastName_validation || lastNameBlurred
                    ? "form-control input_error"
                    : "form-control"
                }
                placeholder="Last Name"
                onChange={lastNameChangeHandler}
                value={enteredLastName}
                onBlur={lastNameBlurhandler}
              />
              {lastNameTouched && !lastNameisValid && (
                <p
                  style={{
                    color: "#f02929",
                    fontWeight: "bold",
                    fontSize: "12px",
                  }}
                >
                  Enter a valid name atleast 2 characters
                </p>
              )}
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="email">
                Email Id<sup>*</sup>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Email Id"
                onChange={emailChangeHandler}
                value={enteredEmail}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="password">
                Create Password<sup>*</sup>
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="(5 - 7) characters"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="mobileMain">
                Enter Mobile Number<sup>*</sup>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="10 Digit Number"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="alternate">Alternate Mobile Number</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="comments">
                Enter Comments<sup>*</sup>
              </label>
              <textarea
                className="form-control"
                placeholder="(minimum 20 characters)"
              ></textarea>
              <p
                style={{
                  fontSize: "12px",
                  marginTop: "5px",
                  textAlign: "right",
                  color: "#6c6868",
                }}
              >
                Characters : 20
              </p>
            </div>
          </div>
          <div className="submitButton-container">
            <SubmitButton />
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default ContactForm;
