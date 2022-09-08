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
  MDBCol,
  MDBCardGroup
} from 'mdb-react-ui-kit';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const OurStory = () => {
  return (


    <div className='aboutus p-2'>
    <Container>
        <h1 className="text-center">About Us</h1>
    <MDBCard style={{ maxWidth: '100%' , maxHeight:'50%', border:'0'}}>
      <MDBRow className=''>
        <MDBCol md='6'>
          <MDBCardImage className='image1' src='https://api.time.com/wp-content/uploads/2015/04/dog-child.jpg' alt='Dog' fluid />
        </MDBCol>
        <MDBCol md='6' >
          <MDBCardBody>
            <MDBCardTitle className="about-us"style={{textAlign: "center"}}><b>Our Story</b></MDBCardTitle>
            <MDBCardText>
            Charmiing Pets is the largest specialty pet retailer of services and solutions for the lifetime needs of pets. 
            At Charming Pets, we love pets, and we believe pets make us better people. Every day with every connection.
            
            </MDBCardText>
            <MDBCardText>
            Charmiing Pets operates approximately 100 pet stores Worldwide,
            The retailer provides a broad range of competitively priced pet food and products,
            as well as services such as dog training, pet grooming, pet boarding, Charming Pets Day Camp™ and pet adoption.  
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
            <MDBCardTitle className="about-us" style={{textAlign: "center"}}><b>Our Advocacy</b></MDBCardTitle>
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

    <Container >
    <h1 className="text-center">Core Values</h1>
    
    </Container>
  
    <Container className="border-box border" >
    <Row className="Border-story"> 
        <Col xs className="text-center"> 
        <MDBCardImage className='ourStoryImage mb-3' src='https://cdn.sci.news/images/enlarge6/image_7527e-Dog-Ownership.jpg' alt='Dog' fluid />
        <MDBCardText className="core-descpiption text-dark">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
       </MDBCardText> 
        </Col>

        <Col xs={{ order: 12 }}className="text-center"> 
        <MDBCardImage className='ourStoryImage mb-3' src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/guy-and-his-dog-golden-retriever-city-park-royalty-free-image-1609928545.' alt='Dog' fluid />
        <MDBCardText className="core-descpiption text-dark">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
       </MDBCardText>   
       </Col>

        <Col xs={{ order: 1 }}className="text-center">
        <MDBCardImage className='ourStoryImage mb-3' src='https://westernanimalclinic.ca/wp-content/uploads/2017/12/AdobeStock_96365900-1024x683.jpeg' alt='Dog' fluid />
        <MDBCardText className="core-descpiption text-dark">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
       </MDBCardText> 
         </Col>
         </Row>
          {/* New row */}
         <Row className="mt-5">
        <Col xs className="text-center"> 
        <MDBCardImage className='ourStoryImage mb-3' src='https://people.com/thmb/O7UZ7FKp7AHosbxE4B8J3wL7ZPE=/2000x1333/filters:fill(auto,1)/talking-to-pet-5d349cb2bb69468dbce48688e170ce52.jpg' alt='Dog' fluid />
        <MDBCardText className="core-descpiption text-dark">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
       </MDBCardText> 
        </Col>

        <Col xs={{ order: 12 }}className="text-center"> 
        <MDBCardImage className='ourStoryImage mb-3' src='https://lovetv.co/wp-content/uploads/2017/06/bigstock-Portrait-of-an-happy-couple-pl-90903890.jpg' alt='Dog' fluid />
        <MDBCardText className="core-descpiption text-dark">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
       </MDBCardText>   
       </Col>

        <Col xs={{ order: 1 }}className="text-center">
        <MDBCardImage className='ourStoryImage mb-3' src='https://peacefulpetsaquamation.com/wp-content/uploads/2017/05/Featured-Image.jpg' alt='Dog' fluid />
        <MDBCardText className="core-descpiption text-dark">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
       </MDBCardText> 
         </Col>
         </Row>
         


      
    </Container>


  </div>


     

  );
};


export default OurStory;

  