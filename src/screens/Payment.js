import React, { Component } from 'react';
import styles from './Payment.module.css'
import {Select,Row,Col,Input} from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const {Option}=Select
class Payment extends Component {
    render() {
        return (
            <div className={styles.main}>
            
                <h1 className={styles.title}>Complete Your Purchase</h1>
                <div className={styles.paymentcontainer}>
                    <div className={styles.row1}>
                        <div className={styles.eventname}>
                        <h1 className={styles.event}>Vibra Mahou Fest</h1>
        <h1 className={styles.placenlocation}>location place</h1>
                        </div>
                        <div className={styles.dropdown}>
                        <Select size={'large'} showArrow={true} dropdownStyle={{backgroundColor:'black',color:'white'}} defaultValue="Select Event" style={{ width: 350,backgroundColor:'black',color:'white' }}>
     
        <Option style={{backgroundColor:'transparent',color:'#de2358'}}>Select something</Option>
        </Select>
        </div>
                        <div class={styles.quantityinput}>
				                        <span class={styles.minus}>-</span>
				                        <input type="number" class={styles.input} value="1" disabled=""/>
				                        <span class={styles.plus}>+</span>
				                    </div>
                    </div>
                    <div className={styles.row2}>
                        <h1 className={styles.subtotal}>Subtotal</h1>
                        <h1 className={styles.price}>$79</h1>
                        </div>
                </div>
                <div className={styles.paymentdetails}>
            
							<div className={styles.row1form}>
                                <label className={styles.frstname}>FULL NAME</label>
                                <input type="text" className={styles.frstnameinp} />
                            </div>
                            <div className={styles.row2form}>
                                <div className={styles.email}>
                                <label className={styles.frstname}>EMAIL ADDRESS</label>
                                <input type="text" className={styles.frstnameinpe} />
                                </div>
                                <div className={styles.divider}></div>
                                <div className={styles.email}>
                                <label className={styles.phno}>PHONE NUMBER</label>
                                <input type="text" className={styles.frstnameinpp} />
                                </div>
                                
                            </div>
                            <div className={styles.row3form}>
                                <h1 className={styles.paymenttitile}>Payment Method</h1>
                                <div className={styles.cardsholder}>
<div className={styles.paypal}></div>
<div className={styles.cc}></div>
<div className={styles.payfast}></div>
                                </div>
                            </div>
                            <div className={styles.row4}>
                                <button className={styles.placeorder}>PLACE ORDER</button>
                            </div>
                            <div className={styles.row5}>
                                <div className={styles.iconntitle}>
                                    <div className={styles.xicon}>l</div>
                                   <h1 className={styles.x}>Your Information is Safe</h1>
                                </div>
                                <p className={styles.longtext}>
                                We respect your privacy and do not tolerate spam and will never sell, rent, lease or give away your information to any third party. Nor will we send you unsolicited email.
                                </p>
                            </div>
                            <div className={styles.row6}>
                            <div className={styles.iconntitle}>
                                    <div className={styles.xicon}>l</div>
                                   <h1 className={styles.x}>Secure Checkout</h1>
                                </div>
                                <p className={styles.longtext}>
                                All information is encrypted and transmitted without risk using a Secure Sockets Layer protocol. You can trust us!
                                </p>
                            </div>
                </div>
            </div>
        );
    }
}

export default Payment;