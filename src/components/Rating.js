import React, { useState } from "react";
import "./Rating.css";

const Rating = (props) => {
  const emptyIcon = "/icons/stars/empty.svg";
  const filledIcon = "/icons/stars/filled.svg";
  const halfFilledIcon = "/icons/stars/half.svg";
  const [icons, setIcons] = useState([
    emptyIcon,
    emptyIcon,
    emptyIcon,
    emptyIcon,
    emptyIcon,
  ]);
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
    let selected = Number(event.currentTarget.id);
    if (isLessThanHalf(event)) selected += 0.5;
    else selected += 1;

    const newIcons = new Array(5).fill(emptyIcon);
    for (let i = 0; i < 5; i++) {
      if (i < selected) newIcons[i] = filledIcon;
      if (i + 0.5 === selected) newIcons[i] = halfFilledIcon;
    }
    setIcons(newIcons);
  };

  const onClick = (event) => {
    let half = 0;
    if (isLessThanHalf(event)) half = 0.5;
    setSelectedRating(Number(event.currentTarget.id) - half + 1);
  };

  const onMouseLeave = () => {
    const newIcons = new Array(5).fill(emptyIcon);
    for (let i = 0; i < 5; i++) {
      if (i < selectedRating) newIcons[i] = filledIcon;
      if (i + 0.5 === selectedRating) newIcons[i] = halfFilledIcon;
    }
    setIcons(newIcons);
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
      {new Array(5).fill("").map((vale, index) => renderSymbol(index))}
    </div>
  );
};

export default Rating;
