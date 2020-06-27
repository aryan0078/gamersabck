import React, { Component } from 'react';
import styles from './AboutEvent.module.css'
import { CalendarFilled} from '@ant-design/icons';
class AboutEvent extends Component {
    render() {
        return (
            <div className={styles.main}>
                <button className={styles.booknowf}>Book Now</button>
                <h1 className={styles.eventname}>Sesame Street Live! Make Your Magic</h1>
            <div className={styles.detailbox}>
                <div className={styles.row1}>
                <div className={styles.icons}><CalendarFilled style={{ fontSize: '30px' }}/></div>
                    <h1 className={styles.date}>26 September</h1>
                    <h1 className={styles.time}>7:00 pm</h1>
                    <h1 className={styles.button}>View All Dates</h1>
                </div>
                <div className={styles.row2}>
                <div className={styles.icons}><CalendarFilled style={{ fontSize: '30px' }}/></div>
                    <h1 className={styles.date}>Grand Chapiteau</h1>
                    <h1 className={styles.time}>New York</h1>
            
                </div>
                <div className={styles.row3}>
                <div className={styles.icons}><CalendarFilled style={{ fontSize: '30px' }}/></div>
                    <h1 className={styles.date}>$45</h1>
                    <button className={styles.book}>Book a Ticket</button>
                   
                </div>
                </div>
                <div className={styles.content}>
<div className={styles.orow2}>
    <h1 className={styles.eventname_}>VIBRA MAHOU FEST</h1>
    <p className={styles.desc}>
    Festival lineup: The Strokes, the Chainsmokers, Childish Gambino, Tame Impala, Twenty One Pilots, J Balvin, Ariana Grande, Flume
A wonderful gathering of music, dance, <br/><br/>comedy and craft booths, Lollapalooza is another multi-genre delight which also provides a platform for political and non-profit artists and groups. The festival is forever creating historical moments in many a musicians career firmly cementing it in the global hall of fame for festivals.
    </p>
                </div>
                </div>
            </div>
        );
    }
}

export default AboutEvent;