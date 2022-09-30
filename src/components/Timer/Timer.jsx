import React from "react"
import styles from "./Timer.module.scss"
import { motion } from "framer-motion"
import { CountdownCircleTimer } from "react-countdown-circle-timer"
import Buttons from "./Buttons/Buttons"

export default function Timer({
  timerDuration,
  activeTab,
  initialStart,
  setInitialStart,
}) {
  const [pause, setPause] = React.useState(false)
  const [key, setKey] = React.useState(0)

  React.useEffect(() => {
    setKey((prev) => prev + 1)
    setPause(false)
  }, [timerDuration])

  const time = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60)
    const seconds = Math.floor(remainingTime % 60)

    return (
      <div>
        <span style={{ textAlign: "center" }}>
          {minutes > 9 ? minutes : "0" + minutes}:
          {seconds > 9 ? seconds : "0" + seconds}
        </span>
      </div>
    )
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: +activeTab }}
        transition={{ duration: 0.15 }}
      >
        <div className={styles.wrapper}>
          <div className={styles.timer_shadow}></div>
          <CountdownCircleTimer
            key={key}
            size={250}
            strokeLinecap={"square"}
            strokeWidth={15}
            isPlaying={pause}
            duration={timerDuration * 60}
            trailColor={"#571A1A"}
            colors={["#F05454"]}
            // onComplete={() => ({ shouldRepeat: true, delay: 1 })}
          >
            {time}
          </CountdownCircleTimer>
          <Buttons
            pause={pause}
            setPause={setPause}
            timerDuration={timerDuration}
            initialStart={initialStart}
            setInitialStart={setInitialStart}
          />
        </div>
      </motion.div>
    </>
  )
}
