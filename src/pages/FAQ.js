import Accordion from 'react-bootstrap/Accordion';
import "../css/FAQ.css";
import { useEffect } from 'react';
import { Tabtitle } from '../components/GeneralFunctions';
import { Link } from "react-router-dom";

const FAQ = () => {
  Tabtitle('Faqs | Charming Pets');
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return ( 
    <>
    <div className='header text-center mt-5 mb-5' id='head-faq'>FAQs</div>
      <Accordion className="faq" defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header className='btn-head mb-3 shadow'>Should I take a puppy class or a manners class?</Accordion.Header>
          <Accordion.Body className="accordion-body mb-2 shadow"><small>
          If your puppy is four months or younger on the class start date,
          you should enroll into Puppy Kindergarten.  If your puppy is over
          four months old when the class begins, you should take a Basic Manners class.
          Right on the border? Contact us and we can discuss which class is the best fit for your dog.</small>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className='mb-3 shadow'>Can more than one person come?</Accordion.Header>
          <Accordion.Body className="accordion-body mb-2 shadow"><small>
          Absolutely! We recommend that one person works with the dog at a time, but other family
          members or friends are welcome to attend class and watch. If you bring children under 10,
          we suggest bringing a book or iPad to keep them occupied.</small>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header className='mb-3 shadow'>I have more than one dog! Can they all come to class? Do you have multi-dog discounts?</Accordion.Header>
          <Accordion.Body className="accordion-body mb-2 shadow"><small>
          We require dogs from the same household to be in separate classes- just like kids, 
          they get easily distracted by what their sibling is doing across the room! 
          There are enough distractions in a manners class without the added difficulty of other
          four-legged family members. We do not offer multi-dog discounts.</small>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header className='mb-3 shadow'>What do I need to start class?</Accordion.Header>
          <Accordion.Body className="accordion-body mb-2 shadow"><small>
          Puppies need a minimum of two sets of vaccinations before they can attend a group class. 
          Your vet may tell you to wait until your puppy has all 3 sets of shots before going anywhere- 
          while this does minimize the risk of illness, you also miss out on the critical socialization 
          window of 8-16 weeks! We keep a very clean facility and check the vaccinations of every dog who walks through our doors,
          so two rounds of vaccines is enough to start. The sooner you start training, the better! Adult dogs must be current on all
          vaccines or titers.</small>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header className='mb-3 shadow'>Do you work with aggressive dogs?</Accordion.Header>
          <Accordion.Body className="accordion-body mb-2  shadow"><small>
          No, aggressive dogs are not allowed in the facility for liability reasons. 
          Please contact a behaviorist to help with aggression. 
          We do work with frustrated greeters and fearful dogs in private lessons only. 
          If you're not sure whether or not your dog is exhibiting aggression, 
          please give us a call or fill out the contact form above.</small>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header className='mb-3 shadow'>I missed a class, what should I do to make it up?</Accordion.Header>
          <Accordion.Body className="accordion-body mb-2 shadow"><small>
          Classes are cumulative, so if you are absent we strongly suggest you schedule a makeup lesson. 
          Makeup lessons are 30-minute private sessions to get you caught up with the rest of class and are discounted at $40. 
          Please contact us to schedule a makeup lesson.</small>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header className='mb-3 shadow'>Can you help with potty training?</Accordion.Header>
          <Accordion.Body className="accordion-body mb-2 shadow"><small>
          Yes! If you are enrolled in puppy kindergarten, 
          we will go over this in class. Otherwise, please schedule a 30-minute private in the facility. 
          We'll look at where you're having trouble, come up with a game plan to fix it, and schedule a 
          quick follow-up to make sure you don't run into any more problems.</small>
          </Accordion.Body>
        </Accordion.Item>
          <br></br>
          <br></br>
        <Link
          to="/contact">
           Please visit the Contact page for more questions.
        </Link>
      </Accordion>

         



      </>
    );
};

export default FAQ;
