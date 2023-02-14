import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Header.module.scss";

import { useSelector } from "react-redux";

export default function Header() {
  const { activeTab, isBreak, isFocus } = useSelector(
    (state) => state.headerStatus
  );

  return (
    <div className={styles.header}>
      <AnimatePresence>
        {activeTab && (
          <motion.div
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 150, opacity: 0 }}
            transition={{
              duration: 0.2,
              type: "spring",
              damping: 25,
              stiffness: 300,
            }}
          >
            <AnimatePresence>
              {!isFocus && (
                <motion.h1
                  initial={{ x: -150, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 150, opacity: 0 }}
                  transition={{
                    duration: 0.2,
                    type: "spring",
                    damping: 25,
                    stiffness: 300,
                  }}
                >
                  Pomodoro
                </motion.h1>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {isFocus && !isBreak && (
                <motion.h1
                  initial={{ x: -150, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 150, opacity: 0 }}
                  transition={{
                    duration: 0.2,
                    type: "spring",
                    damping: 25,
                    stiffness: 300,
                  }}
                >
                  Stay focused
                </motion.h1>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {isBreak && (
                <motion.h1
                  initial={{ x: -150, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 150, opacity: 0 }}
                  transition={{
                    duration: 0.2,
                    type: "spring",
                    damping: 25,
                    stiffness: 300,
                  }}
                >
                  Break time
                </motion.h1>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!activeTab && (
          <div>
            <motion.h1
              initial={{ x: -150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -150, opacity: 0 }}
              transition={{
                duration: 0.2,
                type: "spring",
                damping: 25,
                stiffness: 300,
              }}
            >
              Settings
            </motion.h1>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
