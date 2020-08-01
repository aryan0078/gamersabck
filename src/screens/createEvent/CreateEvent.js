import React from "react";
import { BrowserRouter, Route } from "react-router-dom";


import * as styles from "./CreateEvent.module.css";
import CreateEventNav from "./CreateEventNav";
import CreateEventGeneral from "./CreateEventGeneral";
import CreateEventAbout from "./CreateEventAbout";
import CreateEventRules from "./CreateEventRules";
import CreateEventPrizes from "./CreateEventPrizes";
import CreateEventOrganiserDetails from "./CreateEventOrganiserDetails";
import CreateEventBankDetails from "./CreateEventBankDetails";
import CreateEventPlayerInfo from "./CreateEventPlayerInfo";
import CreateEventAdditional from "./CreateEventAdditional";
import Landing from "../Landing";

const CreateEvent = () => {
  return (
    <BrowserRouter>
      <Landing />
      <div className={styles.createEventWrapper}>

        <div className={styles.createEventBanner}>Let's Create Your Event</div>
        <div className={styles.createEventInnerWrapper}>
          {/* NavBar placed on the left side of the page. */}


          <CreateEventNav />

          {/* Section to display all the content for creating the event */}
          <div className={styles.createEventInnerComponents}>
            <Route path="/createevent/general" component={CreateEventGeneral} />
            <Route path="/createevent/about" component={CreateEventAbout} />
            <Route
              path="/createevent/rules-regulations"
              component={CreateEventRules}
            />
            <Route
              path="/createevent/additional-features"
              component={CreateEventAdditional}
            />
            <Route
              path="/createevent/organiser-details"
              component={CreateEventOrganiserDetails}
            />
            <Route
              path="/createevent/bank-details"
              component={CreateEventBankDetails}
            />
            <Route path="/createevent/prizes" component={CreateEventPrizes} />
            <Route
              path="/createevent/player-details"
              component={CreateEventPlayerInfo}
            />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default CreateEvent;
