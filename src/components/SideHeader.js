import React, { Component } from "react";

import styles from "./SideHeader.module.css";
import { Menu } from "antd";

import { VideoCameraOutlined, UploadOutlined } from "@ant-design/icons";

export default class SideHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true };
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ backgroundColor: "#121212 " }}
      >
        <Menu.Item
          key="1"
          icon={<VideoCameraOutlined />}
          style={{ backgroundColor: "#121212" }}
        >
          nav 2
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<UploadOutlined />}
          style={{ backgroundColor: "#121212" }}
        >
          nav 3
        </Menu.Item>
      </Menu>
    );
  }
}
