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
import { useEffect } from "react";

const TrainingClasses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container>
        <h1 className="text-center mt-5">Training Classes Category</h1>
        <p>
          Let’s face it, dogs these days are part of the family. But as much as
          we treat them like furry humans, they need some help to act like it!
          We cover the essentials that your dog needs to be a well-behaved
          member of your family.
        </p>
      </Container>

      <Container>
        <MDBCardGroup className="coreValues rounded ">
          <MDBCard className="border-0 p-2 ">
            <MDBCardImage
              className="training-class-img rounded-5 "
              src="https://images.unsplash.com/photo-1541882430670-a57064b3f448?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGRvZyUyMHRyYWluaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <h4 className="text-center">
                <b>Adult Manner Training</b>
              </h4>
              <MDBCardText>
                This class is designed to discipline and change your dog’s
                behavior to make sure he can keep his brain in any situation. If
                you want to get into therapy work, dog sports, or just want your
                best friend to go out and about with you, this class is a
                perfect choice!
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
              className="training-class-img rounded-5 "
              src="https://images.unsplash.com/photo-1629957655360-5eeccf5253a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHB1cHB5JTIwdHJhaW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <h4 className="text-center">
                <b>Puppy Kindergarten</b>
              </h4>
              <MDBCardText>
                If you recently added a new puppy to your family, you're in the
                right place! Puppy Kindergarten is the perfect place to start
                for puppies under 1 year of age. We address unwanted behaviors like
                chewing, jumping, and pulling on the leash.
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
              className="training-class-img rounded-5 "
              src="https://images.unsplash.com/photo-1601758174609-3a789c37dfa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHB1cHB5JTIwdHJhaW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <h4 className="text-center">
                <b>Private Lessons</b>
              </h4>
              <MDBCardText>
                Some dogs need more individualized instruction than we can
                provide in a group class, and that's okay! Whether your dog is
                reactive around other dogs, has specific behavioral issues you
                need to address, private lessons are a great option.
              </MDBCardText>
              <MDBCardText>
                <Link to="/privatelessons">
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
