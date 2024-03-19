import React from "react";
import styles from "./AccordionComponent.module.css";
import { useState } from "react";
export default function AccordionComponent() {
  const [isvisible, setIsvisible] = useState(null);

  return (
    <div className="AccordionComponent">
      <div className={`${styles.AccordionComponent}`}>
        <div className={`${styles.headline}`}>
          <label>Headline 1</label>
          <button
            onClick={() => {
              if (isvisible === 1) {
                setIsvisible(null);
              } else {
                setIsvisible(1);
              }
            }}
          >
            btn
          </button>
        </div>
        {isvisible === 1 ? <p>Accordion content 1</p> : null}
      </div>

      <div className={`${styles.AccordionComponent}`}>
        <div className={`${styles.headline}`}>
          <label>Headline 1</label>
          <button
            onClick={() => {
              if (isvisible === 2) {
                setIsvisible(null);
              } else {
                setIsvisible(2);
              }
            }}
          >
            btn
          </button>
        </div>
        {isvisible === 2 ? <p>Accordion content 1</p> : null}
      </div>
    </div>
  );
}
