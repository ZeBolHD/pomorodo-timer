import React from "react"
import { motion } from "framer-motion"
import styles from "./NavBar.module.scss"

import SettingsBtn from "./Icons/SettingsBtn"
import TimerBtn from "./Icons/TimerBtn"

const variants = {
  timerActive: {
    transform: "translate(74px, -2px)",
  },

  settingsActive: {
    transform: "translate(-74px, -2px)",
  },
}

export default function NavBar({ activeTab, setActiveTab }) {
  return (
    <nav className={styles.nav}>
      <motion.div
        className={styles.active}
        variants={variants}
        initial={"timerActive"}
        animate={activeTab ? "timerActive" : "settingsActive"}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 400,
        }}
      ></motion.div>

      <div className={styles.button} onClick={() => setActiveTab(false)}>
        <SettingsBtn />
      </div>

      <div className={styles.button} onClick={() => setActiveTab(true)}>
        <TimerBtn />
      </div>
    </nav>
  )
}
