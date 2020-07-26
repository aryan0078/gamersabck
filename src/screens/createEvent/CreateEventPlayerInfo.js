import React, { Component } from "react";
import { Link } from "react-router-dom";
import cx from "classnames";

import * as styles from "./CreateEvent.module.css";
import CreateEventCustomOptions from "./CreateEventCustomOptions";

class CreateEventPlayerInfo extends Component {
  state = {
    playerInfo: [],
  };
  playerInfoOptions = [
    {
      id: 1,
      option: "Name",
      icon: "fas fa-signature",
    },
    {
      id: 2,
      option: "Phone Number",
      icon: "fas fa-mobile",
    },
    {
      id: 3,
      option: "Address",
      icon: "fas fa-map-marked-alt",
    },
    {
      id: 4,
      option: "Facebook",
      icon: "fab fa-facebook-f",
    },
    {
      id: 5,
      option: "Instagram",
      icon: "fab fa-instagram",
    },
    {
      id: 6,
      option: "Birthday",
      icon: "fas fa-birthday-cake",
    },
    {
      id: 7,
      option: "Email",
      icon: "fas fa-at",
    },
    {
      id: 8,
      option: "Snapchat",
      icon: "fab fa-snapchat-ghost",
    },
    {
      id: 9,
      option: "Twitch",
      icon: "fab fa-twitch",
    },
    {
      id: 10,
      option: "Twitter",
      icon: "fab fa-twitter",
    },
    {
      id: 11,
      option: "Vimeo",
      icon: "fab fa-vimeo-v",
    },
    {
      id: 12,
      option: "Website",
      icon: "fas fa-globe",
    },
    {
      id: 13,
      option: "Youtube",
      icon: "fab fa-youtube",
    },
    {
      id: 14,
      option: "Gender",
      icon: "fas fa-transgender-alt",
    },
    {
      id: 15,
      option: "Age",
      icon: "fas fa-child",
    },
  ];

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state);
  }

  handleClick = item => {
    if (!this.state.playerInfo.some(current => current.id === item.id)) {
      this.setState({
        playerInfo: [...this.state.playerInfo, item],
      });
    } else {
      let selectionAfterRemoval = this.state.playerInfo;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        current => current.id !== item.id
      );
      this.setState({
        playerInfo: [...selectionAfterRemoval],
      });
    }
  };

  isItemSelected = item => {
    if (this.state.playerInfo.some(current => current.id === item.id)) {
      return true;
    }
    return false;
  };

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
            }}>
            <div className={styles.playerInfoCardWrapper}>
              {this.playerInfoOptions.map(item => (
                <div
                  className={
                    this.isItemSelected(item)
                      ? cx(
                          styles.playerInfoOptionCard,
                          styles.selectedPlayerInfo
                        )
                      : cx(
                          styles.playerInfoOptionCard,
                          styles.playerOptionCardNonSelected
                        )
                  }
                  onClick={() => this.handleClick(item)}>
                  <CreateEventCustomOptions
                    key={item.id}
                    title={item.option}
                    icon={item.icon}
                  />
                </div>
              ))}
            </div>
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

export default CreateEventPlayerInfo;
