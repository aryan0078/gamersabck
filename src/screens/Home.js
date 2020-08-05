import React, { Component } from "react";
import styles from "./Home.module.css";
import { Carousel } from "antd";
import { Menu, Button } from "antd";
import Drop from "../components/dropdown";
import { Col, Row } from "antd";
import { Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  DownOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Card from "../components/Card";
import { Rate } from "antd";
import { DatePicker } from "antd";
import Typewriter from "typewriter-effect";
import Landing from "./Landing";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sellbutton: 0,
      where: "",
      selldata:
        "After the event was created you can add tickets. An event can have multiple ticket types. You can add the amount of tickets available and the date your audience can start buying them and a date when the sale ends.",
    };
  }

  datac = e => {
    if (e.target.value === "0") {
      this.setState({
        selldata:
          "rurwgbuewbgouqebgouqebgloqeboigbqigqwg igbqoewgubqwuobgoqeubgoquwbgouqwbgoqwubgoqwubgouwqboguqbwogubqw gwqghoqwughouqw gqwuog uohgqwuo gwuqg h qoghwuog hqwuog hwuogh wqough wuoghwo ughwuoghwoughuwghwoughwuoghwoghow",
      });
    }
    if (e.target.value === "1") {
      this.setState({
        selldata:
          "srhrsehwehwehwehwrahvravadhv   aerhvarhvarhvarch   adrcharscharhcaerch hrech ehr erherhehresrhv e ends.",
      });
    }
    if (e.target.value === "2") {
      this.setState({
        selldata:
          "After the event was created you can add tickets. An event can have multiple ticket types. You can add the amount of tickets available and the date your audience can start buying them and a date when the sale ends.",
      });
    }
  };

  recieveProps = data => {
    this.setState({
      where: data,
    });
  };

  render() {
    return (
      <>
        <Landing />

        <div className={styles.main}>
          <span className={styles.emptyspace}></span>
          <p className={styles.title}>ALL FUN START HERE</p>
          <div className={styles.btitleholder}>
            <h1 className={styles.btitle}>Discover</h1>
            <div className={styles.animationtext}>
              <Typewriter
                options={{
                  strings: [" Events", " Games", " Pubg"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <h1 className={styles.btitle}>around you.</h1>
          <div className={styles.searchbox}>
            <div className={styles.whatholder}>
              <h3 className={styles.searchind}>WHAT</h3>
              <Drop
                sendProps={this.recieveProps}
                title={"Select Category"}
                options={[
                  { id: 1, option: "foo" },
                  { id: 2, option: "bar" },
                  { id: 3, option: "bar" },
                  { id: 4, option: "bar" },
                ]}
              />
            </div>
            <div className={styles.whatholder}>
              <h3 className={styles.searchind}>WHEN</h3>
              <DatePicker className={styles.date}></DatePicker>
            </div>
            <div className={styles.whatholder}>
              <h3 className={styles.searchind}>WHERE</h3>
              <Drop
                sendProps={this.recieveProps}
                title={"Select Category"}
                options={[
                  { id: 1, option: "foo" },
                  { id: 2, option: "bar" },
                  { id: 3, option: "bar" },
                  { id: 4, option: "bar" },
                ]}
              />
            </div>

            <button className={styles.searchs}>Search</button>
          </div>
          <div className={styles.upcomingholder}>
            <h3 style={{ color: "white", alignSelf: "flex-start" }}>
              DISCOVER THE FUN!
            </h3>
            <div className={styles.titleholder}>
              <h1 className={styles.upcoming}>
                Upcoming <span style={{ color: "#CA0C2A" }}> Events</span>
              </h1>
              <Link to="/allevents">
                <button className={styles.viewallbtn}>
                  View All Events <ArrowRightOutlined />
                </button>
              </Link>
            </div>
            <div className={styles.cardholder}>
              <div className={styles.row1}>
                <Card size={"60%"} />

                <Card size={"40%"} />
              </div>

              <div className={styles.row1}>
                <Card />

                <Card />

                <Card />
              </div>
              <div className={styles.row1}>
                <Card />

                <Card size={"58em"} />
              </div>
            </div>
          </div>
          <div className={styles.entertainmentholder}>
            <h3 className={styles.entertainmenl1}>ALL THE FUN STARTS HERE</h3>
            <h1 className={styles.entertainmenl2}>
              Entertainment <span style={{ color: "#CA0C2A" }}> Guides</span>
            </h1>
            <div className={styles.row1}>
              <Card />

              <Card />

              <Card />
            </div>
            <div className={styles.row1}>
              <Card />

              <Card />

              <Card />
            </div>
          </div>

          <div className={styles.blogsectionholder}>
            <div className={styles.lableholder}>
              <h2 className={styles.sellticketholderl}>LATEST NEWS</h2>
              <h1 className={styles.sellticketholder2}>
                From the <span style={{ color: "#CA0C2A" }}> Blog</span>
              </h1>
            </div>
            <div className={styles.cardhoderblog}>
              <div className={styles.card1blog}>
                <button className={styles.blogbtn1}>ROYALTICKETS</button>
                <div className={styles.textcontentblog}>
                  <h1 className={styles.blogcardt1}>
                    The Greatest Super Bowl Games of All Time
                  </h1>
                  <p className={styles.blogcardt2}>
                    Eam tum adesse, cum dolor omnis absit; Et quidem iure
                    fortasse, sed tamen non gravissimum est testimonium
                    multitudinis.
                  </p>
                </div>
                <button className={styles.readmorebtn}>READ MORE</button>
              </div>
              <div className={styles.card2blog}></div>
            </div>
          </div>
          <div className={styles.testnomialsholder}>
            <div className={styles.lableholder}>
              <h2 className={styles.sellticketholderl}>TESTNOMIALS</h2>
              <h1 className={styles.upcoming}>
                Hear From Our{" "}
                <span style={{ color: "#CA0C2A" }}> Organizers</span>
              </h1>
            </div>
            <div className={styles.alltestcardholder}>
              <Carousel dots={false} draggable={true}>
                <div>
                  <div className={styles.row1test}>
                    <div className={styles.testnomialcards}>
                      <div className={styles.imgandname}>
                        <div className={styles.userimg}></div>
                        <div className={styles.nameofu}>
                          <h1 style={{ fontSize: 'small' }}>Aryan Singh</h1>
                        </div>
                      </div>
                      <div className={styles.allcontent}>
                        dfbtwbtwhtrhwthwehwehewtherherhwehewrhehderhxcewr
                      </div>
                    </div>
                    <div className={styles.testnomialcards}>
                      <div className={styles.imgandname}>
                        <div className={styles.userimg}></div>
                        <div className={styles.nameofu}>
                          <h1 style={{ fontSize: 'small' }}>Aryan Singh</h1>
                        </div>
                      </div>
                      <div className={styles.allcontent}>
                        dfbtwbtwhtrhwthwehwehewtherherhwehewrhehderhxcewr
                      </div>
                    </div>
                    <div className={styles.testnomialcards}>
                      <div className={styles.imgandname}>
                        <div className={styles.userimg}></div>
                        <div className={styles.nameofu}>
                          <h1 style={{ fontSize: 'small' }}>Aryan Singh</h1>
                        </div>
                      </div>
                      <div className={styles.allcontent}>
                        dfbtwbtwhtrhwthwehwehewtherherhwehewrhehderhxcewr
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className={styles.row1test}>
                    <div className={styles.testnomialcards}>
                      <div className={styles.imgandname}>
                        <div className={styles.userimg}></div>
                        <div className={styles.nameofu}>
                          <h1 style={{ fontSize: 'small' }}>Aryan Singh</h1>
                        </div>
                      </div>
                      <div className={styles.allcontent}>
                        dfbtwbtwhtrhwthwehwehewtherherhwehewrhehderhxcewr
                      </div>
                    </div>
                    <div className={styles.testnomialcards}>
                      <div className={styles.imgandname}>
                        <div className={styles.userimg}></div>
                        <div className={styles.nameofu}>
                          <h1 style={{ fontSize: 'small' }}>Aryan Singh</h1>
                        </div>
                      </div>
                      <div className={styles.allcontent}>
                        dfbtwbtwhtrhwthwehwehewtherherhwehewrhehderhxcewr
                      </div>
                    </div>
                    <div className={styles.testnomialcards}>
                      <div className={styles.imgandname}>
                        <div className={styles.userimg}></div>
                        <div className={styles.nameofu}>
                          <h1 style={{ fontSize: 'small' }}>Aryan Singh</h1>
                        </div>
                      </div>
                      <div className={styles.allcontent}>
                        dfbtwbtwhtrhwthwehwehewtherherhwehewrhehderhxcewr
                      </div>
                    </div>
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
