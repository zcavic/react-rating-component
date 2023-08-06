import React from "react";
import "./Rating.css";
import { useDispatch, useSelector } from "react-redux";

const Rating = () => {
  const icons = useSelector((state) => state.icons);
  const dispatch = useDispatch();

  const onMouseOver = (event) => {
    dispatch({ type: "onMouseOver", event });
  };

  const onClick = (event) => {
    dispatch({ type: "onClick", event });
  };

  const onMouseLeave = () => {
    dispatch({ type: "onMouseLeave" });
  };

  const renderSymbol = (index) => {
    return (
      <img
        id={index}
        key={index}
        src={icons[index]}
        className="rating-image"
        data-testid="rating-icon"
        alt="Rate"
        onMouseMove={onMouseOver}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      />
    );
  };

  return (
    <div
      tabIndex="0"
      className="star-rating"
      data-testid="star-rating-container"
    >
      {new Array(5).fill("").map((value, index) => renderSymbol(index))}
    </div>
  );
};

export default Rating;
