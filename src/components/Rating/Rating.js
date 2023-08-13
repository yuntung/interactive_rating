import React, { useState } from "react";
import "./Rating.css";
import Card from "../UI/Card";
import star from "../images/icon-star.svg";
import Button from "../Button/Button";


const Rating = ({ onSubmit }) => {
  const [selected, setSelected] = useState(false);
  const [rating, setRating] = useState(0);

  const handleSelect = (number) => {
    setRating(number);
    //setSelected(true);
  };

  const handleSubmit = () => {
    onSubmit(rating);
  };

  const selectedHandler = (number) =>{
    handleSelect(number);
    setSelected(true);
  }

  const buttonOneSelect = () =>{
    selectedHandler(1);
  }

  const buttonTwoSelect = () =>{
    selectedHandler(2);
  }

  const buttonThreeSelect = () =>{
    selectedHandler(3);
  }

  const buttonFourSelect = () => {
    selectedHandler(4);
  };

  const buttonFiveSelect = () =>{
    selectedHandler(5);
  }


  return (
    <Card className="container">
      <div className="star_img">
        <img src={star} alt="" />
      </div>
      <div className="title">
        <h2>How did we do?</h2>
      </div>
      <div className="description">
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <ul className="list">
        <li className="list__rating">
          <Button
            number={1}
            onSelect={buttonOneSelect
            }
            isSelected={selected && rating === 1}
          />
        </li>
        <li className="list__rating">
          <Button
            number={2}
            onSelect={buttonTwoSelect}
            isSelected={selected && rating === 2}
          />
        </li>
        <li className="list__rating">
          <Button
            number={3}
            onSelect={buttonThreeSelect}
            isSelected={selected && rating === 3}
          />
        </li>
        <li className="list__rating">
          <Button
            number={4}
            onSelect={buttonFourSelect}
            isSelected={selected && rating === 4}
          />
        </li>
        <li className="list__rating">
          <Button
            number={5}
            onSelect={buttonFiveSelect}
            isSelected={selected && rating === 5}
          />
        </li>
      </ul>
      <div className="btn__action">
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </Card>
  );
};

export default Rating;
