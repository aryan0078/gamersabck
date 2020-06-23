import React, { Component } from 'react';
import SideHeader from './components/SideHeader'
import Home from './screens/Home'
import { Layout,Menu } from 'antd';
import styles from './Layout.module.css'
import {UserOutlined,} from '@ant-design/icons';
import TopHeader from './components/TopHeader';
import {Modal} from 'react-modal'
import CFooter from './components/footer'
const { Header, Footer, Sider, Content } = Layout;

export default class AppLayout extends Component {
    constructor(props){
        super(props)
        this.state={login:false,collapsed:true}
    }
    login=()=>{
      this.setState({login:true})
    }
    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
  render() {
    return (
        <Layout>
        <Header  style={{ display:'flex',justifyContent:'flex-start',position: 'fixed', zIndex: 1001, width: '100%',backgroundColor:'#121212' }}>
        <div className={styles.logo}  ></div>
         <TopHeader/>
         <button className={styles.createevent} onClick={this.login}>
  Create An Event
</button>
         <button className={styles.loginregbtn} onClick={this.login}>
  Login/Register
</button>


        </Header>
        <Layout>
          <div>
        <Sider collapsedWidth={60} width={150} trigger={null} collapsible collapsed={this.state.collapsed}  style={{
       backgroundColor:'#121212',
        height: '100vh',
        position: 'fixed',
    zIndex:1000,
    display:'flex',
    paddingTop:'5%',
     overflow:'hidden',
     justifyContent:'center',
        bottom:0,
      
      }}>
           <Menu theme="dark" mode="inline" style={{backgroundColor:'#121212',}}>
          <Menu.Item key="1" icon={<UserOutlined />} onClick={this.toggle} style={{backgroundColor:'#121212'}} >
              nav 1
            </Menu.Item></Menu>
      <SideHeader/>
        </Sider></div>
          <Content > 
      <Home/>
      <CFooter/>
      </Content>
  
        </Layout>
    
      </Layout>
    );
  }
}
