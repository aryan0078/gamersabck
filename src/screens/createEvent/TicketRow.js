import React, { useState, useEffect } from "react";
import { DatePicker } from "antd";

import * as styles from "./CreateEvent.module.css";

const { RangePicker } = DatePicker;

const TicketRow = props => {
  return (
    <div>
      <div className={styles.TicketRowWrapper}></div>
    </div>
  );
};

export default TicketRow;
