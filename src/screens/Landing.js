import React, { Component } from 'react';
import SideHeader from '../components/SideHeader'
import Home from './Home'
import { Layout, Menu, Modal } from 'antd';
import styles from './Layout.module.css'

import TopHeader from '../components/TopHeader';
import Login from "../components/Login";
import Register from "../components/Register";
import { Form, Input, Button, Checkbox, Drawer } from 'antd';
import { UserOutlined, LockOutlined, MenuOutlined } from '@ant-design/icons';
import CFooter from '../components/footer'
import { app } from '../firebase'
const { Header, Footer, Sider, Content } = Layout;

export default class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = { login: false, collapsed: true, visible: false, register: false }
  }
  login = () => {
    if (this.state.login) {
      this.setState({ login: false })
    } else {
      this.setState({ login: true })
    }
  }
  auth = () => {


  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <Layout>
        <Header style={{ display: 'flex', justifyContent: 'flex-start', position: 'fixed', zIndex: 1001, width: '100%', backgroundColor: '#121212' }}>
          <div className={styles.logo}  ></div>
          <TopHeader />
          <button className={styles.drawer} onClick={() => { if (this.state.visible) { this.setState({ visible: false }) } else { this.setState({ visible: true }) }; }}><MenuOutlined /></button>
          <button className={styles.createevent} onClick={this.login}>
            Create An Event
</button>
          <button className={styles.loginregbtn} onClick={this.login}>
            Login/Register
</button>



        </Header>
        <Layout>

          <div>
            <Sider collapsedWidth={60} width={150} trigger={null} collapsible collapsed={this.state.collapsed} style={{
              backgroundColor: '#121212',
              height: '100vh',
              position: 'fixed',
              zIndex: 1000,
              display: 'flex',
              paddingTop: '5%',
              overflow: 'hidden',
              justifyContent: 'center',
              bottom: 0,

            }}>
              <Menu theme="dark" mode="inline" style={{ backgroundColor: '#121212', }}>
                <Menu.Item key="1" icon={<UserOutlined />} onClick={this.toggle} style={{ backgroundColor: '#121212' }} >
                  nav 1
            </Menu.Item></Menu>
              <SideHeader />
            </Sider></div>
          <Content >
            <Home />
            <Drawer
              title="Basic Drawer"
              placement="right"
              closable={false}

              visible={this.state.visible}
            >

              <div className={styles.b1m} onClick={() => this.setState({ login: true, visible: false })}>
                Login/Register
             </div>
              <div className={styles.cevent}>
                Create Event
             </div>
            </Drawer>
            <Login visible={this.state.login} />

            <CFooter />
          </Content>

        </Layout>

      </Layout>
    );
  }
}
