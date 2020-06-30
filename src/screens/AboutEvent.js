import React, { Component } from 'react';
import styles from './AboutEvent.module.css'
import { CalendarFilled} from '@ant-design/icons';
import {Link} from 'react-router-dom'
import {Modal} from 'antd'
class AboutEvent extends Component {
    constructor(props){
        super(props)
        this.state={m:false}
    }
c=()=>{
    if(this.state.m){
        this.setState({m:false})
    }else{
    this.setState({m:true})}}
    render() {
        return (
            <div className={styles.main}>
                <Modal
    visible={this.state.m}
    style={{ top: '40' ,borderRadius:'10px',display:'flex',justifyContent:'center',alignItems:'center'}}
    bodyStyle={{ padding: '0' }}
    footer={null}
    width={500}
    height={500}
    onCancel={this.c}
>
<div className={styles.contact}>
<button>fubdifb</button>
</div>
</Modal>
               
               <Link to='/payment'> <button className={styles.booknowf}>Book Now</button></Link>
                <h1 className={styles.eventname}>Sesame Street Live! Make Your Magic</h1>
            <div className={styles.detailbox}>
                <div className={styles.rowp1}>
                    <div className={styles.elogo}></div>
                    <button className={styles.omodal} onClick={this.c}>Contact Organizer</button>
                </div>
                <div className={styles.rowp2}>
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


                </div>
                </div>
                </div>
                <div className={styles.content}>

                <div className={styles.cardsholder}>
                    <div className={styles.crow1}>
                        <div className={styles.card}>
                            Watch Now
                        </div>
                        <div className={styles.card}>
                            Description
                        </div>
                        <div className={styles.card}>
                            Test1
                        </div>


                        <div className={styles.card}>
                            Test2
                        </div>
                        <div className={styles.card}>
                            Test3
                        </div>
                        <div className={styles.card}>
                            Test4
                        </div>


                        <div className={styles.card}>
                            Test5
                        </div>

                    </div>

                </div>
                <div className={styles.orow2}>
    <h1 className={styles.eventname_}>VIBRA MAHOU FEST</h1>
    <p className={styles.desc}>
    Festival lineup: The Strokes, the Chainsmokers, Childish Gambino, Tame Impala, Twenty One Pilots, J Balvin, Ariana Grande, Flume
A wonderful gathering of music, dance, <br/><br/>comedy and craft booths, Lollapalooza is another multi-genre delight which also provides a platform for political and non-profit artists and groups. The festival is forever creating historical moments in many a musicians career firmly cementing it in the global hall of fame for festivals.
    </p>
                </div>
                <div className={styles.imggalleryh}>
<div className={styles.imrow1}>
<div className={styles.gimg}></div>
</div>
                </div>
                </div>
            </div>
        );
    }
}

export default AboutEvent;
