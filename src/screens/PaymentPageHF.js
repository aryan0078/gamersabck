import React, { Component } from 'react';
import SideHeader from '../components/SideHeader'
import Payment from './Payment'
import { Layout,Menu,Modal } from 'antd';
import styles from './Layout.module.css'

import TopHeader from '../components/TopHeader';
import { Form, Input, Button, Checkbox,Drawer } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import CFooter from '../components/footer'

const { Header, Footer, Sider, Content } = Layout;

export default class PaymentP extends Component {
    constructor(props){
        super(props)
        this.state={login:false,collapsed:true}
    }
    login=()=>{
      if(this.state.login){
        this.setState({login:false})
      }else{
      this.setState({login:true})
    }}
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
<Payment/>
<Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
   
        visible={this.state.visible}
      >
        <p>some .......</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      <Modal
    visible={this.state.login}
   
  
    style={{ top: '20' }}
    bodyStyle={{ padding: '0' }}
    footer={null}
    width={820}
  
>
    <div className={styles.login}>
       <div className={styles.image}>
         <div className={styles.textontop}>
           <h1 className={styles.date}>Sep 26</h1>
           <h1 className={styles.eventname}>Sesame Street Live! MAke Your Magic</h1>
           <h1 className={styles.place}>Grand Chapiteau</h1>
           <div className={styles.price}>$45</div>
         </div>
       </div>
       <div className={styles.loginholder}>
         <h1 className={styles.lableoflogin}>Sign In</h1>
       <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
   
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox style={{color:"white"}}>REMEMBER ME</Checkbox>
        </Form.Item>

        <a className={styles.loginformforgot} href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <button className={styles.loginbutton}>
          LOGIN
        </button>
         <a className={styles.loginformreg}> Or Register now</a>
      </Form.Item>
    </Form>
       </div>
    </div>
</Modal>
      <CFooter/>
      </Content>
  
        </Layout>
    
      </Layout>
    );
  }
}
