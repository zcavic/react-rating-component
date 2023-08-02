import React, { useState } from "react";
import "./Rating.css";

const Rating = (props) => {
  const emptyIcon = "/icons/stars/empty.svg";
  const filledIcon = "/icons/stars/filled.svg";
  const halfFilledIcon = "/icons/stars/half.svg";
  const [icon1, setIcon1] = useState(emptyIcon);
  const [icon2, setIcon2] = useState(emptyIcon);
  const [icon3, setIcon3] = useState(emptyIcon);
  const [icon4, setIcon4] = useState(emptyIcon);
  const [icon5, setIcon5] = useState(emptyIcon);
  const [selectedRating, setSelectedRating] = useState(0);

  // Utility function to calculate if the mouse event happened on the left side of the target or the right side.
  const isLessThanHalf = (event) => {
    const { target } = event;
    const boundingClientRect = target.getBoundingClientRect();
    let mouseAt = event.clientX - boundingClientRect.left;
    mouseAt = Math.round(Math.abs(mouseAt));
    return mouseAt <= boundingClientRect.width / 2;
  };

  const onMouseOver = (event) => {
    setIcon1(emptyIcon);
    setIcon2(emptyIcon);
    setIcon3(emptyIcon);
    setIcon4(emptyIcon);
    setIcon5(emptyIcon);
    switch (event.currentTarget.id) {
      case "1":
        if (isLessThanHalf(event)) setIcon1(halfFilledIcon);
        else setIcon1(filledIcon);
        break;
      case "2":
        setIcon1(filledIcon);
        if (isLessThanHalf(event)) setIcon2(halfFilledIcon);
        else setIcon2(filledIcon);
        break;
      case "3":
        setIcon1(filledIcon);
        setIcon2(filledIcon);
        if (isLessThanHalf(event)) setIcon3(halfFilledIcon);
        else setIcon3(filledIcon);
        break;
      case "4":
        setIcon1(filledIcon);
        setIcon2(filledIcon);
        setIcon3(filledIcon);
        if (isLessThanHalf(event)) setIcon4(halfFilledIcon);
        else setIcon4(filledIcon);
        break;
      case "5":
        setIcon1(filledIcon);
        setIcon2(filledIcon);
        setIcon3(filledIcon);
        setIcon4(filledIcon);
        if (isLessThanHalf(event)) setIcon5(halfFilledIcon);
        else setIcon5(filledIcon);
        break;
      default:
        console.log(`Invalid ID.`);
    }
  };

  const onClick = (event) => {
    let half = 0;
    if (isLessThanHalf(event)) half = 0.5;
    setSelectedRating(Number(event.currentTarget.id) - half);
  };

  const onMouseLeave = () => {
    setIcon1(emptyIcon);
    setIcon2(emptyIcon);
    setIcon3(emptyIcon);
    setIcon4(emptyIcon);
    setIcon5(emptyIcon);
    if (selectedRating > 4) {
      setIcon1(filledIcon);
      setIcon2(filledIcon);
      setIcon3(filledIcon);
      setIcon4(filledIcon);
      if (selectedRating === 5) setIcon5(filledIcon);
      else setIcon5(halfFilledIcon);
    } else if (selectedRating > 3) {
      setIcon1(filledIcon);
      setIcon2(filledIcon);
      setIcon3(filledIcon);
      if (selectedRating === 4) setIcon4(filledIcon);
      else setIcon4(halfFilledIcon);
    } else if (selectedRating > 2) {
      setIcon1(filledIcon);
      setIcon2(filledIcon);
      if (selectedRating === 3) setIcon3(filledIcon);
      else setIcon3(halfFilledIcon);
    } else if (selectedRating > 1) {
      setIcon1(filledIcon);
      if (selectedRating === 2) setIcon2(filledIcon);
      else setIcon2(halfFilledIcon);
    } else if (selectedRating > 0) {
      if (selectedRating === 1) setIcon1(filledIcon);
      else setIcon1(halfFilledIcon);
    } else {
      setIcon1(emptyIcon);
      setIcon2(emptyIcon);
      setIcon3(emptyIcon);
      setIcon4(emptyIcon);
      setIcon5(emptyIcon);
    }
  };

  const renderSymbol = () => {
    return (
      <div>
        <img
          id="1"
          src={icon1}
          className="rating-image"
          data-testid="rating-icon"
          alt="Rate"
          onMouseMove={onMouseOver}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
        />
        <img
          id="2"
          src={icon2}
          className="rating-image"
          data-testid="rating-icon"
          alt="Rate"
          onMouseMove={onMouseOver}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
        />
        <img
          id="3"
          src={icon3}
          className="rating-image"
          data-testid="rating-icon"
          alt="Rate"
          onMouseMove={onMouseOver}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
        />
        <img
          id="4"
          src={icon4}
          className="rating-image"
          data-testid="rating-icon"
          alt="Rate"
          onMouseMove={onMouseOver}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
        />
        <img
          id="5"
          src={icon5}
          className="rating-image"
          data-testid="rating-icon"
          alt="Rate"
          onMouseMove={onMouseOver}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
        />
      </div>
    );
  };

  return (
    <div
      tabIndex="0"
      className="star-rating"
      data-testid="star-rating-container"
    >
      {renderSymbol()}
    </div>
  );
};

export default Rating;
