import React from "react"
import styles from "./Pomodoro.module.scss"

import Header from "../Header/Header"
import Timer from "../Timer/Timer"
import Settings from "../Settings/Settings"
import NavBar from "../NavBar/NavBar"

export default function Pomodoro() {
  const [timerDuration, setTimerDuration] = React.useState(30)
  const [initialStart, setInitialStart] = React.useState(false)
  const [activeTab, setActiveTab] = React.useState(true)

  React.useEffect(() => {
    setInitialStart(false)
  }, [timerDuration])

  return (
    <div className={styles.wrapper}>
      <Header activeTab={activeTab} initialStart={initialStart} />

      <div className={styles.tab}>
        <Timer
          timerDuration={timerDuration}
          activeTab={activeTab}
          initialStart={initialStart}
          setInitialStart={setInitialStart}
        />

        <Settings
          activeTab={activeTab}
          setTimerDuration={setTimerDuration}
          timerDuration={timerDuration}
        />
      </div>

      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
}
