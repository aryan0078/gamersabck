import React, { Component } from "react";
import styles from "./CreateEvent.module.css";

import { Tabs, Radio } from "antd";

const { TabPane } = Tabs;
class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "top",
    };
  }

  handleModeChange = e => {
    const mode = e.target.value;
    this.setState({ mode });
  };
  render() {
    const { mode } = this.state;
    return (
      <div className={styles.main}>
        <div>
          <Tabs tabPosition={"left"}>
            <TabPane tab="General" key="1">
              <div className={styles.tabsc}>
                <h1 className={styles.title}>General</h1>
              </div>
            </TabPane>
            <TabPane tab="About" key="2">
              <div className={styles.tabsc}>
                <h1 className={styles.title}>About</h1>
              </div>
            </TabPane>
            <TabPane tab="Rules & Regulations" key="3">
              <div className={styles.tabsc}>
                <h1 className={styles.title}>Rules & Regulations</h1>
              </div>
            </TabPane>
            <TabPane tab="Player Mode" key="4">
              <div className={styles.tabsc}>
                <h1 className={styles.title}>Player Mode</h1>
              </div>
            </TabPane>
            <TabPane tab="Entry Fee & Prize" key="5">
              <div className={styles.tabsc}>
                <h1 className={styles.title}>Entry Fee & Prize</h1>
              </div>
            </TabPane>
            <TabPane tab="Schedule / Structure" key="6">
              <div className={styles.tabsc}>
                <h1 className={styles.title}>Schedule / Structure</h1>
              </div>
            </TabPane>
            <TabPane tab="Additional Features" key="7">
              <div className={styles.tabsc}>
                <h1 className={styles.title}>Additional Features</h1>
              </div>
            </TabPane>
            <TabPane tab="Select Menu" key="8">
              <div className={styles.tabsc}>
                <h1 className={styles.title}>Select Menu</h1>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default CreateEvent;
