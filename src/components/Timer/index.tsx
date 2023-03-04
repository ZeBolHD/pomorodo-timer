import React from "react";
import styles from "./Timer.module.scss";
import { motion } from "framer-motion";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import useSound from "use-sound";

import { useSelector } from "react-redux";
import { setIsBreak, setOnComplete } from "../../redux/headerStatus/slice";

import Buttons from "./Buttons/Buttons";

import soundFocus from "./Sounds/focus.mp3";
import soundBreak from "./Sounds/break.mp3";
import { selectTimerSettings } from "../../redux/timerSettings/selectors";
import { selectHeaderStatus } from "../../redux/headerStatus/selectors";
import { useAppDispatch } from "../../redux/store";

export default function Timer() {
  const { breakDuration, focusDuration, rounds } =
    useSelector(selectTimerSettings);

  const { isBreak, activeTab } = useSelector(selectHeaderStatus);

  const dispatch = useAppDispatch();

  const [pause, setPause] = React.useState(false);
  const [key, setKey] = React.useState(0);
  const [roundCurrent, setRoundCurrent] = React.useState(1);

  const [playFocus] = useSound(soundFocus, { volume: 0.7 });
  const [playBreak] = useSound(soundBreak, { volume: 0.7 });

  const onComplete = () => {
    setRoundCurrent((prev) => prev + 1);
    if (roundCurrent < rounds * 2 - 1) {
      isBreak && playFocus();
      !isBreak && playBreak();
      !pause && setPause(true);
      dispatch(setIsBreak(!isBreak));
    } else {
      playBreak();
      setRoundCurrent(1);
      setKey((prev) => prev + 1);
      setPause(false);
      dispatch(setOnComplete());
    }
  };

  React.useEffect(() => {
    setKey((prev) => prev + 1);
    setPause(false);
    dispatch(setOnComplete());
  }, [focusDuration, breakDuration, rounds]);

  const time: React.FC<{ remainingTime: number }> = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = Math.floor(remainingTime % 60);

    return (
      <div>
        <span style={{ textAlign: "center" }}>
          {minutes > 9 ? minutes : "0" + minutes}:
          {seconds > 9 ? seconds : "0" + seconds}
        </span>
      </div>
    );
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: +activeTab }}
        transition={{ duration: 0.15 }}
      >
        <div className={styles.wrapper}>
          <div className={styles.timerShadow}></div>
          {!isBreak ? (
            <CountdownCircleTimer
              key={key}
              size={250}
              strokeLinecap={"square"}
              strokeWidth={15}
              isPlaying={pause}
              duration={focusDuration * 60}
              trailColor={"#571A1A"}
              colors={"#F05454"}
              onComplete={onComplete}
            >
              {time}
            </CountdownCircleTimer>
          ) : (
            <CountdownCircleTimer
              key={key + 1}
              size={250}
              strokeLinecap={"square"}
              strokeWidth={15}
              isPlaying={pause}
              duration={breakDuration * 60}
              trailColor={"#597752"}
              colors={"#9DDA8E"}
              onComplete={onComplete}
            >
              {time}
            </CountdownCircleTimer>
          )}

          <Buttons
            pause={pause}
            setPause={setPause}
            onComplete={onComplete}
            playFocus={playFocus}
          />
        </div>
      </motion.div>
    </>
  );
}
