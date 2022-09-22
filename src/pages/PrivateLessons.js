import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "../css/PrivateLesson.css";
import { useEffect } from "react";
import { Tabtitle } from '../components/GeneralFunctions';


const PrivateLessons = () => {
  Tabtitle('PrivateLessons | Charming Pets');
  useEffect(() => {
    window.scrollTo(0, 0)    
  }, [])

  return (
  <>
  <div className='header text-center'>Private Lessons</div><br></br>
  <Container className="content"><p>Some dogs need more individualized instruction than we can provide in a group class, and that's okay! 
    Whether your dog is reactive around other dogs, has specific behavioral issues you need to address, or you just can't find a group class that fits your schedule, private lessons are a great option. 
    These one-on-one sessions allow you to work with a trainer at length to discuss and address the needs of your dog. 
    Please check out our FAQ for help on what to bring and more details on what we can cover.</p>
    <br></br>
    <p><b>Booking Policy</b></p>
    <p>We require payment for your appointment at the time of booking. Cancellations need to be made at least twenty-four hours before your scheduled appointment, by phone or e-mail, in order not to incur a cancellation fee. 
      Cancellations and/or reschedules made with less than twenty-four hours’ notice and no-shows will be charged the full price of the appointment.</p>
    <p><span className="text-danger">Please also send us your dog's most recent shot records ahead of time. </span>Dogs 6 months and older must be up to date on <b>Parvo, Distemper, Bordetella and Rabies.</b></p>
    <br></br>
    <p><b>Aggression</b></p>
    <p>We do not work with aggressive dogs and they are not allowed in the facility for liability reasons. 
      Please contact a behaviorist to help with aggression. We do work with frustrated greeters and fearful dogs in private lessons only. 
      If you're not sure whether your dog is exhibiting aggression or fear, please give us a call or fill out our contact form.</p>
    <br></br>
    <p><b>Scheduling</b></p>
    <p>Please call the facility at <span className="phone">817-741-3647</span> to schedule a private or make-up lesson! Appointments must be scheduled at least 24 hours in advance and must be paid for when booked.</p>
    <p>If you'd like to schedule an evaluation or in-home lesson, please contact us with your dog's age, breed, and previous training experience.</p>
    <br></br>
    <hr className="line"></hr>
    <br></br>
    <p><b>Asked a trainer</b></p>
    <p className="ask">If you’re not sure what best for your pet, you can contact us to further assist you. Please contact us through email or by phone call and we’ll be happy to help you.</p>

    <Link className="button-link-style" id="btn-private-contact" to="/contact">
             Contact Us!
    </Link>
  </Container>
  
  </>
  )
};

export default PrivateLessons;
