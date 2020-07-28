import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as styles from "./CreateEvent.module.css";

export default class CreateEventBankDetails extends Component {
  state = {
    accName: "",
    IFSCCode: "",
    accNo: "",
    GSTNo: "",
  };

  render() {
    return (
      <div>
        <div className={styles.componentHeader}>Bank Details</div>
        <div className={styles.innerComponent}>
          <form
            onSubmit={event => {
              event.preventDefault();
            }}
          >
            <label htmlFor="account-name" className={styles.label}>
              Account Name
            </label>
            <br />
            <input
              name="account-name"
              type="text"
              onChange={event => {
                this.setState({
                  accName: event.target.value,
                });
              }}
              value={this.state.accName}
              placeholder="Enter Account Name"
              autoComplete="off"
            />
            <br />

            <label htmlFor="account-no" className={styles.label}>
              Account Number
            </label>
            <br />
            <input
              name="account-no"
              type="text"
              onChange={event => {
                this.setState({
                  accNo: event.target.value,
                });
              }}
              value={this.state.accNo}
              placeholder="Enter Account Number"
              autoComplete="off"
            />
            <br />

            <label htmlFor="IFSCCode" className={styles.label}>
              IFSC Code
            </label>
            <br />
            <input
              name="IFSCCode"
              type="text"
              onChange={event => {
                this.setState({
                  IFSCCode: event.target.value,
                });
              }}
              value={this.state.IFSCCode}
              placeholder="Enter IFSC Code"
              autoComplete="off"
            />
            <br />

            <label htmlFor="GSTNumber" className={styles.label}>
              GST Number (Optional)
            </label>
            <br />
            <input
              name="GSTNumber"
              type="text"
              onChange={event => {
                this.setState({
                  GSTNo: event.target.value,
                });
              }}
              value={this.state.GSTNo}
              placeholder="Enter GST Number"
              autoComplete="off"
            />
            <br />
            <br />
            <div className={styles.createEventInfoSubmitButton}>
              <Link to="/createevent/player-details">
                <input type="submit" value="Next" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
