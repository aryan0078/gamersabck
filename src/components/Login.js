import React, { Component } from 'react';
import { app } from '../firebase'
import Modal from 'antd/lib/modal/Modal';
import styles from './Register.module.css'
import { DatePicker, Alert } from 'antd'
import { Menu, Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { Result, Button } from 'antd';
import Register from './Register';
import { Redirect } from 'react-router-dom';
import { auth } from 'firebase';
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.log = this.log.bind(this)
        this.state = {
            loading: false,
            email: '', password: '', error: false, serror: false, fullname: '', loggedin: false, register: false
        }
    }
    antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;




    reg = () => {
        var database = app.database()
        var db = app.firestore()
        app.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((c) => {
            db.collection('users').doc(c.user.uid).get().then(doc => {

                console.log(doc.data())
                this.setState({ fullname: doc.data()['fullname'] })
            })

            /*  alert('Login done')*/
        }).catch((e) => {

            alert(e.message)
        })


    }
    validation = () => {
        if (this.state.email == '' || this.state.password == '') {
            alert('Please fill all fields')
            return null
        }
    }
    async log() {
        if (this.validation() == null) {
            return null
        }
        this.setState({ loading: true })
        this.reg()
        this.setState({ loading: false })
        this.setState({ loggedin: true })
        console.log(this.state.fullname)
    }
    render() {
        var visible = this.props.visible
        const error = this.state.error
        if (this.state.loggedin) {
            return (
                <Redirect to="/" />
            )
        }
        if (this.state.register) {
            return (
                <Register />
            )
        }
        return (
            <>

                <Modal
                    visible={visible}
                    style={{ borderRadius: '26px', top: '30vh', backgroundColor: 'transparent' }}

                    onCancel={() => { visible = false }}
                    bodyStyle={{ padding: '0' }}
                    footer={null}
                    width={420}

                >
                    <div className={styles.mainl}>

                        <div className={styles.title}>
                            <h1>Welcome Back</h1>
                            <p>Welcome to gamersback</p>
                        </div>

                        <div className={styles.login}>
                            <label>Email</label>
                            <input className={styles.inp} value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />

                        </div>

                        <div className={styles.login}>
                            <label>Password</label>
                            <input type="password" className={styles.inp} value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                        </div>

                        <div className={styles.login}>

                            <Spin indicator={this.antIcon} spinning={this.state.loading} />
                            <button onClick={this.log} className={styles.reg}>Sign in </button></div>
                        <button onClick={() => this.setState({ register: true })} className={styles.reg}>Register </button>

                    </div>

                </Modal>
            </>
        )
    }
}