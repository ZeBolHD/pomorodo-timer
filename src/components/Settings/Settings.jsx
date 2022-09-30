import React from "react"
import styles from "./Settings.module.scss"
import { AnimatePresence, motion } from "framer-motion"

export default function AppSettings({
  activeTab,
  setTimerDuration,
  timerDuration,
}) {
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
            <nav className={styles.focus}>
              <h2>Focus</h2>
              <span>{timerDuration}:00</span>
              <input
                type="range"
                step={5}
                min={5}
                max={60}
                value={timerDuration}
                onChange={(e) => setTimerDuration(e.target.value)}
              />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
  )
}
