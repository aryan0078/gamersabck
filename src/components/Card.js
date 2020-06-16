import React, { Component } from 'react';
import styles from './Card.module.css'
import back from './b1.jpg'
export default class Card extends Component {
  render() {
    return (
      <div className={styles.cardholder} style={{width:this.props.size}}>
       
       
<div className={styles.img}></div>
<label className={styles.eventp}>20$-40$</label>
        <label className={styles.eventn}>St pter loremp -</label>
        <label className={styles.eventl}>Gyanpur Bhadohi</label>
        <label className={styles.booknow}>Book Now </label>
      </div>
    );
  }
}
