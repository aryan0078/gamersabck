import React, { Component } from 'react';
import { app } from '../firebase'
import Modal from 'antd/lib/modal/Modal';
import styles from './Register.module.css'
import firebase from 'firebase'
import { Spin } from 'antd';
import { useAsync } from 'react-async';
import { LoadingOutlined, GoogleOutlined } from '@ant-design/icons';

import Register from './Register';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.log = this.log.bind(this)
        this.reg = this.reg.bind(this)

        var log = this.props.visible

        console.log(log)
        this.state = {
            loading: false,
            email: '', password: '', error: false, serror: false, fullname: '', loggedin: false, register: false
            , login: log
        }
    }
    antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;


    glogin = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API
            var token = result.credential.accessToken;

            // The signed-in user info.
            var user = result.user;
            console.log(result.user)
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }

    async reg() {
        var database = app.database()
        var db = app.firestore()
        await app.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((c) => {


            db.collection('users').doc(c.user.uid).get().then(doc => {

                /* console.log(doc.data())*/
                localStorage.setItem('fullname', doc.data().fullname)
                localStorage.setItem('username', doc.data().username)
                localStorage.setItem('gender', doc.data().gender)
                localStorage.setItem('dob', doc.data().dob)
                localStorage.setItem('email', doc.data().email)
                localStorage.setItem('loggedin', false)

            }).then(() => {

                this.setState({ loading: false })
                this.setState({ login: false })
                window.location.reload()
            })

            /*  alert('Login done')*/
        }).catch((e) => {
            this.setState({ loading: false })
            alert(e.message)
        })

        await this.setState({ loggedin: true })
    }
    validation = () => {
        if (this.state.email == '' || this.state.password == '') {
            alert('Please fill all fields')
            return null
        } else {
            return 3
        }
    }

    async log() {
        if (this.validation() == null) {
            return null
        }
        this.setState({ loading: true })
        await this.reg()



        if (this.state.loggedin) { }

    }

    render() {
        var visible = this.props.visible
        const error = this.state.error

        if (this.state.register) {
            return (
                <Register />
            )
        }
        return (
            <>

                <Modal
                    visible={this.state.login}
                    style={{ borderRadius: '26px', top: '30vh', backgroundColor: 'transparent' }}

                    onCancel={() => { this.setState({ login: false }) }}
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


                        {this.state.loading ? <Spin indicator={this.antIcon} spinning={this.state.loading} /> : <button onClick={this.log} className={styles.reg}>Sign in </button>}
                        <button onClick={() => this.setState({ register: true })} className={styles.reg}>Register </button>

                        {this.state.loading ? <Spin indicator={this.antIcon} spinning={this.state.loading} /> : <GoogleOutlined style={{ fontSize: '25px', color: 'white' }} onClick={this.glogin} />}
                    </div>

                </Modal>
            </>
        )
    }
}