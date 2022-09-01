import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {MDBBtn} from 'mdb-react-ui-kit';


import "../css/Cart.css";



const Cart = () => {
  return (


  <Container className='p-4'>

    <h2 className='cart text-center  mb-5'>My Cart</h2>
     <Row>
        <Col className='Border-cart border'>
        <p className='text-start'><b>Shipping And Delivery Information</b></p>
        <p className='text-start'>Orders are processed within <b>12-24 hours</b>.
         Delivery within<b>NCR</b>takes <b>3-4 days</b>. For <b>Luzon areas</b>, it takes <b>6-8 days</b>. Lastly, for <b>Visayas and Mindanao</b> areas delivery takes <b>8-10 days</b>.</p>
      </Col>
      </Row>

    <Table striped bordered hover className='mt-5'>
    <thead>
      <tr>
        <th>Products</th>
        <th>Quantity</th>
        <th>Total</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
      
      </tr>
      <tr>
        <td>3</td>
        <td>Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
    <Col md={6} className="Cart-box border">

      <p id='p-tax'>Tax included. Shipping calculated at checkout</p>
      <MDBBtn href="#" className="Checkout">Checkout</MDBBtn>
    </Col>

  </Table>
  </Container>


     

   


  );
};

export default Cart;
