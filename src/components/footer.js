import React, { Component } from 'react';
import styles from './footer.module.css'
class CFooter extends Component {
    render() {
        return (
          <div className={styles.main}>
              <div className={styles.taglineholder}>
<h1 className={styles.tagline1}>YOU ARE YOU</h1>
<h1 className={styles.tagline2}>Are you who are ? Come join us at Gamersback.Click here to check career points</h1>
              </div>
              <div className={styles.linksholder}>
<div className={styles.section}>
    <h5 className={styles.item11}>HELPFUL LINKS</h5>
    <a style={{color:"grey"}}>My Account</a>
    <a style={{color:"grey"}}>Refunds and Exchanges</a>
    <a style={{color:"grey"}}>Ticket Your Event</a>
    <a style={{color:"grey"}}>Get Help</a>
    <a style={{color:"grey"}}>Sell</a>
</div>
<div className={styles.section}>
<h5 className={styles.item11}>EXPLORE</h5>
    <a style={{color:"grey"}}>Concerts</a>
    <a style={{color:"grey"}}>Family</a>
    <a style={{color:"grey"}}>Conferences</a>
    <a style={{color:"grey"}}>Musical</a>
    <a style={{color:"grey"}}>Music Fest</a>
</div>
<div className={styles.section}>
<h5 className={styles.item11}>ABOUT US</h5>
<a style={{color:"grey"}}>Become Organizer</a>
    <a style={{color:"grey"}}>Who We Are</a>
    <a style={{color:"grey"}}>Ticketing 101</a>
    <a style={{color:"grey"}}>Our Blog</a>
    <a style={{color:"grey"}}>Work With Us</a>
</div>
<div className={styles.section}>
<h5 className={styles.item11}>ABOUT US</h5>
<a style={{color:"grey"}}>Loremp ipsum lorem ipsum </a>
<a style={{color:"grey"}}>Loremp ipsum lorem ipsum loremp ipsum</a>
<a style={{color:"grey"}}>Loremp ipsum lorem ipsum loremp ipsum</a>
<a style={{color:"grey"}}>Loremp ipsum lorem ipsum loremp ipsum</a>
</div>
</div>
<div className={styles.socialmediandnle}>
<div className={styles.socaillinks}>
    f g t y
</div>
<div className={styles.newsletter}>
    <h5 className={styles.item11}>NEWSLETTER</h5>
    <div className={styles.inputbuttonholders}>
    <input placeholder='Enter Your E-mail' className={styles.ninput}/><button className={styles.nbutton}>SUBSCRIBE</button></div>
</div>
</div>
          </div>
        );
    }
}

export default CFooter;