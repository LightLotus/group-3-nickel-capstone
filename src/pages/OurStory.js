import Container from "react-bootstrap/Container";
import "../css/Ourstory.css";
import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBCardGroup,
} from "mdb-react-ui-kit";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import kevinpics from '../images/kevin2.png';
import dogchild from "../images/dog-child.png";
import { useEffect } from "react";
import "../css/Ourstory.css";

const OurStory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="aboutus p-2">
      <Container>
        <h1 className="text-center">About Us</h1>
        <MDBCard style={{ maxWidth: "100%", maxHeight: "50%", border: "0" }}>
          <MDBRow className="">
            <MDBCol md="6">
              <MDBCardImage
                className="kevin-image"
                src={dogchild}
                alt="Dog"
                fluid
              />
            </MDBCol>
            <MDBCol md="6">
              <MDBCardBody>
                <MDBCardTitle
                  className="about-us"
                  style={{ textAlign: "center" }}
                >
                  <b>Our Story</b>
                </MDBCardTitle>
                <MDBCardText>
                  We started out as a small organization volunteering in street
                  feeding and advocates of animal welfare. But in 2010 our
                  passion for training animals became a dream come true as we
                  ventured into the dog training world. In 2013, we decided to
                  open a training center “Charming Pets”, a positive
                  reinforcement-based training center that focused on the human
                  side of dog training.<br></br> <br></br>In January of 2017,
                  our staff moved to their current location and rebranded to
                  “Charming Pets”. We are a true believer that “Dreams do come
                  true” when you are dedicated and keep looking forward!
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </Container>

      <Container className="card2">
        <MDBCard style={{ maxWidth: "100%", maxHeight: "50%", border: "0" }}>
          <MDBRow className="g-5">
            <MDBCol md="6">
              <MDBCardBody>
                <MDBCardTitle
                  className="about-us"
                  style={{ textAlign: "center" }}
                >
                  <b>Our Advocacy</b>
                </MDBCardTitle>
                <MDBCardText>
                  Our focus is on building an inclusive way of being with
                  animals that promotes a healthier lifestyle. Hence, we
                  advocate for a shift in paradigm that uses an animal-centered
                  approach that views them as partners, leaders and co-habitants
                  on this planet. We advocate by actively questioning the
                  validity of human-centered systems currently used to define
                  and care for animal persons. Additionally, we advocate for
                  shifts not only in behavior, but in our language and terms
                  that represents a more conscientious, social justice view when
                  caring for animal persons.
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
            <MDBCol md="6">
              <MDBCardImage
                className="kevin-image w-75"
                src="https://images.unsplash.com/photo-1509205477838-a534e43a849f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBldCUyMGNhcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                alt="Dog"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </Container>
      <Container>
        {" "}
        <h1 className="core-values text-center">Core Values</h1>
        <p>
          We believe that working together and treating each other with respect
          and courtesy is essential to providing top quality, compassionate,
          personal, and professional pet care.
        </p>
      </Container>

      {/* Core Vaues Section */}
      <Container className="core-values-wrapper border-box border">
        <div className="values-container">
          <h3 className="values-container-h3">EXCEPTIONAL CUSTOMER SERVICE</h3>
          <p>
            We do our utmost to deliver the best pet care service for the pet.
            Every patient and owner is treated with great care and respect
            regardless of the reason for the visit. We assure high quality care
            in a compassionate, personal and professional manner.
          </p>
        </div>
        <div className="values-container">
          <h3 className="values-container-h3">HUMAN ANIMAL BOND</h3>
          <p>
            We understand the unique place that pets hold in today’s families
            and how important pets are to their owners. Helping people and their
            pets on a daily basis is a privilege which makes our working
            environment rewarding and enjoyable.
          </p>
        </div>
        <div className="values-container">
          <h3 className="values-container-h3">QUALITY PET CARE</h3>
          <p>
            We believe in compassionate, personal, and professional pet care.
            This means both the client and the pet is treated with utmost care
            and respect. It means our doctors will advise clients on the best
            method of prevention and treatment available that suits their needs.
          </p>
        </div>
        <div className="values-container">
          <h3 className="values-container-h3">COMPASSION</h3>
          <p>
            We believe in the non-judgmental awareness of the needs of owners
            and their pets and we strive to address those needs in the best
            possible way.
          </p>
        </div>
        <div className="values-container">
          <h3 className="values-container-h3">CONTINUAL GROWTH</h3>
          <p>
            We believe that each staff member has a responsibility to embrace
            life long learning. This practice keeps the staff well informed so
            that they grow as individuals, and it enables us to pass on new
            knowledge to our clients.
          </p>
        </div>
        <div className="values-container">
          <h3 className="values-container-h3">DEDICATION</h3>
          <p>
            At Caring Pet Hospital we are dedicated to our job and to your pet’s
            health. We believe that dedication is required in order to provide
            top quality pet care. Our trained staff will ensure that your pet
            receives that attention that it needs to make a speedy recovery.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default OurStory;
