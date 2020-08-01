import React, { Component } from "react";
import { Link } from "react-router-dom";

import * as styles from "./CreateEvent.module.css";
import RulesRow from "./RulesRow";

export default class CreateEventRules extends Component {
  state = {
    ticketNames: [
      {
        id: 1,
        ticketName: "Ticket1",
      },
      {
        id: 2,
        ticketName: "Ticket2",
      },
      {
        id: 3,
        ticketName: "Ticket3",
      },
    ],
    rules: {},
  };

  updateRules = (rule, ticketName) => {
    this.setState({
      rules: { ...this.state.rules, [ticketName]: rule },
    });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div className={styles.componentHeader}>rules & regulations</div>
        <div className={styles.innerComponent}>
          <form
            onSubmit={event => {
              event.preventDefault();
            }}
          >
            {this.state.ticketNames.map(item => {
              return <RulesRow item={item} updateRules={this.updateRules} />;
            })}
            <br />
            <div className={styles.createEventInfoSubmitButton}>
              <Link to="/createevent/prizes">
                <input type="submit" value="Next" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
