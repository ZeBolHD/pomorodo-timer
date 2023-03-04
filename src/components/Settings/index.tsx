import React from "react";
import styles from "./Settings.module.scss";
import { AnimatePresence, motion } from "framer-motion";

import { useSelector } from "react-redux";
import {
  setBreakDuration,
  setFocusDuration,
  setRounds,
} from "../../redux/timerSettings/slice";
import { selectTimerSettings } from "../../redux/timerSettings/selectors";
import { selectHeaderStatus } from "../../redux/headerStatus/selectors";
import { useAppDispatch } from "../../redux/store";

const Settings: React.FC = () => {
  const { breakDuration, focusDuration, rounds } =
    useSelector(selectTimerSettings);

  const { activeTab } = useSelector(selectHeaderStatus);

  const dispatch = useAppDispatch();

  return (
    <AnimatePresence>
      {!activeTab && (
        <motion.div
          className={styles.wrapper}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className={styles.setting}>
            <h2>Focus</h2>
            <span>{focusDuration}:00</span>
            <input
              style={{
                background: `linear-gradient(90deg, var(--color-input-bg-progress)${
                  (focusDuration / 60) * 185 - 13
                }px, var(--color-primary-dark) 0%`,
              }}
              type="range"
              step={5}
              min={5}
              max={60}
              value={focusDuration}
              onChange={(e) => dispatch(setFocusDuration(e.target.value))}
            />
          </div>
          <div className={styles.setting}>
            <h2>Break</h2>
            <span>{breakDuration}:00</span>
            <input
              style={{
                background: `linear-gradient(90deg, var(--color-input-bg-progress)${
                  (breakDuration / 60) * 185 - 13
                }px, var(--color-primary-dark) 0%`,
              }}
              type="range"
              step={5}
              min={5}
              max={60}
              value={breakDuration}
              onChange={(e) => dispatch(setBreakDuration(e.target.value))}
            />
          </div>
          <div className={styles.setting}>
            <h2>Rounds</h2>
            <span>{rounds}</span>
            <input
              style={{
                background: `linear-gradient(90deg, var(--color-input-bg-progress)${
                  (rounds / 5) * 185 - 5 * rounds > 65
                    ? (rounds / 5) * 185 - 13
                    : (rounds / 5) * 185 - 30
                }px, var(--color-primary-dark) 0%`,
              }}
              type="range"
              step={1}
              min={1}
              max={5}
              value={rounds}
              onChange={(e) => dispatch(setRounds(e.target.value))}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Settings;
