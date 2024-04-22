import {  Container, Row, Col } from 'react-bootstrap';
import CollapsibleExample from './Navbar';
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import Baked from './Images/Baked.webp'
import Food3 from './Images/Food3.webp'
import Food2 from './Images/Food2.webp'


function Portfolio() {
  return (
    <>
    <CollapsibleExample/>
    
 



    <h1 className="d-flex justify-content-center align-items-center" style={{margin:'4%', marginTop:'10%', fontSize: '50px', fontFamily:'Garamond', }}>PORTFOLIO</h1>
<Container>

      <Row>
        <Col xs={8} md={4}>
          <div style={{ position: 'relative',  }}>
            <img src={Food2}
            alt="Your abc" style={{ width: '100%', height:'90vh', filter: 'brightness(0.6) blur(1px)'}} />
            <div style={{ position: 'absolute', top: '25%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
              <h1 style={{margin:'2%', marginTop:'8%', fontSize: '45px', fontFamily:'Garamond', }}>EDITORIAL</h1> <br />
              <Button variant="outline-light" style={{ borderRadius: '0', height: '45px', width: '100px', ':hover': { backgroundColor: 'black', color: 'white' }}}>View</Button>
            </div>
          </div>
        </Col>

        <Col xs={8} md={4}>
  <div style={{ position: 'relative' }}>
    <img src={Food3}
    alt="Your abc" style={{ width: '100%', height: '90vh',  filter: 'brightness(0.7) blur(1px)' }} />
    <div style={{ position: 'absolute', top: '25%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
      <h1 style={{ fontSize: '45px', fontFamily: 'Garamond', whiteSpace: 'nowrap', marginTop:'2%' }}>FOOD & SERVE</h1> <br />
              <Button variant="outline-light" style={{ borderRadius: '0', height: '45px', width: '100px', ':hover': { backgroundColor: 'black', color: 'white' }}}>View</Button>
            </div>
          </div>
         </Col>

        <Col xs={8} md={4}>
          <div style={{ position: 'relative' }}>
            <img src={Baked} 
            alt="Your abc" style={{ width: '100%', height:'90vh', filter: 'brightness(0.5) blur(1px)'}} />
            <div style={{ position: 'absolute', top: '25%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
            <h1 style={{ fontSize: '45px', fontFamily: 'Garamond', whiteSpace: 'nowrap', marginTop:'2%' }}>BAKED GOODS</h1> <br />
            <Button variant="outline-light" style={{ borderRadius: '0', height: '45px', width: '100px', ':hover': { backgroundColor: 'black', color: 'white' }}}>View</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
<br />



    <div className='d-flex justify-content-center align-items-center'>
    <PinterestIcon style={{  marginLeft: '20px' }}></PinterestIcon>
    <FacebookIcon style={{  marginLeft: '20px' }}></FacebookIcon>
    <TwitterIcon style={{  marginLeft: '20px' }}></TwitterIcon>
    <InstagramIcon style={{  marginLeft: '20px' }}></InstagramIcon>
    </div>
<br />
<div>
      <span className='Text' style={{ display: 'block', textAlign: 'center' }}>© 2035 by The Art of Food. Powered and secured by Wix</span>
    </div>
    </>
  );
}

export default Portfolio;