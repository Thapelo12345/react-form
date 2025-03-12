import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import "../styles/classes.css";
import "../styles/form3.css";
import { addOns, removeOns, store } from "../state/store";

function clickedCheckBox(elem_id) {
  let myElem = "#" + elem_id;
  let getParent = $(myElem).parent();

  if ($(myElem).prop("checked")) {
    getParent.css("background-color", "hsl(217, 100%, 97%)");

    let account = {
      name: getParent.find("h4").text(),
      price: getParent.find("h5").text(),
    };

    store.dispatch(addOns(account));
  } //end of if
  
  else {
    getParent.css("background-color", "inherit");

    let remove = {
      name: getParent.find("h4").text(),
      price: getParent.find("h5").text(),
    };

    let pos = store.getState().arr.findIndex((acc) => acc.name === remove.name);
    if (pos !== -1) {
      store.dispatch(removeOns(pos));
    }
  } //end of else
} //end of clicked check box function

function Form3() {
  const navig = useNavigate();

  const [onlineServices, setOnline] = useState(() =>
    store.getState().timer === "month" ? "+$1/mo" : "+$10/yr"
  );
  const [largerStorage, setStorage] = useState(() =>
    store.getState().timer === "year" ? "+$2/mo" : "+$20/yr"
  );

  useEffect(() => {
    if (store.getState().timer === "month") {
      setOnline("+$1/mo");
      setStorage("+$2/mo");
    } else {
      setOnline("+$10/yr");
      setStorage("+$20/yr");
    }
  }, []);

  return (
    <div className="forms">
      <h1 className="form-title">Pick add-ons</h1>
      <p className="form-description">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="add-ons-holder">
        <input
          className="form3-input"
          type="checkbox"
          id="online-services"
          onClick={() => {
            clickedCheckBox("online-services");
          }}
        />
        <label className="form3-label" htmlFor="online-services">
          <div className="check-labels">
            <h4>Online-service</h4>
            <p className="from3-description">Access to multiplayer games</p>
          </div>

          <h5 className="form3-pricess">{onlineServices}</h5>
        </label>
      </div>

      <div className="add-ons-holder">
        <input
          className="form3-input"
          type="checkbox"
          id="larger-storage"
          onClick={() => {
            clickedCheckBox("larger-storage");
          }}
        />
        <label className="form3-label" htmlFor="larger-storage">
          <div className="check-labels">
            <h4>Larger storage</h4>
            <p className="from3-description">Extra 1TB of cloud save</p>
          </div>

          <h5 className="form3-pricess">{largerStorage}</h5>
        </label>
      </div>

      <div className="add-ons-holder">
        <input
          className="form3-input"
          type="checkbox"
          id="customize"
          onClick={() => {
            clickedCheckBox("customize");
          }}
        />
        <label className="form3-label" htmlFor="customize">
          <div className="check-labels">
            <h4>Customizable profile</h4>
            <p className="from3-description">Custom theme on your profile</p>
          </div>

          <h5 className="form3-pricess">{largerStorage}</h5>
        </label>
      </div>

      <div className="forms-nav-btns">
        <button
          className="back-btn"
          onClick={() => {
            
            while (store.getState().arr.length >= 1) {
                store.dispatch(removeOns(0));
            }//end of while loop
            
            navig("/form2");
          }}
        >
          Go Back
        </button>
        <button
          className="next-btn"
          onClick={() => {
            navig("/form4");
          }}
        >
          Next step
        </button>
      </div>
    </div>
  );
}

export default Form3;
