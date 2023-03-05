import React from "react";
import styles from "./Settings.module.scss";
import { AnimatePresence, motion } from "framer-motion";

import { useSelector } from "react-redux";
import { setTimerSettings } from "../../redux/timerSettings/slice";
import { selectHeaderStatus } from "../../redux/headerStatus/selectors";
import { useAppDispatch } from "../../redux/store";
import debounce from "lodash.debounce";

const Settings: React.FC = () => {
  const { activeTab } = useSelector(selectHeaderStatus);

  const dispatch = useAppDispatch();

  const [focusValue, setFocusValue] = React.useState(30);
  const [breakValue, setBreakValue] = React.useState(10);
  const [roundsValue, setRoundsValue] = React.useState(3);

  const updateTimerSettings = React.useCallback(
    debounce((settings) => {
      dispatch(setTimerSettings(settings));
    }, 750),
    []
  );

  React.useEffect(() => {
    const settings = {
      focusDuration: focusValue,
      breakDuration: breakValue,
      rounds: roundsValue,
    };
    updateTimerSettings(settings);
  }, [focusValue, breakValue, roundsValue]);

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
            <span>{focusValue}:00</span>
            <input
              style={{
                background: `linear-gradient(90deg, var(--color-input-bg-progress)${
                  (focusValue / 60) * 185 - 13
                }px, var(--color-primary-dark) 0%`,
              }}
              type="range"
              step={5}
              min={5}
              max={60}
              value={focusValue}
              onChange={(e) => setFocusValue(+e.target.value)}
            />
          </div>
          <div className={styles.setting}>
            <h2>Break</h2>
            <span>{breakValue}:00</span>
            <input
              style={{
                background: `linear-gradient(90deg, var(--color-input-bg-progress)${
                  (breakValue / 60) * 185 - 13
                }px, var(--color-primary-dark) 0%`,
              }}
              type="range"
              step={5}
              min={5}
              max={60}
              value={breakValue}
              onChange={(e) => setBreakValue(+e.target.value)}
            />
          </div>
          <div className={styles.setting}>
            <h2>Rounds</h2>
            <span>{roundsValue}</span>
            <input
              style={{
                background: `linear-gradient(90deg, var(--color-input-bg-progress)${
                  (roundsValue / 5) * 185 - 5 * roundsValue > 65
                    ? (roundsValue / 5) * 185 - 13
                    : (roundsValue / 5) * 185 - 30
                }px, var(--color-primary-dark) 0%`,
              }}
              type="range"
              step={1}
              min={1}
              max={5}
              value={roundsValue}
              onChange={(e) => setRoundsValue(+e.target.value)}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Settings;
