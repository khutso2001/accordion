import React from "react";
import styles from "./AccordionComponentItem.module.css";
import { useState } from "react";

export default function AccordionComponentItem(props) {
  const { handleChange, isvisible, itemNumber, headLabel, accordionContent } =
    props;

  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated(!isRotated);
  };
  return (
    <div className={`${styles.AccordionComponentitem}`}>
      <div className={`${styles.itemHeadline}`}>
        <label className={`${styles.itemHeadlineLabel}`}>{headLabel}</label>
        <button
          className={`${styles.itemHeadlineButton}`}
          onClick={() => {
            handleChange(itemNumber);
            handleClick();
          }}
        >
          <span
            class="material-symbols-outlined"
            style={{ transform: `rotate(${isRotated ? 180 : 0}deg)` }}
          >
            expand_more
          </span>
        </button>
      </div>
      <div></div>
      {isvisible === itemNumber ? (
        <p className={`${styles.itemContent}`}>{accordionContent}</p>
      ) : null}
    </div>
  );
}
