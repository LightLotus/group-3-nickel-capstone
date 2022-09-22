import Ratio from "react-bootstrap/Ratio";
import Container from "react-bootstrap/Container";
import "../css/Adoption.css";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "../css/Adoption.css";
import { Link } from "react-router-dom";
import { Tabtitle } from "../components/GeneralFunctions";

const Adoption = () => {
  Tabtitle("Adoption | Charming Pets");

  const [loading, setLoading] = useState(true);
  const [adoppets, setAdoppets] = useState([]);

  // code to display adoption animals
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/adoption`).then((res) => {
      if (res.status === 200) {
        setAdoppets(res.data.adoption);
        setLoading(false);
      }
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return <h4>Loading Pets...</h4>;
  } else {
    var adoption_HTMLTABLE = "";
    adoption_HTMLTABLE = adoppets.map((pet, index) => {
      return (
        <div className="adoption-items" key={index}>
          <img
            src={pet.imgsrc}
            className="card-img-top adoption-img"
            alt="..."
          />
          <div className="card-body mt-3">
            <h5 className="card-title">
              <strong>{pet.petname}</strong>
            </h5>
            <p className="card-text">{pet.description}</p>
            {!pet.petstatus ? (
              <Link
                to={`/adoption-details/${pet.id}`}
                className="button-link-style"
              >
                {`Adopt ${pet.petname}`}
              </Link>
            ) : (
              <button className="button-link-style">Unavailable</button>
            )}
          </div>
        </div>
      );
    });
  }

  return (
    <Container>
      <h1 className="mt-5">
        <span className="text-dark">Welcome to </span>Charming Pets Adoption
      </h1>
      <div className="mx-auto" style={{ width:"90%" , height: "auto" }}>
        <Ratio aspectRatio="16x9">
          <embed controls autoplay
            type="image/svg+xml"
            src="https://player.vimeo.com/video/179738694?title=0&portrait=0&byline=0&autoplay=1&loop=1&transparent=1"
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
      {/* <button href="#" className="button-addopt ">
        Donate through PayPal
      </button> */}
      <br></br>
      <br></br>
      <h2 className="gcash mb-5">Help care these rescued animals with your donation.<br></br>
      You can donate through GCASH Number:<span className="phone"> 0912-345-7689 </span>
      donate.</h2>
      <br></br>
      <br></br>
      <h3 className="text-center mt-5">
        <strong>Meet Our Fur Babies</strong>
      </h3>

      



      <div className="adoption-container">{adoption_HTMLTABLE}</div>

      {/* <MDBRow className="row-cols-1 row-cols-md-3 g-4">
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
              src="https://www.rd.com/wp-content/uploads/2017/11/05-amazon-9-Powerful-Ways-to-Give-to-Charity-Without-Breaking-the-Bank_527124532-Pongsatorn-Singnoy.jpg"
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuQfx6quEFHMuztGsYk9gNRdv3E6HSxFiM6MIKSyy2yZBKjWdfO4XuCnhmZbAJADC9SQ0&usqp=CAU"
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxhHO9lXNea0ysUtswkot7F5qq5JxokUePxmBoYW52aOyG0VYt9wAlB1v7dV0yL_-u9vI&usqp=CAU"
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
      </MDBRow> */}
    </Container>
  );
};

export default Adoption;
