import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import "../styles/classes.css";
import "../styles/fourth-form.css";
import { removeOns, store } from "../state/store";

function getNumber(str) {
  return Number(str.split("/")[0].split("$")[1]);
} //end of get number

function Form4() {
  const navig = useNavigate();
  const [amount, setAmount] = useState(0);
  const [planType, setPlan] = useState("");
  const [time, setTime] = useState("");
  const [priceTime, setPriceTime] = useState("");
  const [totaTime, setTotalTime] = useState("");
  const [per, setPer] = useState("");

  useEffect(() => {
    if (store.getState().timer === "month") {
      setTime("Monthly");
      setTotalTime("/mo");
      setPer("month");
    } //end of if
    else {
      setTime("Yearly");
      setTotalTime("/yr");
      setPer("year");
    } //end of else

    if (store.getState().plan === "advanced") {
      setPlan("Advanced");
      store.getState().timer === "month"
        ? setPriceTime("$12/mo")
        : setPriceTime("$120/yr");
      store.getState().timer === "month"
        ? setAmount((preAmount) => preAmount + 12)
        : setAmount((preAmount) => preAmount + 120);
    } //end of if
    else if (store.getState().plan === "arcade") {
      setPlan("Arcade");
      store.getState().timer === "month"
        ? setPriceTime("$9/mo")
        : setPriceTime("$90/yr");
      store.getState().timer === "month"
        ? setAmount((preAmount) => preAmount + 9)
        : setAmount((preAmount) => preAmount + 90);
    } //end of else if
    else {
      setPlan("Pro");
      store.getState().timer === "month"
        ? setPriceTime("$15/mo")
        : setPriceTime("$150/yr");
      store.getState().timer === "month"
        ? setAmount((preAmount) => preAmount + 15)
        : setAmount((preAmount) => preAmount + 150);
    } //end of else

    let services = store.getState().arr;
    services.forEach((item) => {
      setAmount((preAmount) => preAmount + getNumber(item.price));

      let planContainer = $("<div></div>");
      planContainer.addClass("form4-plans");

      let planName = $("<h5></h5>");
      planName.addClass("plan-name");
      planName.text(item.name);

      let planPrice = $("<h4></h4>");
      planPrice.addClass("price-plan");
      planPrice.text(item.price);

      planContainer.append(planName, planPrice);

      $("#table2").append(planContainer);
    }); //end of each loop
  }, []);

  return (
    <div className="forms">
      <h1 className="form-title">Finishing up</h1>
      <p className="form-description">
        Double-checking everything looks Ok before confirming.
      </p>

      <div id="tables">
        <div id="table1">
          <div>
            <h3>
              {planType} ({time})
            </h3>
            <button
              onClick={() => {
                while (store.getState().arr.length >= 1) {
                store.dispatch(removeOns(0));
              } //end of while loop
                navig("/form2");
              }}
            >
              Change
            </button>
          </div>
          <h4>{priceTime}</h4>
        </div>

        <hr />

        <div id="table2"></div>
      </div>

      <div id="total-value">
        <h3>Total (per {per})</h3>
        <h4>
          +${amount}
          {totaTime}
        </h4>
      </div>

      <div className="forms-nav-btns">
        <button
          className="back-btn"
          onClick={
            () => {
              while (store.getState().arr.length >= 1) {
                store.dispatch(removeOns(0));
              } //end of while loop

              navig("/form3");
            } //end of back btn func
          }
        >
          Go Back
        </button>
        <button className="next-btn" id="confirm-btn" onClick={()=>{navig('/form5')}}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default Form4;
