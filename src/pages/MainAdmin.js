import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/MainAdmin.css";
import { Tabtitle } from '../components/GeneralFunctions';

const MainAdmin = () => {
  Tabtitle('Main Admin| Charming Pets')
  return (
    <Container>
      <h1>
        <span className="text-dark">Admin </span>Dashboard Menu
      </h1>
      <div className="admin-container">
        <div className="admin-category">
          <Link to="/mannersadmin" className="admin-links">
            Enter Adult <br /> Training Class Admin Dashboard
          </Link>
        </div>
        <div className="admin-category">
          <Link to="/puppyadmin" className="admin-links">
            Enter Puppy Kindergarten Class Admin Dashboard
          </Link>
        </div>
        <div className="admin-category">
          <Link to="/adoptionadmin" className="admin-links">
            Enter Pet <br />
            Adoption <br /> Admin Dashboard
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default MainAdmin;
