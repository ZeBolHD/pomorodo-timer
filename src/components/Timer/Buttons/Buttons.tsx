import React, { SetStateAction } from "react";
import styles from "./Buttons.module.scss";
import { motion } from "framer-motion";

import { setIsStarted, setIsFocus } from "../../../redux/headerStatus/slice";
import { useSelector } from "react-redux";

import { StartBtn, PauseBtn, RewindBtn } from "./Icons";
import { selectHeaderStatus } from "../../../redux/headerStatus/selectors";
import { useAppDispatch } from "../../../redux/store";

const variants = {
  beforeStartLeft: {
    left: "50%",
    transform: "translate(-50%, 0)",
  },

  afterStartLeft: {
    left: 0,
    transform: "translate(0%, 0)",
  },
  beforeStartRight: {
    right: "50%",
    transform: "translate(-50%, 0)",
  },

  afterStartRight: {
    right: 0,
    transform: "translate(0%, 0)",
  },
};

interface IButtonsProps {
  pause: boolean;
  setPause: React.Dispatch<SetStateAction<boolean>>;
  onComplete: () => void;
  playFocus: () => void;
}

const Buttons: React.FC<IButtonsProps> = ({
  pause,
  setPause,
  onComplete,
  playFocus,
}) => {
  const { isStarted } = useSelector(selectHeaderStatus);

  const dispatch = useAppDispatch();

  const start = () => {
    if (!isStarted) {
      dispatch(setIsStarted(!isStarted));
      playFocus();
      dispatch(setIsFocus(true));
    }

    setPause(!pause);
  };

  return (
    <div className={styles.buttons}>
      <motion.div
        style={{ position: "relative" }}
        variants={variants}
        initial="beforeStartLeft"
        animate={!isStarted ? "beforeStartLeft" : "afterStartLeft"}
        transition={{ type: "spring", damping: 20, stiffness: 350 }}
        onClick={start}
      >
        {!pause ? <StartBtn /> : <PauseBtn />}
      </motion.div>

      {isStarted && (
        <motion.div
          variants={variants}
          initial="beforeStartRight"
          animate="afterStartRight"
          transition={{ type: "spring", damping: 20, stiffness: 350 }}
          onClick={onComplete}
        >
          <RewindBtn />
        </motion.div>
      )}
    </div>
  );
};

export default Buttons;
