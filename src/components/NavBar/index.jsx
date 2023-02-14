import React from "react";
import { motion } from "framer-motion";

import { useSelector, useDispatch } from "react-redux";

import { setActiveTab } from "../../redux/slices/headerStatusSlice";

import styles from "./NavBar.module.scss";

import SettingsBtn from "./Icons/SettingsBtn";
import TimerBtn from "./Icons/TimerBtn";

const variants = {
  timerActive: {
    transform: "translate(74px, 0px)",
  },

  settingsActive: {
    transform: "translate(-74px, 0px)",
  },
};

export default function NavBar() {
  const { activeTab } = useSelector((state) => state.headerStatus);

  const dispatch = useDispatch();

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
      <div
        onClick={() => dispatch(setActiveTab(false))}
        className={styles.button}
      >
        <SettingsBtn />
      </div>
      <div
        onClick={() => dispatch(setActiveTab(true))}
        className={styles.button}
      >
        <TimerBtn />
      </div>
    </nav>
  );
}
