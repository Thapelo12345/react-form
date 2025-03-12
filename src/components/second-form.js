import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import "../styles/classes.css";
import "../styles/second-form.css";
import { changePlan, store } from "../state/store";
import { toggler } from "../state/store";

function selectedPlan(planType, elem){
  $('.plan-btn').each(function(){
    $(this).css({
      backgroundColor: 'hsl(0, 0%, 100%)',
      border: '1px solid hsl(229, 24%, 87%)'
    })
  })

  $(elem).css({
    backgroundColor: 'hsl(217, 100%, 97%)',
    border: '1.5px solid gray'
  })

  store.dispatch(changePlan(planType.toUpperCase()))

}//end of selectd plan function

function Form2() {

  const navig = useNavigate();

  $('#next-btn').click(()=>{navig('/form3')})
  const [isChecked, setCheck] = useState(false);
  const [arcade, setArcade] = useState("$9/mo");
  const [advanced, setAdvance] = useState("$12/mo");
  const [pro, setPro] = useState("$15/mo");

  const toggleCheck = (event) => {
    setCheck(event.target.checked);
  };

  useEffect(() => {
    $(".back-btn").css("visibility", "visible");
  }, []);

  useEffect(() => {
    if (isChecked) {

      store.dispatch(toggler("YEARLY"));

      $(".free-bees").css("display", "flex");
      $("#monthly-title").css("color", "gray");
      $("#yearly-title").css("color", "black");

      setArcade("$90/yr");
      setAdvance("$120/yr");
      setPro("$150/yr");

    } //end of if

    else {
      store.dispatch(toggler("MONTHLY"));
      $(".free-bees").css("display", "none");

      $("#monthly-title").css("color", "black");
      $("#yearly-title").css("color", "gray");

      setArcade("$9/mo");
      setAdvance("$12/mo");
      setPro("$15/mo");
      
    } //end of else
  }, [isChecked]);

  return (
    <div className="forms">
      <h1 className="form-title">Select your plan</h1>
      <p className="form-description">
        You have the option of monthly or yearly biling.
      </p>

      <div id="plans">
        <button className="plan-btn" onClick={(event)=>{selectedPlan('arcade', event.currentTarget)}}>
          <svg
            className="second-svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
          >
            <g fill="none" fillRule="evenodd">
              <circle cx="20" cy="20" r="20" fill="#FFAF7E" />
              <path
                fill="#FFF"
                fillRule="nonzero"
                d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"
              />
            </g>
          </svg>

<div className="btn-text">
<h3 className="plan-type">Arcade</h3>
          <h4 className="prices">{arcade}</h4>
          <h4 className="free-bees">2 months free</h4>  
</div>
          
        </button>

        <button className="plan-btn" onClick={(event)=>{selectedPlan('advanced', event.currentTarget)}}>
          <svg
            className="second-svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
          >
            <g fill="none" fillRule="evenodd">
              <circle cx="20" cy="20" r="20" fill="#F9818E" />
              <path
                fill="#FFF"
                fillRule="nonzero"
                d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"
              />
            </g>
          </svg>

<div className="btn-text">
<h3 className="plan-type">Advanced</h3>
          <h4 className="prices">{advanced}</h4>
          <h4 className="free-bees">2 months free</h4>
</div>
          
        </button>

        <button className="plan-btn" onClick={(event)=>{selectedPlan('pro', event.currentTarget)}}>
          <svg
            className="second-svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
          >
            <g fill="none" fillRule="evenodd">
              <circle cx="20" cy="20" r="20" fill="#483EFF" />
              <path
                fill="#FFF"
                fillRule="nonzero"
                d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"
              />
            </g>
          </svg>

<div className="btn-text">
<h3 className="plan-type">Pro</h3>
          <h4 className="prices">{pro}</h4>
          <h4 className="free-bees">2 months free</h4>
</div>
          
        </button>
      </div>

      <div id="monthly-yearly-holder">
        <h3 id="monthly-title">Monthly</h3>

        <div id="toggle-container">
          <input
            id="toggle"
            type="checkbox"
            checked={isChecked}
            onChange={toggleCheck}
          />
          <label htmlFor="toggle" className="toggle-btn"></label>
        </div>

        <h3 id="yearly-title">Yearly</h3>
      </div>

      <div className="forms-nav-btns">
        <button className="back-btn" onClick={()=>{navig('/')}}>Go Back</button>
        <button className="next-btn" onClick={()=>{
          store.getState().plan === '' ? alert('please select plan!.') : navig('/form3') 
          }
          }>Next step</button>
        </div>

    </div>
  );
}

export default Form2;
