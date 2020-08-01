import React from "react";
import { NavLink } from "react-router-dom";

import * as styles from "./CreateEvent.module.css";

const CreateEventNav = () => {
  return (
    <nav className={styles.createEventNav}>
      <ul className={styles.createEventNavList}>
        <li>
          <NavLink
            to="/createevent/general"
            activeClassName={styles.active}
            className={styles.link}
          >
            <div className={styles.createEventNavCircle}></div>
            general
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/createevent/about"
            activeClassName={styles.active}
            className={styles.link}
          >
            <div className={styles.createEventNavCircle}></div>
            about
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/createevent/rules-regulations"
            className={styles.link}
            activeClassName={styles.active}
          >
            <div className={styles.createEventNavCircle}></div>
            Rules & Regulations
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/createevent/prizes"
            className={styles.link}
            activeClassName={styles.active}
          >
            <div className={styles.createEventNavCircle}></div>
            Prizes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/createevent/organiser-details"
            className={styles.link}
            activeClassName={styles.active}
          >
            <div className={styles.createEventNavCircle}></div>
            Organiser Details
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/createevent/bank-details"
            className={styles.link}
            activeClassName={styles.active}
          >
            <div className={styles.createEventNavCircle}></div>
            Bank Details
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/createevent/player-details"
            className={styles.link}
            activeClassName={styles.active}
          >
            <div className={styles.createEventNavCircle}></div>
            Player Details
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/createevent/additional-features"
            className={styles.link}
            activeClassName={styles.active}
          >
            <div className={styles.createEventNavCircle}></div>
            Additional Features
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default CreateEventNav;
