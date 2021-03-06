import React, { Component } from "react";
import styles from "./AboutEvent.module.css";
import { CalendarFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Modal, Carousel } from "antd";

import ScrollMenu from "react-horizontal-scrolling-menu";
import Landing from "./Landing"; import ScrollContainer from 'react-indiana-drag-scroll'
import { createFromIconfontCN } from '@ant-design/icons';
import './hamburger.less'
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

class AboutEvent extends Component {
  constructor(props) {
    super(props);
    this.state = { m: false, sv: false, va: false };
  }
  c = () => {
    if (this.state.m) {
      this.setState({ m: false });
    } else {
      this.setState({ m: true });
    }
  };
  render() {
    return (
      <>
        <Landing />
        <div className={styles.main}>
          <Modal
            visible={this.state.m}
            style={{
              top: "40",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            bodyStyle={{ padding: "0" }}
            footer={null}
            width={500}
            height={500}
            onCancel={this.c}>
            <div className={styles.contact}>
              <button>fubdifb</button>
            </div>
          </Modal>
          <div className={styles.socialmedia} onClick={() => {
            if (this.state.sv) { this.setState({ sv: false }) }
            else { this.setState({ sv: true }) }
          }} >
            <IconFont type="icon-twitter" />
          </div>
          <Link to="/payment">
            <button className={styles.booknowf}>Book Now</button>
          </Link>
          <h1 className={styles.eventname}>
            Sesame Street Live! Make Your Magic
          </h1>
          <div className={styles.detailbox}>
            <div className={styles.rowp1}>
              <div className={styles.logoc}>
                <div className={styles.elogo}></div>
              </div>
              <h1 className={styles.eventnametop}>Vira Mount Fest</h1>
              <h1 className={styles.eventnametop_}>bla bla</h1>
              <div className={styles.buttonsofc}>
                <button className={styles.booknowb} onClick={this.c}>
                  Book Now
                </button>
                {this.state.sv ? <div className="socialham">
                  <div className={styles.twitter}></div>
                  <div className={styles.twitter}></div>
                  <div className={styles.twitter}></div>
                  <div className={styles.twitter}></div>
                </div> : null}

                <button className={styles.omodal} >
                  Contact Organizer
                </button>
              </div>
            </div>
            <div className={styles.rowp2}>
              <div className={styles.row1}>
                <div className={styles.icons}>
                  <CalendarFilled style={{ fontSize: "30px" }} />
                </div>
                <h1 className={styles.date}>Event start date </h1>
                <h1 className={styles.time}>7:00 pm</h1>

              </div>
              <div className={styles.row2}>
                <div className={styles.icons}>
                  <CalendarFilled style={{ fontSize: "30px" }} />
                </div>
                <h1 className={styles.date}>event end date</h1>
                <h1 className={styles.time}>New York</h1>
              </div>
              <div className={styles.row2}>
                <div className={styles.icons}>
                  <CalendarFilled style={{ fontSize: "30px" }} />
                </div>
                <h1 className={styles.date}>Location </h1>
                <h1 className={styles.time}>New York</h1>
              </div>
              <div className={styles.row2}>
                <div className={styles.icons}>
                  <CalendarFilled style={{ fontSize: "30px" }} />
                </div>
                <h1 className={styles.date}>Mode</h1>
                <h1 className={styles.time}>New York</h1>
              </div>
              <div className={styles.row2}>
                <div className={styles.icons}>
                  <CalendarFilled style={{ fontSize: "30px" }} />
                </div>
                <h1 className={styles.date}>Price </h1>
                <h1 className={styles.time}>New York</h1>
              </div>
              <div className={styles.row3}>
                <div className={styles.icons}>
                  <CalendarFilled style={{ fontSize: "30px" }} />
                </div>
                <h1 className={styles.date}>Slot left </h1>
                <h1 className={styles.date}>$45</h1>
              </div>
            </div>
          </div>




          <div className={styles.wrapper}>


            <Carousel draggable={true}>
              <div>
                <div
                  className={styles.bcard}
                ></div>
                <div
                  className={styles.bcard}
                ></div>
              </div>
              <div>
                <div
                  className={styles.bcard}
                ></div>
                <div
                  className={styles.bcard}
                ></div>
              </div>
            </Carousel>
          </div>

          <div className={styles.content}>
            <div className={styles.orow2}>
              <h1 className={styles.eventname_}>VIBRA MAHOU FEST</h1>
              <p className={styles.desc}>
                Festival lineup: The Strokes, the Chainsmokers, Childish
                Gambino, Tame Impala, Twenty One Pilots, J Balvin, Ariana
                Grande, Flume A wonderful gathering of music, dance, <br />
                <br />
                comedy and craft booths, Lollapalooza is another multi-genre
                delight which also provides a platform for political and
                non-profit artists and groups. The festival is forever creating
                historical moments in many a musicians career firmly cementing
                it in the global hall of fame for festivals.
              </p>
            </div>
          </div>
          <div className={styles.parentDiv}>
            <div className={styles.imggalleryh1}>
              {/* <div className={styles.leftBox}></div> */}
              <Carousel dots={false} draggable={true} easing autoplay>
                <div>
                  <div className={styles.rowofg}>
                    <div className={styles.dcardsg} style={{ width: "26%" }}>
                      <h1 className={styles.titleofg}> Image Gallery</h1>
                      <h1 className={styles.titleofg}> Events Images</h1>
                    </div>
                    <div
                      className={styles.dcardsg}
                      style={{ width: "30%" }}></div>
                    <div className={styles.dcardsg}></div>
                    <div className={styles.dcardsg}></div>
                    <div
                      className={styles.dcardsg}
                      style={{ width: "28%" }}></div>
                    <div className={styles.dcardsg}></div>

                    <div
                      className={styles.dcardsg}
                      style={{ width: "28%" }}></div>
                    <div className={styles.dcardsg}></div>
                  </div>
                </div>
                <div>
                  <div className={styles.rowofg}>
                    <div
                      className={styles.dcardsg}
                      style={{ width: "26%" }}></div>
                    <div
                      className={styles.dcardsg}
                      style={{ width: "30%" }}></div>
                    <div className={styles.dcardsg}></div>
                    <div className={styles.dcardsg}></div>
                    <div
                      className={styles.dcardsg}
                      style={{ width: "28%" }}></div>
                    <div className={styles.dcardsg}></div>

                    <div
                      className={styles.dcardsg}
                      style={{ width: "28%" }}></div>
                    <div className={styles.dcardsg}></div>
                  </div>
                </div>
                <div>
                  <div className={styles.rowofg}>
                    <div
                      className={styles.dcardsg}
                      style={{ width: "26%" }}></div>
                    <div
                      className={styles.dcardsg}
                      style={{ width: "30%" }}></div>
                    <div className={styles.dcardsg}></div>
                    <div className={styles.dcardsg}></div>
                    <div
                      className={styles.dcardsg}
                      style={{ width: "28%" }}></div>
                    <div className={styles.dcardsg}></div>

                    <div
                      className={styles.dcardsg}
                      style={{ width: "28%" }}></div>
                    <div className={styles.dcardsg}></div>
                  </div>
                </div>
                <div>
                  <div className={styles.rowofg}>
                    <div
                      className={styles.dcardsg}
                      style={{ width: "26%" }}></div>
                    <div
                      className={styles.dcardsg}
                      style={{ width: "30%" }}></div>
                    <div className={styles.dcardsg}></div>
                    <div className={styles.dcardsg}></div>
                    <div
                      className={styles.dcardsg}
                      style={{ width: "28%" }}></div>
                    <div className={styles.dcardsg}></div>

                    <div
                      className={styles.dcardsg}
                      style={{ width: "28%" }}></div>
                    <div className={styles.dcardsg}></div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutEvent;
