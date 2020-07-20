import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as styles from "./CreateEvent.module.css";

export default class CreateEventPrizes extends Component {
  render() {
    return (
      <div>
        <div className={styles.componentHeader}>Prizes</div>
        <div className={styles.innerComponent}>
          <form
            onSubmit={event => {
              event.preventDefault();
            }}
          >
            <br />
            <div className={styles.createEventInfoSubmitButton}>
              <Link to="/createevent/organiser-details">
                <input type="submit" value="Next" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
