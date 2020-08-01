import React from "react";
import cx from "classnames";

import * as styles from "./CreateEvent.module.css";

const CreateEventCustomOptions = props => {
  return (
    <div className={styles.playerInfoCardContent}>
      <i className={cx(`${props.icon}`, styles.playerInfoIcon)}></i>
      <div className={styles.playerInfoOptionCardTitle}>{props.title}</div>
    </div>
  );
};

export default CreateEventCustomOptions;
