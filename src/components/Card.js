import React, { Component } from 'react';
import styles from './Card.module.css'
import back from './b1.jpg';
import {Link} from 'react-router-dom'
import { ArrowRightOutlined} from '@ant-design/icons';
export default class Card extends Component {
  constructor(props){
    super(props)
    this.state={hover:false}
  }
  h=()=>{
    if(this.state.hover){
    this.setState({hover:false})}
    else{
      this.setState({hover:true})
    }
  }
  render() {
    return (
      <Link to='/aboutevents'>
      <div className={styles.cardholder} style={{width:this.props.size}}>
       
       
<div className={styles.img}  onMouseOver={this.h} onMouseLeave={this.h}></div>
<label className={styles.eventp}>20$-40$</label>
        <label className={styles.eventn}>St pter loremp -</label>
        <button  className={this.state.hover ? styles.eventll : styles.eventl}>Gyanpur Bhadohi</button>
        <button   className={this.state.hover ? styles.booknow : styles.booknowl}>Book Now  <ArrowRightOutlined /> </button>
      </div>
      </Link>
    );
  }
}
