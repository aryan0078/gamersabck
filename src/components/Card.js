import React, { Component } from "react";
import styles from "./Card.module.css";
import back from "./b1.jpg";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }
  h = () => {
    this.setState({ hover: true });
  };
  h_ = () => {
    this.setState({ hover: false });
  };
  render() {
    return (
      <div
        className={styles.cardholder}
        style={{ width: this.props.size }}
        onMouseOver={this.h}
        onMouseLeave={this.h_}
      >
        <label
          className={styles.eventp}
          onMouseOver={this.h}
          onMouseLeave={this.h_}
        >
          20$-40$
        </label>
        <label
          className={styles.eventn}
          onMouseOver={this.h}
          onMouseLeave={this.h_}
        >
          St pter loremp -
        </label>
        <button
          onMouseOver={this.h}
          onMouseLeave={this.h_}
          className={this.state.hover ? styles.eventll : styles.eventl}
        >
          Gyanpur Bhadohi
        </button>

        <Link to="/aboutevents">
          {" "}
          <button
            onMouseOver={this.h}
            onMouseLeave={this.h_}
            className={this.state.hover ? styles.booknow : styles.booknowl}
          >
            Book Now <ArrowRightOutlined />{" "}
          </button>
        </Link>
      </div>
    );
  }
}
