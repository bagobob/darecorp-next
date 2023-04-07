import React from "react";
import styles from "./scroll.module.css";

const Scroll = () => {
  return (
    <div
      className="hidden md:flex justify-center cursor-pointer"
      onClick={() => {
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
      }}
    >
      <div className={styles.mouse}>
        <div className={styles.wheel}></div>
      </div>
    </div>
  );
};

export default Scroll;
