import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as styles from "./CreateEvent.module.css";

export default class CreateEventOrganiserDetails extends Component {
  state = {
    name: "",
    email: "",
    phNo: "",
    whNo: "",
    website: "",
  };

  render() {
    return (
      <div>
        <div className={styles.componentHeader}>Organiser Details</div>
        <div className={styles.innerComponent}>
          <form
            onSubmit={event => {
              event.preventDefault();
            }}
          >
            <label htmlFor="name" className={styles.label}>
              Coordinator Name
            </label>
            <br />
            <input
              name="name"
              type="text"
              onChange={event => {
                this.setState({
                  name: event.target.value,
                });
              }}
              value={this.state.name}
              placeholder="Enter your Name"
              autoComplete="off"
            />
            <br />

            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <br />
            <input
              name="email"
              type="text"
              onChange={event => {
                this.setState({
                  email: event.target.value,
                });
              }}
              value={this.state.email}
              placeholder="Enter your Email"
              autoComplete="off"
            />
            <br />

            <label htmlFor="phone-number" className={styles.label}>
              Phone Number
            </label>
            <br />
            <input
              name="phone-number"
              type="number"
              onChange={event => {
                this.setState({
                  phNo: event.target.value,
                });
              }}
              value={this.state.phNo}
              placeholder="Enter your Phone Number"
              autoComplete="off"
            />
            <br />

            <label htmlFor="whatsapp-number" className={styles.label}>
              WhatsApp Number
            </label>
            <br />
            <input
              name="whatsapp-number"
              type="number"
              onChange={event => {
                this.setState({
                  whNo: event.target.value,
                });
              }}
              value={this.state.whNo}
              placeholder="Enter your WhatsApp Number"
              autoComplete="off"
            />
            <br />

            <label htmlFor="website" className={styles.label}>
              Website
            </label>
            <br />
            <input
              name="website"
              type="text"
              onChange={event => {
                this.setState({
                  website: event.target.value,
                });
              }}
              value={this.state.website}
              placeholder="Enter your Website"
              autoComplete="off"
            />
            <br />
            <br />
            <div className={styles.createEventInfoSubmitButton}>
              <Link to="/createevent/bank-details">
                <input type="submit" value="Next" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
