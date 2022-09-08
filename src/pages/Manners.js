import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import "../css/PuppyKindergarten.css";
import ViewManners from "../components/ViewMannersUser";

const Manners = () => {
  return (
    <>
      <Container className="master-Class text-center">
        <p>MANNERS CLASS</p>
      </Container>
      <Container>
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

        <h6 className="text-start mt-5 mb-3">
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
      </Container>
    </>
  );
};

export default Manners;
