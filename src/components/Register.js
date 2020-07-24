import React, { Component } from 'react';
import { app } from '../firebase'
import Modal from 'antd/lib/modal/Modal';
import styles from './Register.module.css'
import { DatePicker, Alert } from 'antd'
import { Menu, Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Login from "../components/Login";
export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            visible: true, date: '', username: '', email: '', password: '', fullname: '', gender: 'Gender', error: false, serror: false
        }
    }
    antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    usernamecheck = () => {
        /* var database = app.database()
          var ref = database.ref('users/' + this.state.username)
          ref.on('value', (snapshot) => {
              if (snapshot.val() != null) {
                  this.setState({ error: true })
  
              }
          })*/
        return null


    }

    onClick = ({ key }) => {
        this.setState({ gender: key })
    };

    menu = (
        <Menu onClick={this.onClick}>
            <Menu.Item key="Male">Male</Menu.Item>
            <Menu.Item key="Female">Female</Menu.Item>
        </Menu>
    );
    reg = () => {
        var database = app.database()
        var db = app.firestore()
        this.usernamecheck()
        if (this.state.error) {
            return null
        } else {
            console.log('done')
        }
        this.setState({ loading: true })
        app.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(cred => {
            db.collection('users').doc(cred.user.uid).set({
                fullname: this.state.fullname,
                username: this.state.username,
                gender: this.state.gender,
                dob: this.state.date
            }).then(() => {
                this.setState({ loading: false })
                alert('Registration Done!')
            })
        }).catch((e) => {
            this.setState({ loading: false })
            alert(e.message)
        })

    }


    render() {
        const error = this.state.error
        return (
            <>
                <Modal visible={this.state.serror} footer={null} onCancel={() => this.setState({ serror: false })}>
                    <div style={{ color: 'white' }}>
                        Please Fill all things
               </div>
                </Modal>
                <Modal
                    visible={this.state.visible}
                    style={{ borderRadius: '26px', top: '20', backgroundColor: 'transparent' }}

                    onCancel={() => this.setState({ visible: false })}
                    bodyStyle={{ padding: '0' }}
                    footer={null}
                    width={620}

                >
                    <div className={styles.main}>

                        <div className={styles.title}>
                            <h1>Welcome User</h1>
                            <p>Welcome to gamersback</p>
                        </div>
                        <div className={styles.login}>
                            <label>Username</label>
                            <input className={styles.inp} value={this.state.username} onBlur={() => this.setState({ error: false })} onChange={(e) => this.setState({ username: e.target.value })} />
                            {error ? <label className={styles.error}>Username is already Registerd</label> : null}
                        </div>
                        <div className={styles.login}>
                            <label>Email</label>
                            <input className={styles.inp} value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />

                        </div>
                        <div className={styles.login} >
                            <Dropdown overlay={this.menu}>
                                <a className={styles.gender} onClick={e => e.preventDefault()}>
                                    {this.state.gender} <DownOutlined />
                                </a>
                            </Dropdown>
                            <DatePicker style={{ color: 'white' }} placeholder='DOB' onChange={(b, f) => this.setState({ date: f })} />
                        </div>
                        <div className={styles.login}>
                            <label>Password</label>
                            <input type="password" className={styles.inp} value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                        </div>
                        <div className={styles.login}>
                            <label>Full Name</label>
                            <input className={styles.inp} value={this.state.fullname} onChange={(e) => this.setState({ fullname: e.target.value })} />
                        </div>
                        <div className={styles.login}>


                            <button onClick={this.reg}>Sign in </button></div>
                        {this.state.loading ? <Spin indicator={this.antIcon} /> : null}
                    </div>

                </Modal>
            </>
        )
    }
}