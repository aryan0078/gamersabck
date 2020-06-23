import React, { Component } from 'react';
import styles from './Home.module.css'
import { Carousel } from 'antd';
import { Menu, Dropdown, Button } from 'antd';
import { Col, Row } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Card from '../components/Card'
import { Rate } from 'antd';
import Typewriter from 'typewriter-effect';
export default class Home extends Component {
  

menu = (
  <Menu style={{backgroundColor:'black'}}>
    <Menu.Item>
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
      <>
 


  
        <div className={styles.main}> 
      
        <span className={styles.emptyspace}></span>
        <p className={styles.title}>ALL FUN START HERE</p>
    <div className={styles.btitleholder}>
    
        <h1 className={styles.btitle}>Discover</h1><div className={styles.animationtext}><Typewriter
  options={{
    strings: [' Events', ' Games',' Pubg'],
    autoStart: true,
    loop: true,
  }}
/></div> 
</div>
<h1 className={styles.btitle}>around you.</h1>
        <div className={styles.searchbox}>
          <div className={styles.whatholder}>
            <h3 className={styles.searchind} style={{marginLeft:'15px'}}>WHAT</h3>
            <select className={styles.dropdown}>
            <option className={styles.dropitm}> Select Cat</option>
            <option className={styles.dropitm}> Select Cat</option>
            <option className={styles.dropitm}> Select Cat</option>
            </select>
            </div>
            <div className={styles.whatholder}>
            <h3 className={styles.searchind}>WHEN</h3>
            <Dropdown overlay={this.menu} placement="bottomLeft">
      <Button  size={'large'} style={{backgroundColor:'#121212',color:'white',borderWidth:'0px'}}>Select Location</Button>
    </Dropdown>
            </div>
            <div className={styles.whatholder}>
            <h3 className={styles.searchind}>WHERE</h3>
            <Dropdown overlay={this.menu} >
      <Button  size={'large'} style={{textAlign:'left',backgroundColor:'#121212',color:'white',borderWidth:'0px',}}>Select Category</Button>
    </Dropdown>
            </div>
            <div>
              <Button type="primary" danger style={{width:'10em',height:'4em',marginRight:'2em'}}>Search</Button>
            </div>
        </div>
        <div className={styles.upcomingholder}>
          <h3 style={{color:'white',alignSelf:'flex-start'}}>DISCOVER THE FUN!</h3>
          <h1 className={styles.upcoming}>Upcoming Events</h1>
          <div className={styles.cardholder}>
    <div className={styles.row1}>
   <Card size={'60%'}/>
  
   <Card size={'40%'}/>
   </div>
 
   <div className={styles.row1}>
   <Card/>
  
   <Card/>
  
   <Card/>
 
  
   </div>
   <div className={styles.row1}>
   <Card/>
 
   <Card size={'58em'}/>
   </div>
  </div>
        </div>
        <div className={styles.entertainmentholder}>

  <h3 className={styles.entertainmenl1}>ALL THE FUN STARTS HERE</h3>
  <h1  className={styles.entertainmenl2}>Entertainment Guides</h1>
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

        </div>
        <div className={styles.dealofthedayholder}>
<div className={styles.buttonndstuff}>
  <h1 className={styles.dealtitle1}>Deal of the Day!</h1>
  <h3 className={styles.dealtitle2}>Register today and get 40% OFF from your first purchase.</h3>
  <button className={styles.grabdealnowbtn}>Grab The deal Now</button>
  </div>
  <h1 className={styles.off}>40%</h1>
        </div>
        <div className={styles.sellticketholder}>
          <div className={styles.lableholder}>
          <h2 className={styles.sellticketholderl}>HOW TO</h2>
          <h1 className={styles.sellticketholder2}>Sell Your Tickets</h1>
        </div>
       
        <div className={styles.textcontainer}>
<p className={styles.sellticketlongtext}>After the event was created you can add tickets. An event can have multiple ticket types. You can add the amount of tickets available and the date your audience can start buying them and a date when the sale ends.</p>
        </div>
        <div className={styles.allthebuttons}>
        
            <button className={styles.sellticketbutton}><span style={{color:'#CA0C2A'}}>01</span> CREATE AN EVENT</button>
            <button className={styles.sellticketbutton}><span style={{color:'#CA0C2A'}}>02</span>  ADD TICKETS</button>
            <button className={styles.sellticketbutton}><span style={{color:'#CA0C2A'}}>03</span> 03 EARN MONEY</button>
     
        </div>
        <button className={styles.getstartedbtn}>GET STARTED</button>
        </div>
        <div className={styles.blogsectionholder}>
        <div className={styles.lableholder}>
          <h2 className={styles.sellticketholderl}>LATEST NEWS</h2>
          <h1 className={styles.sellticketholder2}>From the Blog</h1>
        </div>
        <div className={styles.cardhoderblog}>
          <div className={styles.card1blog}>
            
            <button className={styles.blogbtn1}>ROYALTICKETS</button>
          <div className={styles.textcontentblog}>
            <h1 className={styles.blogcardt1}>The Greatest Super Bowl Games of All Time</h1>
            <p className={styles.blogcardt2}>Eam tum adesse, cum dolor omnis absit; Et quidem iure fortasse, sed tamen non gravissimum est testimonium multitudinis.</p>
          </div>
          <button className={styles.readmorebtn}>READ MORE</button>
          </div>
          <div className={styles.card2blog}></div>
        </div>

        </div>
        <div className={styles.testnomialsholder}> 
        <div className={styles.lableholder}>
          <h2 className={styles.sellticketholderl}>TESTNOMIALS</h2>
          <h1 className={styles.upcoming}>Hear From Our Organizers</h1>
        </div>
     <div className={styles.alltestcardholder}>
        <Carousel  dots={false} draggable={true}>
          <div >
            <div className={styles.row1test}>
<div className={styles.testnomialcards}>
  <h1 style={{color:'white'}}>Awesom dude</h1>
  <p style={{color:'white'}}>loremipsum oienfioenonewiognoeigwegewgewgewg ewg wegewg we</p>
  <div className={styles.imgstarandname}>
  <Avatar size={60} icon={<UserOutlined />} style={{marginTop:'6%'}}/>
  <div className={styles.nametimestar}>
  <Rate disabled={true} value={5} />
    <h3 style={{color:'white'}}>Aryan Singh</h3>
    <h4 style={{color:'white'}}>26/04/2020</h4>
  </div>
  </div>
</div>
<div className={styles.testnomialcards}>
  <h1 style={{color:'white'}}>Awesom dude</h1>
  <p style={{color:'white'}}>loremipsum oienfioenonewiognoeigwegewgewgewg ewg wegewg we</p>
  <div className={styles.imgstarandname}>
  <Avatar size={60} icon={<UserOutlined />} style={{marginTop:'6%'}}/>
  <div className={styles.nametimestar}>
  <Rate disabled={true} value={5} />
    <h3 style={{color:'white'}}>Aryan Singh</h3>
    <h4 style={{color:'white'}}>26/04/2020</h4>
  </div>
  </div>
</div>
<div className={styles.testnomialcards}>
  <h1 style={{color:'white'}}>Awesom dude</h1>
  <p style={{color:'white'}}>loremipsum oienfioenonewiognoeigwegewgewgewg ewg wegewg we</p>
  <div className={styles.imgstarandname}>
  <Avatar size={60} icon={<UserOutlined />} style={{marginTop:'6%'}}/>
  <div className={styles.nametimestar}>
  <Rate disabled={true} value={5} />
    <h3 style={{color:'white'}}>Aryan Singh</h3>
    <h4 style={{color:'white'}}>26/04/2020</h4>
  </div>
  </div>
</div>
</div>

</div>
<div >
            <div className={styles.row1test}>
<div className={styles.testnomialcards}>
  <h1 style={{color:'white'}}>Awesom dude</h1>
  <p style={{color:'white'}}>loremipsum oienfioenonewiognoeigwegewgewgewg ewg wegewg we</p>
  <div className={styles.imgstarandname}>
  <Avatar size={60} icon={<UserOutlined />} style={{marginTop:'6%'}}/>
  <div className={styles.nametimestar}>
  <Rate disabled={true} value={5} />
    <h3 style={{color:'white'}}>Aryan Singh</h3>
    <h4 style={{color:'white'}}>26/04/2020</h4>
  </div>
  </div>
</div>
<div className={styles.testnomialcards}>
  <h1 style={{color:'white'}}>Awesom dude</h1>
  <p style={{color:'white'}}>loremipsum oienfioenonewiognoeigwegewgewgewg ewg wegewg we</p>
  <div className={styles.imgstarandname}>
  <Avatar size={60} icon={<UserOutlined />} style={{marginTop:'6%'}}/>
  <div className={styles.nametimestar}>
  <Rate disabled={true} value={5} />
    <h3 style={{color:'white'}}>Aryan Singh</h3>
    <h4 style={{color:'white'}}>26/04/2020</h4>
  </div>
  </div>
</div>
<div className={styles.testnomialcards}>
  <h1 style={{color:'white'}}>Awesom dude</h1>
  <p style={{color:'white'}}>loremipsum oienfioenonewiognoeigwegewgewgewg ewg wegewg we</p>
  <div className={styles.imgstarandname}>
  <Avatar size={60} icon={<UserOutlined />} style={{marginTop:'6%'}}/>
  <div className={styles.nametimestar}>
  <Rate disabled={true} value={5} />
    <h3 style={{color:'white'}}>Aryan Singh</h3>
    <h4 style={{color:'white'}}>26/04/2020</h4>
  </div>
  </div>
</div>
</div>

</div>
</Carousel>
  </div>  
        </div>
        </div>
      
</>
    );
  }
}
