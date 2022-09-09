import Container from 'react-bootstrap/Container';
import "../css/DashBoardProfile.css";



const Dashboard = () => {
    return (
  
  <Container><h1>My Account Dashboard</h1>
  
  <div className=" d-flex flex-row mb-3">
        <div className="d-menu px-5 border"><a href="#">View Profile</a></div>
        <div className="d-menu px-5 border"><a href="#">Edit Profile</a></div>
        <div className="d-menu px-5 border"><a href="#">Bookings</a></div>
        <div className="d-menu px-5 border"><a href="#">Orders</a></div>
        <div className="d-menu px-5 border"><a href="#">Log out</a></div>
    </div>
  <div className="border-box-dash border">

    <button className='button-pets-profile'>Add Pets Profile</button>

  </div>
  
  </Container>
  
     

    );
  };
  
export default Dashboard;
  