import Ratio from 'react-bootstrap/Ratio';
import Container from "react-bootstrap/Container";
import {MDBBtn} from 'mdb-react-ui-kit';
import "../css/Adoption.css";
import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
const Adoption = () => {
  return (
    <Container>
      <div style={{ width: 1100, height: "auto" }}>
        <Ratio aspectRatio="16x9">
          <embed
            type="image/svg+xml"
            src="https://assets.mixkit.co/videos/preview/mixkit-dog-sitting-on-log-1550-large.mp4"
            fluid
          />
        </Ratio>
      </div>
      <div className="mt-5 mb-3">
        <h5>
          <b>Adopt from Best Friends Animal Sanctuary</b>
        </h5>
      </div>
      <p className="text-start">
        When you adopt a furry (or feathered) friend from the Sanctuary, you’re
        not only changing that pet’s life, you’re helping to Save Them All.
      </p>
      <p className="text-start">
        Not ready to adopt yet? Help care these rescued animals with your
        donation.
      </p>
      <MDBBtn href="#" className="button-addopt ">
        Donate
      </MDBBtn>

      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://files.globalgiving.org/pfil/15755/pict_large.jpg?m=1384977298000"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <Link
                to="/adoptionpetdetails"
                className="button-link-style w-100 text-center"
              >
                <b>ADOPT "BLACKY"</b>
              </Link>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPh8BpiUbI3Z0pSnWkl7DKDO3TPkUZSLJqKXxx96YC6DZ4Z1UuHEV76Uw3NOpOs7QAe9k&usqp=CAU"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <Link
                to="/adoptionpetdetails"
                className="button-link-style w-100 text-center"
              >
                <b>ADOPT "BLACKY"</b>
              </Link>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKd7Ja-U0HUPvdR9swyXB-oVkVTUyVCAk5iKVTA2kIwTbOyE6b3iRMBPR8PtDA3mbuSkY&usqp=CAU"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <Link
                to="/adoptionpetdetails"
                className="button-link-style w-100 text-center"
              >
                <b>ADOPT "BLACKY"</b>
              </Link>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <MDBRow className="row-cols-1 row-cols-md-3 g-4 mt-5">
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://www.cesarsway.com/wp-content/uploads/2015/06/why-dogs-end-up-in-shelter--1024x683.jpg"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <Link
                to="/adoptionpetdetails"
                className="button-link-style w-100 text-center"
              >
                <b>ADOPT "BLACKY"</b>
              </Link>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnShbDdwPHIsUbFL6yHUDwZbzON9d-AO9tTytkRlgmoHd5x1JAxNx_EjGWEJmro3LmJMk&usqp=CAU"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <Link
                to="/adoptionpetdetails"
                className="button-link-style w-100 text-center"
              >
                <b>ADOPT "BLACKY"</b>
              </Link>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLY7n2gIlixE6F_-jz3YsUxpphwRAcVAKZWWzA969iXIGpKXASzg010f5KdfRsHazoE0k&usqp=CAU"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <Link
                to="/adoptionpetdetails"
                className="button-link-style w-100 text-center"
              >
                <b>ADOPT "BLACKY"</b>
              </Link>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <MDBRow className="row-cols-1 row-cols-md-3 g-4 mt-5">
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://www.thestreet.com/.image/t_share/MTY4NjQ3NjUyMzA4NDkzOTU5/where-should-you-buy-your-dog.jpg"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <Link
                to="/adoptionpetdetails"
                className="button-link-style w-100 text-center"
              >
                <b>ADOPT "BLACKY"</b>
              </Link>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEh0k0vz_qWlL2zqoHS2bdudwqNZ6LirS6qGwtZqQeINAkU-tJmn2HxhE5zxwsBEdQenc&usqp=CAU"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <Link
                to="/adoptionpetdetails"
                className="button-link-style w-100 text-center"
              >
                <b>ADOPT "BLACKY"</b>
              </Link>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOc0EocSNU28QvuXmMme8IvfmCtQ0x-a08NApnJK27e6eM5X9Q2ZQOcD4-VscSguR_xsk&usqp=CAU"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <Link
                to="/adoptionpetdetails"
                className="button-link-style w-100 text-center"
              >
                <b>ADOPT "BLACKY"</b>
              </Link>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </Container>
  );
};

export default Adoption;