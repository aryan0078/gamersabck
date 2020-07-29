import React, { Component } from 'react'
import styles from './allcss.module.css'
export default class CurrentEvents extends Component {
    render() {
        return (
            <div className={styles.main}>
                <div className={styles.section1}>

                    <h1 className={styles.links}> <div className={styles.dot}></div>Overview</h1>
                    <h1 className={styles.links}> <div className={styles.dot}></div>Edit Tournament</h1>
                    <h1 className={styles.links}> <div className={styles.dot}></div> Registerations
</h1>
                    <h1 className={styles.links}> <div className={styles.dot}></div> Participant Seeding </h1>
                    <h1 className={styles.links}> <div className={styles.dot}></div> Matches</h1>
                    <h1 className={styles.links}> <div className={styles.dot}></div> Promo Codes</h1>
                    <h1 className={styles.links}> <div className={styles.dot}></div> Leadership Board</h1>
                    <h1 className={styles.links}> <div className={styles.dot}></div> Chat Room</h1>
                    <h1 className={styles.links}> <div className={styles.dot}></div> Gallery</h1>
                    <h1 className={styles.links}> <div className={styles.dot}></div> Bank Details</h1>
                    <h1 className={styles.links}> <div className={styles.dot}></div> Prize Money Payout</h1>
                    <h1 className={styles.links}> <div className={styles.dot}></div>Message to participants</h1>
                    <h1 className={styles.links}> <div className={styles.dot}></div>Paid Marketing</h1>
                    <h1 className={styles.links}> <div className={styles.dot}></div> Delete Event</h1>

                </div>
                <div className={styles.section2}></div>
            </div>
        )
    }
}
