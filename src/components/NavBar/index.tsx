import React from "react";
import { motion } from "framer-motion";

import { useSelector, useDispatch } from "react-redux";

import { setActiveTab } from "../../redux/headerStatus/slice";

import styles from "./NavBar.module.scss";

import { SettingsBtn, TimerBtn } from "./Icons";
import { selectHeaderStatus } from "../../redux/headerStatus/selectors";

const variants = {
  timerActive: {
    transform: "translate(74px, 0px)",
  },

  settingsActive: {
    transform: "translate(-74px, 0px)",
  },
};

const NavBar: React.FC = () => {
  const { activeTab } = useSelector(selectHeaderStatus);

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
};

export default NavBar;
