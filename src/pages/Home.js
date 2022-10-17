import pic from "../images/bg.webp"
import React, { useEffect } from 'react';
import Login from "./login";
import SignUp from "./signup";
import profile from "../images/u.png";
import email from "../images/email.png";
import pass from "../images/pass.png";
import map from "../images/map-image.png"
import fb from "../images/fb.png";
import insta from "../images/insta.webp";
import pin from "../images/pin.png";
import twitter from "../images/twitter.webp";
import healthcare from "../images/healthcare.jpeg";
import health from "../images/health.jpeg"
import './Home.css';
import { Container, Row, Col } from 'react-grid-system';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';






import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'



  

  


export default function Home (){
  
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/account');
    }
  }, [user]);

  


  
    return(
      <>
      <Container fluid>
        <Row sm={3}>
          
        <Col sm={4}>
        
        <div className='main'>
         
            <div className="health-img">
             
                
                  
                  <img src={health} alt="healthcare" className='healthcare'/>
                  
                  </div>  
          
                  </div>  

      
        </Col>
        <Col sm={4}>
         
        
            
              <div className="description">
    
                    <p>
                    What is Lorem Ipsum?
essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                  
              
            </div>
         
        </Col>
        <Col sm={4}>
         
        <div className='main'>
        
              <div className='sub-main'>
                <div>
              <div className='imgs'>
                <div className='container-image'>
                  <img src={profile} alt="profile" className='profile'/>
                </div>
              </div> 
              
              <div className='login-button'>
              
                <GoogleButton style={{marginTop:'20%'}} onClick={handleGoogleSignIn}/>
              
                 
              
              </div>
               
              
    

               </div>
               </div>
               </div>


              
        
        </Col>

        </Row>
        <Row sm={3}>
        <Col sm={12}>
          <div className="main">    
            <div className='second-row'>
              <div className="heading">
                <h3>
                  Features
                  <div class="line"></div>
                </h3>
                           
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br></br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              </div>
            </div>
          </div> 
         
        </Col>
        </Row>
        <Row sm={3}>
        <Col sm={12}>
          <div className="main">    
            <div className='second-row'>
              <div className="heading">
                <h3>
                  Pricing
                  <div class="line1"></div>
                  
                </h3>
                           
              <p>
              Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus, ad pro quaestio laboramus. Ei ubique vivendum pro. At ius nisl accusam lorenta zanos paradigno tridexa panatarel.
              </p>
              </div>
            </div>
          </div> 
         
        </Col>
        </Row>
        <Row sm={2}>
        <Col sm={12}>
          <div className="main">    
            
              <div className="contact">
                <div className="address">
                <h3>
                  Contact Us
                </h3>
                           
              <p>
                Tostot Software Solutions Private Limited<br></br>
                Technology Business Incubator,<br></br>
                First Floor, Excellence Building,<br></br>
                Thiagarajar Advanced Research Centre,<br></br>
                Thiagarajar College of Engineering,<br></br>
                Madurai – 625 015,<br></br>
                TamilNadu, India.

              </p>
              </div>
              <div className="map-container">
                <div className="map">
                  <img src={map} alt="map" />
                </div>
                
                <div className="social-container">
                  <img src={fb} alt="fb" className="fb"/>
                  <img src={insta} alt="insta" className="insta"/>
                  <img src={twitter} alt="insta" className="twitter"/>
                  <img src={pin} alt="insta" className="pin"/>
                </div>
              </div>
              
            </div>
          </div> 
         
        </Col>
        </Row>
      </Container>
                 
      
            
    </>
   
  )
     
    
}