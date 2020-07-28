import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "react-awesome-modal";
import cx from "classnames";

import * as styles from "./CreateEvent.module.css";
import { playerInfoOptions } from "./playerInfoOptions";
import CreateEventCustomOptions from "./CreateEventCustomOptions";

class CreateEventPlayerInfo extends Component {
  state = {
    customFieldName: "",
    customFieldType: "Text",
    customFieldTypeOptions: {
      1: "",
      2: "",
      3: "",
    },
    isCustomFieldTypeOptions: false,
    playerInfo: [],
    visible: false,
    openDd: false,
  };

  playerInfoOptions = playerInfoOptions;

  customFieldTypeOption = [
    {
      id: 1,
      option: "Text",
      options: false,
    },
    {
      id: 2,
      option: "Text Area",
      options: false,
    },
    {
      id: 3,
      option: "Dropdown",
      options: true,
    },
    {
      id: 4,
      option: "Radio Options",
      options: true,
    },
    {
      id: 5,
      option: "Check Boxes",
      options: true,
    },
    {
      id: 6,
      option: "Date",
      options: false,
    },
    {
      id: 7,
      option: "File Upload",
      options: false,
    },
  ];

  componentDidUpdate(prevProps, prevState) {
    console.log(this.playerInfoOptions);
  }

  openModal() {
    this.setState({
      visible: true,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
    });
  }

  saveModal = () => {
    if (this.state.customFieldName) {
      this.playerInfoOptions.push({
        id: this.playerInfoOptions.length + 1,
        option: this.state.customFieldName,
        icon: "fas fa-cog",
        optionsGiven: this.state.customFieldTypeOptions,
        fieldType: this.state.customFieldType,
      });

      this.setState({
        customFieldName: "",
        customFieldType: "Text",
        customFieldTypeOptions: {
          1: "",
          2: "",
          3: "",
        },
        isCustomFieldTypeOptions: false,
      });
    }

    this.closeModal();
  };

  handleDdClick = item => {
    this.setState({
      customFieldType: item.option,
      isCustomFieldTypeOptions: item.options,
      openDd: false,
    });
  };

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

  dropDown = () => {
    return (
      <div className={styles.dropDownMenu}>
        {this.customFieldTypeOption.map(item => (
          <div
            className={styles.dropDownMenuItem}
            key={item.id}
            onClick={() => this.handleDdClick(item)}>
            {item.option}
          </div>
        ))}
      </div>
    );
  };

  renderModalOptions = () => {
    return (
      <div>
        <div className={styles.labelBg}>Choose Upto 3 options</div>
        <br />
        {Object.keys(this.state.customFieldTypeOptions).map(key => {
          return (
            <div>
              <label htmlFor="option" className={styles.label}>
                Option-{key}
              </label>
              <br />
              <input
                name="option"
                type="text"
                onChange={event => {
                  this.setState({
                    customFieldTypeOptions: {
                      ...this.state.customFieldTypeOptions,
                      [key]: event.target.value,
                    },
                  });
                }}
                value={this.state.customFieldTypeOptions[key]}
                placeholder="Enter Option"
                autoComplete="off"
              />
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
        <div className={styles.componentHeader}>Player Details</div>
        <div className={styles.innerComponent}>
          <div className={styles.labelBg}>
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
              <div
                className={cx(
                  styles.playerInfoOptionCard,
                  styles.playerOptionCardNonSelected
                )}
                onClick={() => this.openModal()}>
                <CreateEventCustomOptions
                  title="Make Custom Field"
                  icon="fas fa-cog"
                />
              </div>
            </div>
            <br />

            <Modal
              visible={this.state.visible}
              width="50%"
              height="90%"
              effect="fadeInUp"
              onClickAway={() => this.closeModal()}>
              <div className={styles.CreateEventPlayerInfoModal}>
                <div className={styles.labelBg}>Make Custom Input Field</div>
                <br />

                <label htmlFor="custom-field-name" className={styles.label}>
                  Field Name
                </label>
                <br />
                <input
                  name="custom-field-name"
                  type="text"
                  onChange={event => {
                    this.setState({
                      customFieldName: event.target.value,
                    });
                  }}
                  value={this.state.customFieldName}
                  placeholder="Enter the Name of Custom Field"
                  autoComplete="off"
                />
                <br />

                <label htmlFor="custom-field-type" className={styles.label}>
                  Field Type
                </label>
                <br />
                <div
                  className={styles.dropDownSelect}
                  onClick={() => {
                    this.setState({
                      openDd: !this.state.openDd,
                    });
                  }}>
                  {this.state.customFieldType}
                </div>

                {this.state.openDd && this.dropDown()}

                <br />

                {this.state.isCustomFieldTypeOptions &&
                  this.renderModalOptions()}

                <button
                  className={styles.saveModal}
                  onClick={() => this.saveModal()}>
                  Close
                </button>
              </div>
            </Modal>

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
