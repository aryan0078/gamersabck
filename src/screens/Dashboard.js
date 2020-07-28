import React, { Component } from 'react'
import Landing from './Landing'
import styles from './Dashboard.module.css'
import { Tabs } from 'antd';
import { HomeOutlined, SecurityScanOutlined, ShoppingOutlined, DeleteOutlined, UnorderedListOutlined, CreditCardOutlined } from '@ant-design/icons'
import { Redirect } from 'react-router-dom';
const { TabPane } = Tabs;
export default class Dashboard extends Component {
    callback = (key) => {
        console.log(key)
    }
    change = (e) => {
        if (e.target.innerText == 'Timeline') {

        }
    }
    render() {
        if (localStorage.getItem('fullname') == null) {
            return <Redirect to='/' />
        }
        return (
            <>
                <Landing />
                <div className={styles.main}>


                    <div className={styles.nav}>

                        <div className={styles.timeline} key='3'>
                            <HomeOutlined style={{ fontSize: '28px' }} />
                            <h1 className={styles.name}>  Overview</h1>
                        </div>
                        <div className={styles.timeline} key='3'>
                            <ShoppingOutlined style={{ fontSize: '28px' }} />
                            <h1 className={styles.name}>  Booked Tickets</h1>
                        </div>
                        <div className={styles.timeline} key='3'>
                            <DeleteOutlined style={{ fontSize: '28px' }} />
                            <h1 className={styles.name}>Cancellation</h1>
                        </div>


                        <div className={styles.timeline} key='3'>
                            <SecurityScanOutlined style={{ fontSize: '28px' }} />
                            <h1 className={styles.name}> Current Events</h1>
                        </div>
                        <div className={styles.timeline} onClick={this.change}>
                            <CreditCardOutlined style={{ fontSize: '28px' }} />
                            <h1 className={styles.name} value='1'>  Create Events</h1>
                        </div>

                        <div className={styles.timeline} key='3'>
                            <UnorderedListOutlined style={{ fontSize: '28px' }} />
                            <h1 className={styles.name}>  Previous Events</h1>
                        </div>

                    </div>
                    <div className={styles.content}>

                    </div>
                </div>
            </>
        )
    }
}
