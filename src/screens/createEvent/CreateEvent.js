import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import * as styles from "./CreateEvent.module.css";
import CreateEventGeneral from "./CreateEventGeneral";
import CreateEventAbout from "./CreateEventAbout";

const CreateEvent = () => {
  return (
    <BrowserRouter>
      <div className={styles.createEventWrapper}>
        <div className={styles.createEventInnerWrapper}>
          {/* NavBar placed on the left side of the page. */}
          <nav className={styles.createEventNav}>
            <ul className={styles.createEventNavList}>
              <li>
                <NavLink to="/createevent/general">general</NavLink>
              </li>
              <li>
                <NavLink to="/createevent/about">about</NavLink>
              </li>
              <li>
                <NavLink to="/createevent/rules-regulations">
                  Rules & Regulations
                </NavLink>
              </li>
              <li>
                <NavLink to="/createevent/player-mode">Player Mode</NavLink>
              </li>
              <li>
                <NavLink to="/createevent/monetary">
                  Entry Fee and Prize
                </NavLink>
              </li>
              <li>
                <NavLink to="/createevent/schedule-structure">
                  Schedule/Structure
                </NavLink>
              </li>
              <li>
                <NavLink to="/createevent/additional-features">
                  Additional Features
                </NavLink>
              </li>
              <li>
                <NavLink to="/createevent/select-menu">Select the Menu</NavLink>
              </li>
            </ul>
          </nav>

          {/* Section to display all the content for creating the event */}
          <div className={styles.createEventInnerComponents}>
            <Route path="/createevent/general" component={CreateEventGeneral} />
            <Route path="/createevent/about" component={CreateEventAbout} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default CreateEvent;
