import React, { Component } from "react";
import * as styles from "./CreateEvent.module.css";

import { Link } from "react-router-dom";

export default class CreateEventAdditional extends Component {
  state = {
    structure: false,
    stream: false,
    leaderBoard: false,
    schedule: false,
    voting: false,
    photos: false,
    vids: false,
  };

  render() {
    return (
      <div>
        <div className={styles.componentHeader}>additional details</div>
        <div className={styles.innerComponent}>
          <form
            onSubmit={event => {
              event.preventDefault();
            }}
          >
            <label htmlFor="additonal-features" className={styles.label}>
              Please Choose the Additional Features that you'd like for your
              event
            </label>
            <br /> <br />
            <input
              type="checkbox"
              checked={this.state.structure}
              onChange={event =>
                this.setState({ structure: event.target.checked })
              }
            />
            <span className={styles.addtionalFeature}>Team Structure</span>
            <br /> <br />
            <input
              type="checkbox"
              checked={this.state.stream}
              onChange={event =>
                this.setState({ stream: event.target.checked })
              }
            />
            <span className={styles.addtionalFeature}>
              Stream Event on Gamersback
            </span>
            <br /> <br />
            <input
              type="checkbox"
              checked={this.state.leaderBoard}
              onChange={event =>
                this.setState({ leaderBoard: event.target.checked })
              }
            />
            <span className={styles.addtionalFeature}>Leader Board</span>
            <br /> <br />
            <input
              type="checkbox"
              checked={this.state.schedule}
              onChange={event =>
                this.setState({ schedule: event.target.checked })
              }
            />
            <span className={styles.addtionalFeature}>Event Schedule</span>
            <br /> <br />
            <input
              type="checkbox"
              checked={this.state.voting}
              onChange={event =>
                this.setState({ voting: event.target.checked })
              }
            />
            <span className={styles.addtionalFeature}>Voting</span>
            <br /> <br />
            <input
              type="checkbox"
              checked={this.state.photos}
              onChange={event =>
                this.setState({ photos: event.target.checked })
              }
            />
            <span className={styles.addtionalFeature}>Photos</span>
            <br /> <br />
            <input
              type="checkbox"
              checked={this.state.vids}
              onChange={event => this.setState({ vids: event.target.checked })}
            />
            <span className={styles.addtionalFeature}>Videos</span>
            <br /> <br />
            <div className={styles.createEventInfoSubmitButton}>
              <Link to="/createevent/general">
                <input type="submit" value="Finish" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
