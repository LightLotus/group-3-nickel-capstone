import Container from "react-bootstrap/Container";
import Table from 'react-bootstrap/Table';
import "../css/PuppyKindergarten.css";




const PuppyKindergarten = () => {
  return (
<>
   <Container className="master-Class"><p>MANNERS CLASS</p></Container>
    <Container><h4>Enrollments for August 25, 2022 - October 24, 2022</h4></Container>
    <Container>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Dates</th>
          <th>Time</th>
          <th>Days</th>
          <th>Trainer</th>
          <th>Available Slot</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Jul 13 2022 - Oct 26 2022</td>
          <td>8:10 PM - 9:00 PM</td>
          <td>Wed</td>
          <td>Nica</td>
          <td>10/10</td>
          <td className="text-danger">full</td>
        </tr>
        <tr>
          <td>Jul 13 2022 - Oct 26 2022</td>
          <td>8:10 PM - 9:00 PM</td>
          <td>Wed</td>
          <td>Nica</td>
          <td>10/10</td>
          <td className="text-danger">full</td>
        </tr>
        <tr>
          <td>Jul 13 2022 - Oct 26 2022</td>
          <td>8:10 PM - 9:00 PM</td>
          <td>Wed</td>
          <td>Kevin</td>
          <td>8/10</td>
          <td><a href="#">Enroll</a></td>
        </tr>
      </tbody>
      
    </Table>

    <h5 className="text-start mb-5 mt-5"><b>Frequently Asked Questions</b></h5>
    <h6 className="text-start mb-3" ><b>What do I need to start a class?</b></h6>
    <p className="text-start">Please attend the mandatory orientation prior to starting class. 
      Your dog needs to be current on all vaccines or titers.  
      When you register with us, you will be required to read the liability 
      waiver and check the box which requires your dog to be fully vaccinated. 
      Please send us your dog's most recent shot records ahead of time. Dogs 6 months 
      and older must be up to date on Parvo, Distemper, Bordetella and Rabies.</p>

      <h6 className="mt-5 mb-3"><b>What do I need to start a class?</b></h6>

      <p className="text-start">Please attend the mandatory orientation prior to starting class. Your dog needs to be current on all vaccines or titers.
        When you register with us, you will be required to read the liability waiver and check the box which requires your dog to be fully vaccinated. 
        Please send us your dog's most recent shot records ahead of time. Dogs 6 months and older must be up to date on Parvo, Distemper, Bordetella and Rabies.</p>

      <h6 className="text-start mt-5 mb-3"><b>What do I need to start a class?</b></h6>
      <p className="text-start">Please attend the mandatory orientation prior to starting class. Your dog needs to be current on all vaccines or titers.
        When you register with us, you will be required to read the liability waiver and check the box which requires your dog to be fully vaccinated. 
        Please send us your dog's most recent shot records ahead of time. Dogs 6 months and older must be up to date on Parvo, Distemper, Bordetella and Rabies.</p>
    
    </Container>
    

    </>
  );
  };



export default PuppyKindergarten;
