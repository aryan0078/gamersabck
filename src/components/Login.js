import React, { Component } from 'react';
import { app } from '../firebase'
import Modal from 'antd/lib/modal/Modal';
import styles from './Register.module.css'
import firebase from 'firebase'
import { Spin } from 'antd';
import { useAsync } from 'react-async';
import { LoadingOutlined, GoogleOutlined, UserOutlined, LockOutlined, FacebookOutlined } from '@ant-design/icons';

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
            loading: false, nav: false,
            email: '', password: '', error: false, serror: false, fullname: '', loggedin: false, register: false
            , login: log
        }
    }
    antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;


    async glogin() {
        var db = app.firestore()
        var provider = new firebase.auth.GoogleAuthProvider();
        await firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API
            var token = result.credential.accessToken;

            // The signed-in user info.
            var user = result.user;
            var email = result.user.email
            var fullname = result.user.displayName
            var photo = result.user.photoURL
            var password = result.user.getIdToken
            var dob = '26/04/2002'
            var gender = 'male'
            var username = email.split('@')[0]
            db.collection('users').doc(result.user.uid).set({
                fullname: fullname,
                username: username,
                gender: gender,
                dob: dob,
                email: email,
                password: 'password'
            }).then(() => {
                db.collection('usernames').doc(username).set({
                    username: username
                })

                localStorage.setItem('fullname', fullname)
                localStorage.setItem('username', username)
                localStorage.setItem('gender', gender)
                localStorage.setItem('dob', dob)
                localStorage.setItem('email', email)
                alert('Registration Done!')
                window.location.reload()
            })
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential; console.log(errorMessage)
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

        if (this.state.nav) {
            return (
                <Register />
            )
        }
        return (
            <>


                <div className={styles.mainl}>



                    <div className={styles.login}>

                        <div className={styles.icons}><UserOutlined /> </div>       <input type="email" placeholder="Email" className={styles.inp} value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />

                    </div>

                    <div className={styles.login}>

                        <div className={styles.icons}><LockOutlined /> </div>  <input placeholder="Password" type="password" className={styles.inp} value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                    </div>
                    <div className={styles.regf}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}> <input type="checkbox" /><h1 className={styles.rem}>Remember Me</h1></div>
                        <h1 className={styles.forgot}>Forgot your password</h1>
                    </div>
                    <div className={styles.loginnrem}>
                        <div className={styles.h}>
                        </div>
                        {this.state.loading ? <Spin indicator={this.antIcon} spinning={this.state.loading} /> : <button onClick={this.log} className={styles.reg}>Sign in </button>}</div>
                    <h1 className={styles.text}>Or Signin With</h1>

                    <div className={styles.sociallogin}>
                        <div className={styles.google} onClick={this.glogin}><GoogleOutlined style={{ fontSize: '40px' }} />Google</div>
                        <div className={styles.facebook}><FacebookOutlined style={{ fontSize: '40px' }} />Facebook</div>
                    </div>

                </div>

            </>
        )
    }
}