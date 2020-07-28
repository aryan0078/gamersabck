import React, { Component } from 'react';
import SideHeader from '../components/SideHeader'
import Home from './Home'
import { Layout, Modal } from 'antd';
import styles from './Layout.module.css'
import { Avatar } from 'antd';

import TopHeader from '../components/TopHeader';
import Login from "../components/Login";
import Register from "../components/Register";
import { Menu, Dropdown, Drawer } from 'antd';
import { UserOutlined, DownOutlined, MenuOutlined } from '@ant-design/icons';
import CFooter from '../components/footer'
import { app } from '../firebase'
import { Redirect, Link } from 'react-router-dom';
const { Header, Footer, Sider, Content } = Layout;

export default class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = { login: false, collapsed: true, visible: false, register: false }
  }

  login = () => {

    this.setState({ login: true })


  }

  menu = (
    <Menu>

      <Menu.Item key="0">
        <Link to='/dashboard'>    <a className={styles.dropitem}>
          Dashboard
        </a></Link>
      </Menu.Item>
      <Menu.Item key="0">
        <Link to='/dashboard'>    <a className={styles.dropitem}>
          Help
        </a></Link>
      </Menu.Item>
      <Menu.Item key="0">
        <a className={styles.dropitem} onClick={() => {
          localStorage.removeItem('fullname')
          localStorage.removeItem('username')
          localStorage.removeItem('email')
          localStorage.removeItem('gender')
          localStorage.removeItem('dob')
          window.location.reload()
        }}>
          Log out
        </a>
      </Menu.Item>
      <Menu.Item key="1">
        <Link to='/'>    <a className={styles.dropitem}>
          Bookmark events
        </a></Link>
      </Menu.Item>


    </Menu>
  );
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {

    return (
      <Layout>
        <Header style={{ display: 'flex', justifyContent: 'flex-start', position: 'fixed', zIndex: 1001, width: '100%', backgroundColor: '#121212' }}>
          <div className={styles.top}>
            <div className={styles.brandingstuff}>

              <div className={styles.logo}  ></div>
              <div className={styles.labels}>
                <label className={styles.l1}>Gamersback</label>
                <label className={styles.l2}>Unleash the gamer in you</label></div>
            </div>
            <div className={styles.log}>
              <button className={styles.drawer} onClick={() => { if (this.state.visible) { this.setState({ visible: false }) } else { this.setState({ visible: true }) }; }}><MenuOutlined /></button>
              <button className={styles.createevent} onClick={this.login}>
                <Link to='/createevent'>  <a style={{ color: 'white', fontSize: 'small' }}>   Create An Event</a></Link>
              </button>
              {localStorage.getItem('fullname') ? <div className={styles.user}> <Dropdown overlay={this.menu}>
                <a className={styles.drop} >
                  <Avatar size={40} icon={<UserOutlined />} />
                  {localStorage.getItem('fullname')}

                </a>
              </Dropdown> </div> :
                <button className={styles.loginregbtn} onClick={this.login}>
                  Login/Register
   </button>}

            </div>
          </div>

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
            {this.props.cp ?
              <Drawer
                title="f"
                placement="right"
                collapsible={true}
                visible={this.state.visible}
              >
                <div className={styles.cevent}>
                  Overview
           </div>
                <div className={styles.cevent}>
                  Booked Tickets
           </div>
                <div className={styles.cevent}>
                  Cancellation
           </div>
                <div className={styles.cevent}>
                  Current Events
           </div>
                <div className={styles.cevent}>
                  Create Events
           </div>
                <div className={styles.cevent}>
                  Previous Events
           </div></Drawer>
              :
              <Drawer
                title="Basic Drawer"
                placement="right"
                closable={false}

                visible={this.state.visible}
              >
                {localStorage.getItem('fullname') ? <div className={styles.b1m}>  <Avatar size={64} icon={<UserOutlined />} /> {localStorage.getItem('fullname')} </div> :
                  <div className={styles.b1m} onClick={() => { this.setState({ login: true, visible: false }); }}>
                    Login/Register
             </div>}
                <div className={styles.cevent}>
                  Create Event
             </div>
              </Drawer>}
            {this.state.login ? <Login visible={true} /> : null}


          </Content>

        </Layout>

      </Layout>
    );
  }
}
