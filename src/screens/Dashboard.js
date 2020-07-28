import React, { Component } from 'react'
import Landing from './Landing'
import styles from './Dashboard.module.css'
import { Tabs } from 'antd';
import { HomeOutlined, SecurityScanOutlined, ShoppingOutlined, DeleteOutlined, UnorderedListOutlined, CreditCardOutlined } from '@ant-design/icons'
import { Redirect, NavLink } from 'react-router-dom';
import Overview from './Dashboard/Overview';
import BookedTickets from "./Dashboard/BookedTickets";
import CurrentEvents from "./Dashboard/CurrentEvents";
const { TabPane } = Tabs;
export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: <Overview />
        }
    }
    callback = (key) => {
        console.log(key)
    }
    change = (e) => {
        if (e.target.innerText == 'Booked Tickets') {
            this.setState({ page: <BookedTickets /> })

        } else if (e.target.innerText == 'Current Events') {
            this.setState({ page: <CurrentEvents /> })
        }
    }
    render() {
        if (localStorage.getItem('fullname') == null) {
            return <Redirect to='/' />
        }
        return (
            <>
                <Landing cp={true} />

                <div className={styles.main}>


                    <div className={styles.nav}>

                        <div className={styles.timeline} key='3' onClick={this.change}>
                            <HomeOutlined style={{ fontSize: '28px' }} />
                            <h1 className={styles.name}>  Overview</h1>
                        </div>
                        <div className={styles.timeline} key='3' onClick={this.change}>
                            <ShoppingOutlined style={{ fontSize: '28px' }} />
                            <h1 className={styles.name}>  Booked Tickets</h1>
                        </div>
                        <div className={styles.timeline} key='3' onClick={this.change}>
                            <DeleteOutlined style={{ fontSize: '28px' }} />
                            <h1 className={styles.name}>Cancellation</h1>
                        </div>


                        <div className={styles.timeline} key='3' onClick={this.change}>
                            <SecurityScanOutlined style={{ fontSize: '28px' }} />
                            <h1 className={styles.name}> Current Events</h1>
                        </div>
                        <div className={styles.timeline} onClick={this.change}>
                            <CreditCardOutlined style={{ fontSize: '28px' }} />
                            <h1 className={styles.name} value='1'>  Create Events</h1>
                        </div>

                        <div className={styles.timeline} key='3' onClick={this.change}>
                            <UnorderedListOutlined style={{ fontSize: '28px' }} />
                            <h1 className={styles.name}>  Previous Events</h1>
                        </div>

                    </div>
                    <div className={styles.content}>
                        {this.state.page}
                    </div>
                </div>
            </>
        )
    }
}
