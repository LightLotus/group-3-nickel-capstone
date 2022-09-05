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
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Shipping Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Address1" />
        <Form.Control type="text" placeholder="Enter Address2" />
       
      </Form.Group>
      </Form>

        </Col>

        <Col className="check-outborder2 border"><h1 className="text-center">test</h1></Col>
      </Row>

      


    </Container>
    );
  };
  
  export default Checkout;
  