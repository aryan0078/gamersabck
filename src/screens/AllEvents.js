import React, { Component } from 'react';
import Card from '../components/Card'
import styles from './AllEvents.module.css'
import { Carousel } from 'antd';
import Drop from '../components/dropdown'
import { FilterOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons'
import Landing from './Landing';

class AllEvents extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.caurosel = React.createRef()
  }
  next = () => {

  }
  render() {
    return (
      <>
        <Landing></Landing>
        <div className={styles.main}>
          <div className={styles.caurosel}>
            <div className={styles.arrows} onClick={this.next}> <LeftOutlined style={{ fontSize: "25px", color: 'white' }} /></div>
            <div className={styles.c}>
              <Carousel ref={node => (this.carousel = node)} >
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
              </Carousel></div>
            <div className={styles.arrows} > <RightOutlined style={{ fontSize: "30px", color: 'white' }} /></div>
          </div>
          <div className={styles.searchbox}>

            <div className={styles.whatholder}>
              <h3 className={styles.searchind} >WHAT</h3>
              <Drop title={'Select Category'} />
            </div>
            <div className={styles.whatholder}>
              <h3 className={styles.searchind}>WHEN</h3>
              <Drop title={'Select Category'} />
            </div>
            <div className={styles.whatholder}>
              <h3 className={styles.searchind}>WHERE</h3>
              <Drop title={'Select Category'} />
            </div>
            <div className={styles.whatholder_}>
              <h3 className={styles.searchind}>KEYWORD</h3>
              <input className={styles.inputk} placeholder="...">
              </input>

            </div>
            <div>
              <button className={styles.searchs}>Search</button>
            </div>
          </div>

          <div className={styles.titlenfilter}>
            <h1 className={styles.title}>Simple Layout</h1>
            <div className={styles.fbuttons}>
              <button className={styles.fbutton_} ><FilterOutlined />  <Drop title={'filter'} /> </button>



              <button className={styles.fbutton}>SORT BY: Relevance</button>
            </div>
          </div>

          <div className={styles.entertainmentholder}>
            <div className={styles.row1}>
              <Card />

              <Card />


              <Card />
            </div>
            <div className={styles.row1}>
              <Card />

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
      </>);
  }
}

export default AllEvents;
