import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/classes.css";
import "../styles/first-form.css";

function Form1() {
  const navig = useNavigate();
  const formRef = useRef(null);

  const valiadate = (e) => {
    e.preventDefault();
    const form = formRef.current;
    //validating the form  with a tenary operator
    form.checkValidity() ? navig("/form2") : form.reportValidity();
  };

  return (
    <div className="forms">
      <h1 className="form-title">Personal info</h1>
      <p className="form-description">
        Please provide your name, email address and phone number.
      </p>

      <form ref={formRef} onSubmit={valiadate}>
        <label htmlFor="username" className="form1-labels">
          Name{" "}
        </label>
        <input
          id="username"
          type="text"
          placeholder="e.g. Stephen King"
          pattern="^(?!.*[_.]{2})[a-zA-Z0-9._]{3,16}$"
          required
        />
        <span className="error-display" id="user-span">
          This field is required
        </span>

        <label htmlFor="userEmail" className="form1-labels">
          Email Address{" "}
        </label>
        <input
          id="userEmail"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          required
        />
        <span className="error-display" id="email-span">
          This field is required
        </span>

        <label htmlFor="userPhone" className="form1-labels">
          Phone Number{" "}
        </label>
        <input
          id="userPhone"
          type="tel"
          placeholder="e.g. +1 234 567 890"
          required
        />
        <span className="error-display" id="phone-span">
          This field is required
        </span>

        <div className="forms-nav-btns">
          <button type="submit" className="next-btn">
            Next step
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form1;
