import React from "react";
import { Link } from "react-router-dom";

import * as styles from "./CreateEvent.module.css";
import TicketRow from "./TicketRow";

class CreateEventAbout extends React.Component {
  state = {
    ticketTypeNos: 1,
    names: {},
    ticketNames: { 1: "Ticket 1" },
    ticketDescs: {},
    ticketPrices: {},
    ticketQuantity: {},
    regStartDates: {},
    regEndDates: {},
    isOpen: "1",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.ticketTypeNos > this.state.ticketTypeNos) {
      this.removeLastObj(prevState.ticketTypeNos);
    }

    console.log(this.state);
  }

  removeLastObj = (index, eventType) => {
    //   let ticketPrices = this.state.ticketPrices;
    //   let ticketQuantity = this.state.ticketQuantity;
    //   let gameName = this.state.names;
    //   let ticketDesc = this.state.ticketDescs;
    //   let startRegDate = this.state.regStartDates;
    //   let endRegDate = this.state.regEndDates;
    //   delete ticketPrices[index];
    //   delete ticketQuantity[index];
    //   delete ticketDesc[index];
    //   delete gameName[index];
    //   delete startRegDate[index];
    //   delete endRegDate[index];
  };

  addTicketRow = () => {
    let newTicketTypeNos = this.state.ticketTypeNos + 1;
    this.setState({
      ticketTypeNos: newTicketTypeNos,
      ticketNames: {
        ...this.state.ticketNames,
        [newTicketTypeNos]: `Ticket ${newTicketTypeNos}`,
      },
    });
  };

  removeTicketRow = () => {
    let ticketName = this.state.ticketNames;
    delete ticketName[this.state.ticketTypeNos];

    let newTicketTypeNos = this.state.ticketTypeNos - 1;
    this.setState({
      ticketTypeNos: newTicketTypeNos,
    });
  };

  renderContent = () => {
    return (
      <div>
        {Object.keys(this.state.ticketNames).map(key => {
          return (
            <div>
              <div
                key={key}
                className={styles.createEventAboutAccordion}
                onClick={() => {
                  if (this.state.isOpen === key) {
                    this.setState({ isOpen: 0 });
                  } else {
                    this.setState({ isOpen: key });
                  }
                }}>
                {this.state.ticketNames[key]}
              </div>

              {this.state.isOpen === key && (
                <div>
                  <TicketRow />
                </div>
              )}

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
        <div className={styles.componentHeader}>about</div>
        <form
          onSubmit={event => {
            event.preventDefault();
          }}>
          <br />
          <br />
          <div>{this.renderContent()}</div>
          <br />
          <br />
          <div className={styles.rowAddDeleteButton}>
            <button
              onClick={() => {
                this.addTicketRow();
              }}>
              Add Ticket
            </button>
            {this.state.ticketTypeNos > 1 && (
              <button
                onClick={() => {
                  this.removeTicketRow();
                }}>
                Delete Ticket
              </button>
            )}
          </div>
          <br />
          <div className={styles.createEventInfoSubmitButton}>
            <Link to="/createevent/rules-regulations">
              <input type="submit" value="Next" />
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default CreateEventAbout;
