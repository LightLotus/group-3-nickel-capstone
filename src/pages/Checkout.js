import Container from "react-bootstrap/Container";
import "../css/Checkout.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';




const Checkout = () => {
    return (

<Container className="p-4">
       <div className="checkout text-center"> <b>My Checkout</b></div>

       <Row >
        <Col className="check-outborder1 border">
        <Form className="p-2">
        <Form.Group className="mb-3 gap-5" controlId="formBasicEmail">
        <Form.Label>Shipping Address</Form.Label>
        <div class="d-grid gap-3">
        <div class="row">
        <div class="col">
          <input type="text" class="form-control" placeholder="First name" aria-label="First name">
          </input>
          </div>
          <div class="col">
        <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
        </input>
        </div>
</div>
        <Form.Control type="text" placeholder="Name" />
        <Form.Control type="text" placeholder="Enter Address1" />
        <Form.Control type="text" placeholder="Apartment,suit,ect" />
        <div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="Postal Code" aria-label="Postal Code">
    </input>
  </div>
  
  <div class="col">
    <input type="text" class="form-control" placeholder="City" aria-label="City">
    </input>
  </div>
</div>
        <Form.Select><option >
        <option selected>Choose </option>
          <option selected> </option>
          
           
        </option>
        </Form.Select>
        </div>
      </Form.Group>
      </Form>

        </Col>

        <Col className="check-outborder2 border"><h1 className="text-center">test</h1></Col>
      </Row>

      


    </Container>


    );
  };
  
  export default Checkout;
  