import React from "react";
import styles from "./AccordionComponent.module.css";
import { useState } from "react";
import AccordionComponentItem from "./AccordionComponentItem";
import { itemsArry } from "../Data/data";
export default function AccordionComponent() {
  const [isvisible, setIsvisible] = useState(null);

  function handleChange(accordionNumber) {
    if (isvisible === accordionNumber) {
      setIsvisible(null);
    } else {
      setIsvisible(accordionNumber);
    }
  }

  return (
    <div className={`${styles.accordionComponent}`}>
      {itemsArry.map((item) => {
        return (
          <AccordionComponentItem
            handleChange={handleChange}
            isvisible={isvisible}
            itemNumber={item.itemNumber}
            headLabel={item.headLabel}
            accordionContent={item.accordionContent}
          />
        );
      })}
    </div>
  );
}
