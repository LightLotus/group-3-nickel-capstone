import Container from "react-bootstrap/Container";
import "../css/Ourstory.css";
import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';





const OurStory = () => {
  return (

<>

    <Container>
        <h1>ABOUT US</h1>
    <MDBCard style={{ maxWidth: '100%' , maxHeight:'50%', border:'0'}}>
      <MDBRow className='g-3'>
        <MDBCol md='6'>
          <MDBCardImage className='image1' src='https://api.time.com/wp-content/uploads/2015/04/dog-child.jpg' alt='Dog' fluid />
        </MDBCol>
        <MDBCol md='6' >
          <MDBCardBody>
            <MDBCardTitle style={{textAlign: "center"}}>Our Story</MDBCardTitle>
            <MDBCardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            </MDBCardText>
            <MDBCardText>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            </MDBCardText>
  
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    </Container>
 
     
<Container  className="card2">
        
    <MDBCard style={{ maxWidth: '100%' , maxHeight:'50%',border:'0'}}>
      <MDBRow className='g-5'>
        
        <MDBCol md='6' >
          <MDBCardBody>
            <MDBCardTitle style={{textAlign: "center"}}>Our Advocacy</MDBCardTitle>
            <MDBCardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            
            </MDBCardText>
            <MDBCardText>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            </MDBCardText>
  
          </MDBCardBody>
        </MDBCol>
        <MDBCol md='6'>
          <MDBCardImage src='https://images.squarespace-cdn.com/content/v1/544baed0e4b0f81e05e9ce4d/1595363936789-3J5YT2Q4R7QDONWV43BH/Naming+Your+Dog?format=1500w' alt='Dog' fluid />
        </MDBCol>
      </MDBRow>
    </MDBCard>
    </Container>

    <Container>
    <h1>Core Values</h1>
    <MDBCard style={{ maxWidth: '100%' , maxHeight:'100%',}}>

    </MDBCard>
          <MDBCardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            </MDBCardText>
            <MDBCardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            </MDBCardText>

    </Container>

  </>


     


 

     

  );
};

const OurStorySection2 = () => {
  return <div><h1>testing</h1></div>;
};


export default OurStory;

  