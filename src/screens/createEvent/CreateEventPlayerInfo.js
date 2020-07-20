import React, { Component } from "react";
import { Link } from "react-router-dom";

import * as styles from "./CreateEvent.module.css";

export default class CreateEventPlayerInfo extends Component {
  render() {
    return (
      <div>
        <div className={styles.componentHeader}>Player Details</div>
        <div className={styles.innerComponent}>
          <div className={styles.label}>
            choose all the details you will need from the player
          </div>
          <form
            onSubmit={event => {
              event.preventDefault();
            }}
          >
            <br />
            <div className={styles.createEventInfoSubmitButton}>
              <Link to="/createevent/additional-features">
                <input type="submit" value="Next" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
