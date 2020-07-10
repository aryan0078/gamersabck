import React from "react";
import { Link } from "react-router-dom";

import * as styles from "./CreateEvent.module.css";

class CreateEventGeneral extends React.Component {
  state = {
    eventName: "",
    eventDesc: "",
    startDate: "",
    endDate: "",
    location: "",
  };

  render() {
    return (
      <div>
        <div className={styles.componentHeader}>general</div>
        <div className={styles.innerComponent}>
          <form
            onSubmit={event => {
              event.preventDefault();
            }}
          >
            <label htmlFor="tournament-name" className={styles.label}>
              Tournament/Event Name
            </label>
            <br />
            <input
              name="tournament-name"
              type="text"
              onChange={event => {
                this.setState({
                  eventName: event.target.value,
                });
              }}
              value={this.state.eventName}
              placeholder="Enter the Name of Tournament/Event"
              autoComplete="off"
            />
            <br />

            <label htmlFor="event-description" className={styles.label}>
              Event Description
            </label>
            <br />
            <textarea
              name="event-description"
              className={styles.eventDescription}
              onChange={event => {
                this.setState({
                  eventName: event.target.value,
                });
              }}
              value={this.state.eventDesc}
              placeholder="Enter the details like rules etc. for the event."
              autoComplete="off"
            />
            <br />

            <div className={styles.eventDates}>
              <div className={styles.startDate}>
                <label htmlFor="Start Date" className={styles.label}>
                  Start Date
                </label>
                <br />
                <input
                  type="text"
                  onChange={event => {
                    this.setState({
                      startDate: event.target.value,
                    });
                  }}
                  value={this.state.startDate}
                  placeholder="Enter Date in dd-mm-yyy format."
                  autoComplete="off"
                />
              </div>

              <div className={styles.endDate}>
                <label htmlFor="end-date" className={styles.label}>
                  end Date
                </label>
                <br />
                <input
                  type="text"
                  onChange={event => {
                    this.setState({
                      endDate: event.target.value,
                    });
                  }}
                  value={this.state.endDate}
                  placeholder="Enter Date in dd-mm-yyy format."
                  autoComplete="off"
                />
              </div>
            </div>
            <br />

            <label htmlFor="event-location" className={styles.label}>
              Location
            </label>
            <br />
            <input
              name="event-location"
              type="text"
              onChange={event => {
                this.setState({
                  location: event.target.value,
                });
              }}
              value={this.state.location}
              placeholder="Enter the Location of Tournament/Event"
              autoComplete="off"
            />
            <br />
            <div className={styles.createEventInfoSubmitButton}>
              <Link to="/createevent/about">
                <input type="submit" value="Next" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateEventGeneral;
