import React from "react";

import styles from "./Pomodoro.module.scss";

import Header from "../Header";
import Timer from "../Timer";
import Settings from "../Settings";
import NavBar from "../NavBar";

const Pomodoro: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.tab}>
        <Timer />
        <Settings />
      </div>

      <NavBar />
    </div>
  );
};

export default Pomodoro;
