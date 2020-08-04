import React from "react";
import { NavLink } from "react-router-dom";
import { Steps } from 'antd';
import * as styles from "./CreateEvent.module.css";

const { Step } = Steps;
const CreateEventNav = () => {
  return (

    <div className={styles.holder}>

      <NavLink
        to="/createevent/general"
        activeClassName={styles.active}
        className={styles.link}
      >
        <div className={styles.createEventNavCircle}></div>
           general
          </NavLink>

      <NavLink
        to="/createevent/about"
        activeClassName={styles.active}
        className={styles.link}
      >
        <div className={styles.createEventNavCircle}></div>
            about
          </NavLink>

      <NavLink
        to="/createevent/rules-regulations"
        className={styles.link}
        activeClassName={styles.active}
      >
        <div className={styles.createEventNavCircle}></div>
            Rules & Regulations
          </NavLink>

      <NavLink
        to="/createevent/prizes"
        className={styles.link}
        activeClassName={styles.active}
      >
        <div className={styles.createEventNavCircle}></div>
            Prizes
          </NavLink>

      <NavLink
        to="/createevent/organiser-details"
        className={styles.link}
        activeClassName={styles.active}
      >
        <div className={styles.createEventNavCircle}></div>
            Organiser Details
          </NavLink>

      <NavLink
        to="/createevent/bank-details"
        className={styles.link}
        activeClassName={styles.active}
      >
        <div className={styles.createEventNavCircle}></div>
            Bank Details
          </NavLink>

      <NavLink
        to="/createevent/player-details"
        className={styles.link}
        activeClassName={styles.active}
      >
        <div className={styles.createEventNavCircle}></div>
            Player Details
          </NavLink>

      <NavLink
        to="/createevent/additional-features"
        className={styles.link}
        activeClassName={styles.active}
      >
        <div className={styles.createEventNavCircle}></div>
            Additional Features
          </NavLink>
    </div>
  );
};

export default CreateEventNav;
