import Container from 'react-bootstrap/Container';
import "../css/DashBoardProfile.css";
import { Link, Outlet } from 'react-router-dom';



const Dashboard = () => {
    return (
  
  <Container><h1>My Account Dashboard</h1>
  
  <div>
        <Link className="dashboard-menu d-menu px-5 border" to="/dashboard/ownerprofiledashboard">View Profile</Link>
        <Link className="dashboard-menu d-menu px-5 border" to="/dashboard/petclassesdashboard">Pet's Classes</Link>
        <Link className="dashboard-menu d-menu px-5 border" to="/dashboard/adoptiondashboard">Adoption</Link>
  </div>
  <div className="border-box-dash border">

    <Outlet/>

  </div>
  
  </Container>
  
     

    );
  };
  
export default Dashboard;
  