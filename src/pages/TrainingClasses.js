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
        Let’s face it, dogs these days are part of the family. 
        But as much as we treat them like furry humans, they need some help to act like it!
        In Basic Manners, we cover the essentials that your dog needs to be a well-behaved
        member of your family. You’ll learn things like not jumping up, coming when called,
        and walking nicely on a leash, as well as your standard sit, down, and stay!
        We also work on impulse control, the “place” behavior, and sitting at the door, 
        all of which discourage naughty behavior like stealing food, darting out the door, 
        and begging/counter surfing.
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
              Ready to take your dog’s training to the next level? In Advanced Manners,
              we build on your basic foundation to add distractions, leave treats behind,
              and introduce some tricks to keep it interesting! 
              <br></br>
          
              This class is designed to 
              take your dog’s behavior above and beyond to make sure he can keep his brain 
              in any situation. If you want to get into therapy work, dog sports, or just want
              <br></br>
              your best friend to go out and about with you, Advanced Manners is the place to be!
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
              If you recently added a new puppy to your family, you're in the right place!
              Puppy Kindergarten is the perfect place to start for puppies between 8 weeks
              and 16 weeks. <br></br>
              <br></br>
              This 5 week class will cover everything from crate games and potty
              training to foundation behaviors like name, touch, sit, and more! We'll also address 
              unwanted behaviors like chewing, jumping, and pulling on the leash. Last but not least,
              we'll help you socialize your puppy to strange noises.

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
              Some dogs need more individualized instruction than we can provide in a group class,
              and that's okay! Whether your dog is reactive around other dogs, has specific behavioral
              issues you need to address, or you just can't find a group class that fits your schedule, 
              private lessons are a great option. These one-on-one sessions allow you to work with a trainer
              at length to discuss and address the needs of your dog. Please check out our FAQ for help on what
              to bring and more details on what we can cover.

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
