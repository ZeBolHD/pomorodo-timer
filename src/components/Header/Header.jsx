import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import styles from "./Header.module.scss"

export default function Header({ activeTab, initialStart }) {
  return (
    <>
      <div className={styles.header}>
        {activeTab && (
          <motion.div
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
            <AnimatePresence>
              {!initialStart && (
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
              {initialStart && (
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
          </motion.div>
        )}
        <AnimatePresence>
          {!activeTab && (
            <div>
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
                Settings
              </motion.h1>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
