import { Link } from "react-router-dom"
import "../css/AdoptionPetdetails.css";
import React from 'react';
import Container from 'react-bootstrap/Container';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

const AdoptionPetDetails = () => {
  return (
    <Container>

<MDBCard className="Adopt-card border-0"style={{ maxWidth: '100%' }}>
      <MDBRow className='g-0'>
        <MDBCol md='6'>
          <MDBCardImage src='https://files.globalgiving.org/pfil/15755/pict_large.jpg?m=1384977298000' alt='...' fluid />
        </MDBCol>
        <MDBCol md='6'>
          
        
          <MDBCardBody >
          <div className="d-flex flex-row mb-3">
        <div className="px-0">Status: available</div>
        <div className="px-4">Status: available</div>
        <div className="px-3">Status: taken</div>
        </div>
            <MDBCardTitle><h2>Blacky</h2></MDBCardTitle>
            <MDBCardText>
            Blacky is a beautiful lady that enjoys the company of other dogs. 
            She can still be shy around people but is very calm and will gladly 
            accept treats!. 
            </MDBCardText>
            
            <MDBCardText className="petdetails">
          
            <div>Breed: Askal</div>
            <div>Estimated Birthday: July 3, 1986</div>
            <div>Color: Black</div>
            <div>Sex: Male</div>
            </MDBCardText>

          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>

    <Link to="/adoption" className="adopt-button button-link-style">Adopt Blacky</Link>
      
    </Container>
  );
}

export default AdoptionPetDetails