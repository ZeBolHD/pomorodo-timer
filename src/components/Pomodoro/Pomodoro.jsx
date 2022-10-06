import React from "react";
import styles from "./Pomodoro.module.scss";

import Header from "../Header/Header";
import Timer from "../Timer/Timer";
import Settings from "../Settings/Settings";
import NavBar from "../NavBar/NavBar";

export default function Pomodoro() {
  const [focusDuration, setFocusDuration] = React.useState(30);
  const [breakDuration, setBreakDuration] = React.useState(10);
  const [rounds, setRounds] = React.useState(2);
  const [isBreak, setIsBreak] = React.useState(false);

  const [initialStart, setInitialStart] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(true);

  React.useEffect(() => {
    setInitialStart(false);
    localStorage.setItem("focusLength", focusDuration);
    localStorage.setItem("breakLength", breakDuration);
    localStorage.setItem("roundsCount", rounds);
  }, [focusDuration, breakDuration, rounds]);

  return (
    <div className={styles.wrapper}>
      <Header
        activeTab={activeTab}
        initialStart={initialStart}
        isBreak={isBreak}
      />

      <div className={styles.tab}>
        <Timer
          rounds={rounds}
          focusDuration={focusDuration}
          breakDuration={breakDuration}
          isBreak={isBreak}
          setIsBreak={setIsBreak}
          activeTab={activeTab}
          initialStart={initialStart}
          setInitialStart={setInitialStart}
        />

        <Settings
          activeTab={activeTab}
          rounds={rounds}
          setRounds={setRounds}
          setFocusDuration={setFocusDuration}
          focusDuration={focusDuration}
          breakDuration={breakDuration}
          setBreakDuration={setBreakDuration}
        />
      </div>

      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
