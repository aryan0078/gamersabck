import React, { Component } from 'react';
import Card from '../components/Card'
import styles from './AllEvents.module.css'
import { Carousel } from 'antd';
import Drop from '../components/dropdown'
import {FilterOutlined } from '@ant-design/icons'
import {Button,Dropdown,Menu} from 'antd'
class AllEvents extends Component {
   
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
            <Drop/>
            </div>
            <div className={styles.whatholder}>
            <h3 className={styles.searchind}>WHEN</h3>
            <Drop/>
            </div>
            <div className={styles.whatholder}>
            <h3 className={styles.searchind}>WHERE</h3>
            <Drop/>
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
                  <div className={styles.fbuttons}>
                  <button className={styles.fbutton_} ><FilterOutlined /> </button>
                    <button className={styles.fbutton}>FILTER </button>
                    <button className={styles.fbutton}>SORT BY: Relevance</button>
                    </div>
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
