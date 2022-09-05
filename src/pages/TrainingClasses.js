import Container from "react-bootstrap/Container";
import "../css/TrainingClasses.css";
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
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const TrainingClasses = () => {
  return (
    <>
      <Container>
        <h1 className="text-center mt-5">Approach to Training</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </Container>

      <Container>
        <MDBCardGroup className="coreValues rounded ">
          <MDBCard className="border-0 p-2 ">
            <MDBCardImage
              className="rounded-5"
              src="https://static8.depositphotos.com/1004529/988/i/600/depositphotos_9887128-stock-photo-sharpei-dog.jpg"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <h4 className="text-center">Manners</h4>
              <MDBCardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </MDBCardText>
              <MDBCardText>
                <Link to="/manners">
                  <MDBBtn className="buttones">Enroll Now</MDBBtn>
                </Link>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>

          <MDBCard className="border-0 p-2 ">
            <MDBCardImage
              className="rounded-5"
              src="https://districtdogs.com/wp-content/uploads/2019/10/DistrictDogs-117-1024x683.jpg"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <h4 className="text-center">Puppy Kindergarten</h4>
              <MDBCardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </MDBCardText>
              <MDBCardText>
                <Link to="/puppykindergarten">
                  <MDBBtn className="buttones">Enroll Now</MDBBtn>
                </Link>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>

          <MDBCard className="border-0 p-2 ">
            <MDBCardImage
              className="rounded-5"
              src="https://wagurtaildogtraining.com/wp-content/uploads/2018/04/shutterstock_281482349.jpg"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <h4 className="text-center">Private Lessons</h4>
              <MDBCardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </MDBCardText>
              <MDBCardText>
                <Link to="/privatelesson">
                  <MDBBtn className="buttones">Enroll Now</MDBBtn>
                </Link>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCardGroup>
      </Container>
    </>
  );
};

export default TrainingClasses;
