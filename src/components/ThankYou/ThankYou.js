import React from "react";
import Card from "../UI/Card";
import "./ThankYou.css";
import thankYou from "../images/illustration-thank-you.svg";

const ThankYou = ({ rating, resetHandler }) => {
  return (
    <Card className="container">
      <div className="thank_you_img">
        <img src={thankYou} alt="" />
      </div>

      <div className="selected">
        <p>You selected {rating} out of 5</p>
      </div>

      <div className="thank_you_title">
        <h2>Thank You!</h2>
      </div>

      <div className="text">
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>

      <div className="rate_again">
        <button type="submit" onClick={resetHandler}>
          RATE AGAIN
        </button>
      </div>
    </Card>
  );
};

export default ThankYou;
