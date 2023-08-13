import React, { useState } from "react";
import Rating from "./components/Rating/Rating";
import ThankYou from "./components/ThankYou/ThankYou";

const App = () => {
  const [rating, setRating] = useState(0);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (value) => {
    setRating(value);
    setShowThankYou(true);
  };

  const handleReset = () => {
    setShowThankYou(false);
    setRating(0);
  };

  return (
    <div className="App">
      {showThankYou ? (
        <ThankYou rating={rating} resetHandler={handleReset} />
      ) : (
        <Rating onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default App;
