import React, { MouseEventHandler } from "react";

import styles from "./arrows.module.css";

interface ArrowsProps {
  onLeftClick: MouseEventHandler;
  onRightClick: MouseEventHandler;
}

const Arrows = ({ onLeftClick, onRightClick }: ArrowsProps) => {
  return (
    <div>
      <span className={styles.arrow} onClick={onLeftClick}>
        &#8592;
      </span>
      <span className={styles.arrow} onClick={onRightClick}>
        &#8594;
      </span>
    </div>
  );
};

export default Arrows;
