import { configureStore } from "@reduxjs/toolkit";

const emptyIcon = "/icons/stars/empty.svg";
const filledIcon = "/icons/stars/filled.svg";
const halfFilledIcon = "/icons/stars/half.svg";

const isLessThanHalf = (event) => {
  const { target } = event;
  const boundingClientRect = target.getBoundingClientRect();
  let mouseAt = event.clientX - boundingClientRect.left;
  mouseAt = Math.round(Math.abs(mouseAt));
  return mouseAt <= boundingClientRect.width / 2;
};

const onMouseOver = (state, event) => {
  let selected = Number(event.currentTarget.id);
  if (isLessThanHalf(event)) selected += 0.5;
  else selected += 1;

  const newIcons = new Array(5).fill(emptyIcon);
  for (let i = 0; i < 5; i++) {
    if (i < selected) newIcons[i] = filledIcon;
    if (i + 0.5 === selected) newIcons[i] = halfFilledIcon;
  }
  return { ...state, icons: newIcons };
};

const onClick = (state, event) => {
  let half = 0;
  if (isLessThanHalf(event)) half = 0.5;
  let newSelectedRating = Number(event.currentTarget.id) - half + 1;
  newSelectedRating =
    newSelectedRating === state.selectedRating ? 0 : newSelectedRating;
  return {
    ...state,
    selectedRating: newSelectedRating,
  };
};

const onMouseLeave = (state) => {
  const newIcons = new Array(5).fill(emptyIcon);
  for (let i = 0; i < 5; i++) {
    if (i < state.selectedRating) newIcons[i] = filledIcon;
    if (i + 0.5 === state.selectedRating) newIcons[i] = halfFilledIcon;
  }
  return { ...state, icons: newIcons };
};

const reducer = (
  state = {
    icons: [emptyIcon, emptyIcon, emptyIcon, emptyIcon, emptyIcon],
    selectedRating: 0,
  },
  action
) => {
  if (action.type === "onMouseOver") return onMouseOver(state, action.event);
  if (action.type === "onClick") return onClick(state, action.event);
  if (action.type === "onMouseLeave") return onMouseLeave(state);
  return state;
};

const store = configureStore({
  reducer,
});

export default store;
