import React, { Component } from 'react'
import Landing from './Landing'
import styles from './Dashboard.module.css'
export default class Dashboard extends Component {
    render() {
        return (
            <>
                <Landing />
                <div className={styles.main}>
                    <div className={styles.profilepic}>

                    </div>
                </div>
            </>
        )
    }
}
