import { Fragment, useState } from "react";
import "./contactform.css";
import SubmitButton from "./Button/SubmitButton";

const ContactForm = (props) => {
  const [firstName, setFirstname] = useState("");
  const inputChangeHandler = (event) => {
    setFirstname(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(`entered first name is ${firstName}`);
    setFirstname("");
  };

  return (
    <Fragment>
      <form onSubmit={onSubmitHandler}>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="first">
                First Name<sup>*</sup>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                onChange={inputChangeHandler}
                value={firstName}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label htmlFor="last">
                Last Name<sup>*</sup>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="address">
                Address<sup>*</sup>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Address..."
              />
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
                Characters : 1000
              </p>
            </div>
          </div>
          <div className="submitButton-container">
            <SubmitButton></SubmitButton>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default ContactForm;
