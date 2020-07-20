import React, { useState, useEffect } from "react";

import * as styles from "./CreateEvent.module.css";

const RulesRow = ({ item, updateRules }) => {
  const [rules, setRules] = useState("");

  useEffect(() => {
    updateRules(rules, item.ticketName);
  }, [rules, item.ticketName, updateRules]);

  return (
    <div>
      <label htmlFor={`${item.ticketName}`} className={styles.labelBg}>
        <span className={styles.rowNum}>{item.id}</span>
        {item.ticketName}
      </label>
      <br />
      <br />
      <label htmlFor={`rules-${item.ticketName}`} className={styles.label}>
        Rules
      </label>
      <br />
      <textarea
        name={`rules-${item.ticketName}`}
        className={styles.eventDescription}
        onChange={event => {
          setRules(event.target.value);
        }}
        value={rules}
        placeholder="Enter the details like rules etc. for the event."
        autoComplete="off"
      />
      <br />
    </div>
  );
};

export default RulesRow;
