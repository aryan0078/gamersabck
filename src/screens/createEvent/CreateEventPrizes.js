import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as styles from "./CreateEvent.module.css";

export default class CreateEventPrizes extends Component {
  state = {
    ticketNames: ["Ticket 1", "Ticket 2", "Ticket 3"],
    prizes: {
      "Ticket 1": {
        "prizeName 1": "1st",
        "prize 1": "",
        "prizeName 2": "2nd",
        "prize 2": "",
        "prizeName 3": "3rd",
        "prize 3": "",
      },
      "Ticket 2": {
        "prizeName 1": "1st",
        "prize 1": "",
        "prizeName 2": "2nd",
        "prize 2": "",
        "prizeName 3": "3rd",
        "prize 3": "",
      },
      "Ticket 3": {
        "prizeName 1": "1st",
        "prize 1": "",
        "prizeName 2": "2nd",
        "prize 2": "",
        "prizeName 3": "3rd",
        "prize 3": "",
      },
    },
    prizeNos: {
      "Ticket 1": 3,
      "Ticket 2": 3,
      "Ticket 3": 3,
    },
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state);
  }

  handleFieldChange = (ticketName, field, event) => {
    this.setState({
      prizes: {
        ...this.state.prizes,
        [ticketName]: {
          ...this.state.prizes[ticketName],
          [field]: event.target.value,
        },
      },
    });
  };

  addPrizeRow = ticketName => {
    let newPrizeNo = this.state.prizeNos[ticketName] + 1;
    this.setState({
      prizes: {
        ...this.state.prizes,
        [ticketName]: {
          ...this.state.prizes[ticketName],
          [`prizeName ${newPrizeNo}`]: "",
          [`prize ${newPrizeNo}`]: "",
        },
      },
      prizeNos: {
        ...this.state.prizeNos,
        [ticketName]: this.state.prizeNos[ticketName] + 1,
      },
    });
  };

  removePrizeRow = ticketName => {
    this.setState({
      prizeNos: {
        ...this.state.prizeNos,
        [ticketName]: this.state.prizeNos[ticketName] - 1,
      },
    });
  };

  renderPrizeRow = ticketName => {
    const rows = [];
    for (let i = 1; i <= this.state.prizeNos[ticketName]; i++) {
      rows.push(
        <div key={i} className={styles.prizeRow}>
          <div className={styles.prizeRowField}>
            <label htmlFor="Prize-Name" className={styles.label}>
              Prize Name
            </label>
            <br />
            <input
              name="Prize-Name"
              type="text"
              onChange={event =>
                this.handleFieldChange(ticketName, `prizeName ${i}`, event)
              }
              value={this.state.prizes[ticketName][`prizeName ${i}`]}
              placeholder="Enter the Name of the Prize"
              autoComplete="off"
            />
            <br />
          </div>
          <div className={styles.prizeRowField}>
            <label htmlFor="Prize" className={styles.label}>
              Prize
            </label>
            <br />
            <input
              name="Prize"
              type="text"
              onChange={event =>
                this.handleFieldChange(ticketName, `prize ${i}`, event)
              }
              value={"" || this.state.prizes[ticketName][`prize ${i}`]}
              placeholder="Enter the Prize"
              autoComplete="off"
            />
            <br />
          </div>
        </div>
      );
    }

    return <div>{rows}</div>;
  };

  renderContent = () => {
    return (
      <div>
        {this.state.ticketNames.map(ticketName => {
          return (
            <div>
              <div className={styles.labelBg}>
                <span className={styles.rowNum}>
                  {this.state.ticketNames.indexOf(ticketName) + 1}
                </span>
                {ticketName}
              </div>
              <br />
              <br />

              {this.renderPrizeRow(ticketName)}

              <br />

              <div className={styles.rowAddDeleteButton}>
                <button
                  onClick={() => {
                    this.addPrizeRow(ticketName);
                  }}>
                  Add Prize
                </button>
                {this.state.prizeNos[ticketName] > 1 && (
                  <button
                    onClick={() => {
                      this.removePrizeRow(ticketName);
                    }}>
                    Remove Prize
                  </button>
                )}
              </div>
              <br />
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div>
        <div className={styles.componentHeader}>Prizes</div>
        <div className={styles.innerComponent}>
          <form
            onSubmit={event => {
              event.preventDefault();
            }}>
            {this.renderContent()}
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
