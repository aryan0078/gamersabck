import React, { useState, useEffect } from "react";
import { DatePicker } from "antd";

import * as styles from "./CreateEvent.module.css";

const TicketRow = props => {
  const [ticketType, setTicketType] = useState("Paid");
  const [ticketName, setTicketName] = useState(null);
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [ticketPrice, setTicketPrice] = useState(1);
  const [gameName, setGameName] = useState("");
  const [ticketDesc, setTicketDesc] = useState("");
  const [startRegDate, setStartRegDate] = useState("");
  const [endRegDate, setEndRegDate] = useState("");
  const [open, setOpen] = useState(false);

  const ticketTypes = ["Paid", "Free"];

  useEffect(
    () => {
      if (ticketName !== null) {
        props.mapStateToProps(
          props.idd,
          ticketName,
          ticketType,
          ticketQuantity,
          ticketPrice,
          gameName,
          ticketDesc,
          startRegDate,
          endRegDate
        );
      }
    },

    //eslint-disable-next-line
    [
      ticketName,
      ticketType,
      ticketQuantity,
      ticketPrice,
      gameName,
      ticketDesc,
      startRegDate,
      endRegDate,
    ]
  );

  const handleClick = item => {
    setTicketType(item);
    setOpen(false);
  };

  const dropDown = options => {
    return (
      <div className={styles.dropDownMenu}>
        {options.map(item => (
          <div
            className={styles.dropDownMenuItem}
            onClick={() => handleClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className={styles.TicketRowWrapper}>
        <div>
          <label htmlFor="ticketType" className={styles.label}>
            Ticket Type
          </label>
          <br />
          <div className={styles.dropDownSelect} onClick={() => setOpen(!open)}>
            {ticketType}
          </div>
          {open && dropDown(ticketTypes)}
        </div>
        <div>
          <label htmlFor="tname" className={styles.label}>
            Ticket Name
          </label>
          <br />
          <input
            name="tname"
            type="text"
            onChange={event => {
              setTicketName(event.target.value);
            }}
            value={ticketName || ""}
            placeholder="Ticket Name"
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="tquant" className={styles.label}>
            Order
          </label>
          <br />
          <input
            name="tquant"
            type="number"
            onChange={event => {
              setTicketQuantity(event.target.value);
            }}
            value={ticketQuantity}
            placeholder="Ticket Quantity"
            autoComplete="off"
            min="1"
          />
        </div>
        <div className={ticketType !== "Paid" && styles.disabled}>
          <label htmlFor="tquant" className={styles.label}>
            Price
          </label>
          <br />
          <div>
            <input
              name="tfee"
              type="number"
              onChange={event => {
                setTicketPrice(event.target.value);
              }}
              value={ticketPrice}
              placeholder="Ticket Price"
              autoComplete="off"
              min="1"
            />
          </div>
        </div>
      </div>

      <label htmlFor="gname" className={styles.label}>
        {props.typeOfEvent} Name
      </label>
      <br />
      <input
        name="gname"
        type="text"
        onChange={event => {
          setGameName(event.target.value);
        }}
        value={gameName}
        placeholder={`${props.typeOfEvent} Name`}
        autoComplete="off"
      />
      <br />

      <div className={styles.eventDates}>
        <div className={styles.startDate}>
          <label htmlFor="Start-Reg-Date" className={styles.label}>
            Start Date
          </label>
          <br />
          <DatePicker className={styles.datePicker} />
        </div>

        <div className={styles.endDate}>
          <label htmlFor="end-reg-date" className={styles.label}>
            end Date
          </label>
          <br />
          <DatePicker className={styles.datePicker} />
        </div>
      </div>
      <br />
      <label htmlFor="tDesc" className={styles.label}>
        Ticket Description
      </label>
      <br />
      <input
        name="tDesc"
        type="text"
        onChange={event => {
          setTicketDesc(event.target.value);
        }}
        value={ticketDesc}
        placeholder="Ticket Desc, please end with a full stop."
        autoComplete="off"
      />
      <br />
      <hr />
      <br />
    </div>
  );
};

export default TicketRow;
