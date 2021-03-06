import React, { Component } from 'react'
import styles from './auth.module.css'
import Modal from 'antd/lib/modal/Modal'
import Login from './Login'
import Register from './Register'
export default class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: this.props.visible, page: <Login visible={true} />, cp: true
        }
    }
    cp = (e) => {
        if (e.target.innerText == 'SignUp') {
            this.setState({ page: <Register />, cp: false })
        } else {
            this.setState({ page: <Login visible={true} />, cp: true })
        }
    }
    render() {
        return (
            <Modal
                width={740}
                bodyStyle={{ padding: '0' }}
                style={{ backgroundColor: 'transparent', overflow: 'visible' }}
                visible={this.state.visible} footer={null} onCancel={() => this.setState({ visible: false })}>
                <div className={styles.main}>

                    <div className={styles.navs}>
                        <div className={styles.login} onClick={this.cp}>
                            <h1 className={this.state.cp ? styles.namec : styles.name}>SignIn</h1>
                        </div>
                        <div className={styles.login} onClick={this.cp}>
                            <h1 className={this.state.cp ? styles.name : styles.namec}>SignUp</h1>
                        </div>
                    </div>
                    <div className={styles.contenth}>
                        <div className={styles.simg}>
                        </div>
                        <div className={styles.content}>
                            {this.state.page}
                        </div></div>
                </div>

            </Modal>
        )
    }
}
