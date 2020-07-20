import React from "react";
import { Link } from "react-router-dom";
import { Collapse } from "antd";

import * as styles from "./CreateEvent.module.css";
import TicketRow from "./TicketRow";

class CreateEventAbout extends React.Component {
  state = {
    eventType: ["game", "webinar", "workshop"],
    game: {
      gNames: {},
      gTicketNames: {},
      gTicketTypeNos: 1,
      gTicketDescs: {},
      gTicketPrices: {},
      gTicketQuantity: {},
      gRegStartDates: {},
      gRegEndDates: {},
    },
    webinar: {
      wbNames: {},
      wbTicketNames: {},
      wbTicketTypeNos: 1,
      wbTicketDescs: {},
      wbTicketPrices: {},
      wbTicketQuantity: {},
      wbRegStartDates: {},
      wbRegEndDates: {},
    },
    workshop: {
      wsNames: {},
      wsTicketNames: {},
      wsTicketTypeNos: 1,
      wsTicketDescs: {},
      wsTicketPrices: {},
      wsTicketQuantity: {},
      wsRegStartDates: {},
      wsRegEndDates: {},
    },
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.game.gTicketTypeNos > this.state.game.gTicketTypeNos) {
      this.removeLastObj(prevState.game.gTicketTypeNos, "game");
    } else if (
      prevState.webinar.wbTicketTypeNos > this.state.webinar.wbTicketTypeNos
    ) {
      this.removeLastObj(prevState.webinar.wbTicketTypeNos, "webinar");
    }
  }

  addTicketRow = typeOfEvent => {
    if (typeOfEvent === "game") {
      this.setState({
        game: {
          ...this.state.game,
          gTicketTypeNos: this.state.game.gTicketTypeNos + 1,
        },
      });
    } else if (typeOfEvent === "webinar") {
      this.setState({
        webinar: {
          ...this.state.webinar,
          wbTicketTypeNos: this.state.webinar.wbTicketTypeNos + 1,
        },
      });
    } else {
      this.setState({
        workshop: {
          ...this.state.workshop,
          wsTicketTypeNos: this.state.workshop.wsTicketTypeNos + 1,
        },
      });
    }
  };

  removeTicketRow = typeOfEvent => {
    if (typeOfEvent === "game") {
      this.setState({
        game: {
          ...this.state.game,
          gTicketTypeNos: this.state.game.gTicketTypeNos - 1,
        },
      });
    } else if (typeOfEvent === "webinar") {
      this.setState({
        webinar: {
          ...this.state.webinar,
          wbTicketTypeNos: this.state.webinar.wbTicketTypeNos - 1,
        },
      });
    } else {
      this.setState({
        workshop: {
          ...this.state.workshop,
          wsTicketTypeNos: this.state.workshop.wsTicketTypeNos - 1,
        },
      });
    }
  };

  //Removing extra objects from state incase
  //last row is deleted.
  removeLastObj = (index, eventType) => {
    if (eventType === "game") {
      let ticketName = this.state.game.gTicketNames;
      let ticketPrices = this.state.game.gTicketPrices;
      let ticketQuantity = this.state.game.gTicketQuantity;
      let gameName = this.state.game.gNames;
      let ticketDesc = this.state.game.gTicketDescs;
      let startRegDate = this.state.game.gRegStartDates;
      let endRegDate = this.state.game.gRegEndDates;

      delete ticketName[index];
      delete ticketPrices[index];
      delete ticketQuantity[index];
      delete ticketDesc[index];
      delete gameName[index];
      delete startRegDate[index];
      delete endRegDate[index];
    } else if (eventType === "webinar") {
      let ticketName = this.state.webinar.wbTicketNames;
      let ticketPrices = this.state.webinar.wbTicketPrices;
      let ticketQuantity = this.state.webinar.wbTicketQuantity;
      let gameName = this.state.webinar.wbNames;
      let ticketDesc = this.state.webinar.wbTicketDescs;
      let startRegDate = this.state.webinar.wbRegStartDates;
      let endRegDate = this.state.webinar.wbRegEndDates;

      delete ticketName[index];
      delete ticketPrices[index];
      delete ticketQuantity[index];
      delete ticketDesc[index];
      delete gameName[index];
      delete startRegDate[index];
      delete endRegDate[index];
    } else {
      let ticketName = this.state.workshop.wsTicketNames;
      let ticketPrices = this.state.workshop.wsTicketPrices;
      let ticketQuantity = this.state.workshop.wsTicketQuantity;
      let gameName = this.state.workshop.wsNames;
      let ticketDesc = this.state.workshop.wsTicketDescs;
      let startRegDate = this.state.workshop.wsRegStartDates;
      let endRegDate = this.state.workshop.wsRegEndDates;

      delete ticketName[index];
      delete ticketPrices[index];
      delete ticketQuantity[index];
      delete ticketDesc[index];
      delete gameName[index];
      delete startRegDate[index];
      delete endRegDate[index];
    }
  };

  //Mapping and storing game ticket data
  //to state of main about component
  gameMapPropsToState = (
    ticketRowId,
    ticketName,
    ticketType,
    ticketQuantity,
    ticketPrice,
    gameName,
    ticketDesc,
    startRegDate,
    endRegDate
  ) => {
    this.setState({
      game: {
        ...this.state.game,
        gTicketNames: {
          ...this.state.game.gTicketNames,
          [ticketRowId]: ticketName,
        },
        gTicketPrices: {
          ...this.state.game.gTicketPrices,
          [ticketRowId]: ticketType === "Paid" ? ticketPrice : "0",
        },
        gTicketQuantity: {
          ...this.state.game.gTicketQuantity,
          [ticketRowId]: ticketQuantity,
        },
        gNames: {
          ...this.state.game.gNames,
          [ticketRowId]: gameName,
        },
        gTicketDescs: {
          ...this.state.game.gTicketDescs,
          [ticketRowId]: ticketDesc,
        },
        gRegStartDates: {
          ...this.state.game.gRegStartDates,
          [ticketRowId]: startRegDate,
        },
        gRegEndDates: {
          ...this.state.game.gRegEndDates,
          [ticketRowId]: endRegDate,
        },
      },
    });
    console.log(this.state);
  };

  //Mapping and storing webinar ticket data
  //to state of main about component
  webinarMapPropsToState = (
    ticketRowId,
    ticketName,
    ticketType,
    ticketQuantity,
    ticketPrice,
    gameName,
    ticketDesc,
    startRegDate,
    endRegDate
  ) => {
    this.setState({
      webinar: {
        ...this.state.webinar,
        wbTicketNames: {
          ...this.state.webinar.wbTicketNames,
          [ticketRowId]: ticketName,
        },
        wbTicketPrices: {
          ...this.state.webinar.wbTicketPrices,
          [ticketRowId]: ticketType === "Paid" ? ticketPrice : "0",
        },
        wbTicketQuantity: {
          ...this.state.webinar.wbTicketQuantity,
          [ticketRowId]: ticketQuantity,
        },
        wbNames: {
          ...this.state.webinar.wbNames,
          [ticketRowId]: gameName,
        },
        wbTicketDescs: {
          ...this.state.webinar.wbTicketDescs,
          [ticketRowId]: ticketDesc,
        },
        wbRegStartDates: {
          ...this.state.webinar.wbRegStartDates,
          [ticketRowId]: startRegDate,
        },
        wbRegEndDates: {
          ...this.state.webinar.wbRegEndDates,
          [ticketRowId]: endRegDate,
        },
      },
    });
    console.log(this.state);
  };

  workshopMapPropsToState = (
    ticketRowId,
    ticketName,
    ticketType,
    ticketQuantity,
    ticketPrice,
    gameName,
    ticketDesc,
    startRegDate,
    endRegDate
  ) => {
    this.setState({
      workshop: {
        ...this.state.workshop,
        wsTicketNames: {
          ...this.state.workshop.wsTicketNames,
          [ticketRowId]: ticketName,
        },
        wsTicketPrices: {
          ...this.state.workshop.wsTicketPrices,
          [ticketRowId]: ticketType === "Paid" ? ticketPrice : "0",
        },
        wsTicketQuantity: {
          ...this.state.workshop.wsTicketQuantity,
          [ticketRowId]: ticketQuantity,
        },
        wsNames: {
          ...this.state.workshop.wsNames,
          [ticketRowId]: gameName,
        },
        wsTicketDescs: {
          ...this.state.workshop.wsTicketDescs,
          [ticketRowId]: ticketDesc,
        },
        wsRegStartDates: {
          ...this.state.workshop.wsRegStartDates,
          [ticketRowId]: startRegDate,
        },
        wsRegEndDates: {
          ...this.state.workshop.wsRegEndDates,
          [ticketRowId]: endRegDate,
        },
      },
    });
    console.log(this.state);
  };

  //Function to display content if
  //the chosen event type is "game"
  renderGameContent = () => {
    const gRows = [];
    const gTicketTypeNos = this.state.game.gTicketTypeNos;

    //a loop to determine the number of rows for Tickets Types
    for (let i = 1; i <= gTicketTypeNos; i++) {
      gRows.push(
        <TicketRow
          key={i}
          idd={i}
          typeOfEvent="Game"
          mapStateToProps={this.gameMapPropsToState}
        />
      );
    }

    return <div>{gRows}</div>;
  };

  //Function to display content if
  //the chosen event type is "webinar"
  renderWebinarContent = () => {
    const wbRows = [];
    const wbTicketTypeNos = this.state.webinar.wbTicketTypeNos;

    //a loop to determine the number of rows for Tickets Types
    for (let i = 1; i <= wbTicketTypeNos; i++) {
      wbRows.push(
        <TicketRow
          key={i}
          idd={i}
          typeOfEvent="Webinar"
          mapStateToProps={this.webinarMapPropsToState}
        />
      );
    }

    return <div>{wbRows}</div>;
  };

  //Function to display content if
  //the chosen event type is "workshop"
  renderWorkshopContent = () => {
    const wsRows = [];
    const wsTicketTypeNos = this.state.workshop.wsTicketTypeNos;

    //a loop to determine the number of rows for Tickets Types
    for (let i = 1; i <= wsTicketTypeNos; i++) {
      wsRows.push(
        <TicketRow
          key={i}
          idd={i}
          typeOfEvent="Workshop"
          mapStateToProps={this.workshopMapPropsToState}
        />
      );
    }

    return <div>{wsRows}</div>;
  };

  renderContent = () => {
    return (
      <div>
        {this.state.eventType.map(item => {
          if (item === "game") {
            return (
              <div>
                <div className={styles.labelBg}>game events</div> <br />
                <Collapse accordion>{this.renderGameContent()}</Collapse>
                <div className={styles.rowAddDeleteButton}>
                  <button
                    onClick={() => {
                      this.addTicketRow("game");
                    }}
                  >
                    +
                  </button>
                  {this.state.game.gTicketTypeNos > 1 && (
                    <button
                      onClick={() => {
                        this.removeTicketRow("game");
                      }}
                    >
                      -
                    </button>
                  )}
                </div>
              </div>
            );
          } else if (item === "webinar") {
            return (
              <div>
                <br />
                <div className={styles.labelBg}>Webinar events</div> <br />
                {this.renderWebinarContent()}
                <div className={styles.rowAddDeleteButton}>
                  <button
                    onClick={() => {
                      this.addTicketRow("webinar");
                    }}
                  >
                    +
                  </button>
                  {this.state.webinar.wbTicketTypeNos > 1 && (
                    <button
                      onClick={() => {
                        this.removeTicketRow("webinar");
                      }}
                    >
                      -
                    </button>
                  )}
                </div>
              </div>
            );
          } else {
            return (
              <div>
                <br />
                <div>
                  <div className={styles.labelBg}>workshop events</div> <br />
                  {this.renderWorkshopContent()}
                  <div className={styles.rowAddDeleteButton}>
                    <button
                      onClick={() => {
                        this.addTicketRow("workshop");
                      }}
                    >
                      +
                    </button>
                    {this.state.workshop.wsTicketTypeNos > 1 && (
                      <button
                        onClick={() => {
                          this.removeTicketRow("workshop");
                        }}
                      >
                        -
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  };

  render() {
    return (
      <div>
        <div className={styles.componentHeader}>about</div>
        <div className={styles.innerComponent}>
          <form
            onSubmit={event => {
              event.preventDefault();
            }}
          >
            {this.renderContent()}
            <div className={styles.createEventInfoSubmitButton}>
              <Link to="/createevent/rules-regulations">
                <input type="submit" value="Next" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateEventAbout;
