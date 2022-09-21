import Container from "react-bootstrap/Container";
import "../css/PuppyKindergarten.css";
import ViewManners from "../components/ViewMannersUser";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tabtitle } from '../components/GeneralFunctions';

const Manners = () => {
  Tabtitle('Manners | Charming Pets');
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <Container className="master-Class">
        <Link
          to="/trainingclasses"
          className="fs-5 mb-4 d-inline-block"
        >
          <FontAwesomeIcon icon={faArrowAltCircleLeft}></FontAwesomeIcon>
          Back
        </Link>
        <p className="text-center">
          MANNERS CLASS TRAINING FOR ADULT DOGS (1 YRS OLD AND ABOVE)
        </p>
        <h4 className="text-center">
          Enrollments for August 25, 2022 - October 24, 2022
        </h4>
      </Container>
      <Container>
        <ViewManners />
        <h5 className="text-start mb-5 mt-5">
          <b>Frequently Asked Questions</b>
        </h5>
        <h6 className="text-start mb-3">
          <b>What do I need to start a class?</b>
        </h6>
        <p className="text-start">
          Please attend the mandatory orientation prior to starting class. Your
          dog needs to be current on all vaccines or titers. When you register
          with us, you will be required to read the liability waiver and check
          the box which requires your dog to be fully vaccinated. Please send us
          your dog's most recent shot records ahead of time. Dogs 6 months and
          older must be up to date on Parvo, Distemper, Bordetella and Rabies.
        </p>

        <h6 className="mt-5 mb-3">
          <b>Do you work with aggressive dogs?</b>
        </h6>

        <p className="text-start">
          No, aggressive dogs are not allowed in the facility for liability reasons. 
          Please contact a behaviorist to help with aggression. 
          We do work with frustrated greeters and fearful dogs in private lessons only. 
          If you're not sure whether or not your dog is exhibiting aggression, 
          please give us a call or fill out the contact form above.
        </p>
        <Link
          to="/Faq">
          
          Read more
        </Link>

    
      </Container>
    </>
  );
};

export default Manners;
