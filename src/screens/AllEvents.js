import React, { Component } from 'react';
import Card from '../components/Card'
import styles from './AllEvents.module.css'
import { Carousel } from 'antd';
import {Button,Dropdown,Menu} from 'antd'
class AllEvents extends Component {
    menu = (
        <Menu className={styles.dropdown}>
          <Menu.Item >
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/" style={{color:'white'}}>
              1st menu item
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/" style={{color:'white'}}>
              2nd menu item
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/" style={{color:'white'}}>
              3rd menu item
            </a>
          </Menu.Item>
        </Menu>
      );
    render() {
        return (
            <div className={styles.main}>
              <div className={styles.caurosel}>
              <Carousel>
    <div>
      <div className={styles.cimg}></div>
    </div>
    <div>
    <div className={styles.cimg}></div>
    </div>
    <div>
    <div className={styles.cimg}></div>
    </div>
    <div>
    <div className={styles.cimg}></div>
    </div>
  </Carousel>
              </div>
                     <div className={styles.searchbox}>
          <div className={styles.whatholder}>
            <h3 className={styles.searchind} >WHAT</h3>
            <Dropdown overlay={this.menu} placement="bottomLeft">
     <button className={styles.dropbtn}>SELECT CATEGORY</button> 
    </Dropdown>
            </div>
            <div className={styles.whatholder}>
            <h3 className={styles.searchind}>WHEN</h3>
            <Dropdown overlay={this.menu} placement="bottomLeft">
            <button className={styles.dropbtn}>SELECT CATEGORY</button> 
    </Dropdown>
            </div>
            <div className={styles.whatholder}>
            <h3 className={styles.searchind}>WHERE</h3>
            <Dropdown overlay={this.menu} >
            <button className={styles.dropbtn}>SELECT CATEGORY</button> 
    </Dropdown>
            </div>
            <div className={styles.whatholder_}>
            <h3 className={styles.searchind}>KEYWORD</h3>
            <input className={styles.inputk} placeholder="...">
           </input>
   
            </div>
            <div>
              <Button type="primary" danger style={{width:'10em',height:'4em',marginRight:'2em'}}>Search</Button>
            </div>
        </div>

                <div className={styles.titlenfilter}>
                  <h1  className={styles.title}>Simple Layout</h1>
                  </div>
         
                <div className={styles.entertainmentholder}>
<div className={styles.row1}>
 <Card/>

 <Card />
 

 <Card />
 </div>
 <div className={styles.row1}>
 <Card/>

 <Card />
 

 <Card />
 </div>
<div className={styles.pagenav}>
<button className={styles.bnav}> - </button>
<button className={styles.bnav}>1</button>
<button className={styles.bnav}>2 </button>
<button className={styles.bnav}> + </button>
</div>
      </div>
    
            </div>
        );
    }
}

export default AllEvents;