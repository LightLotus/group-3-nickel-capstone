import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logoImg from "../images/charming-pets-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../css/Navbar.css";


function Navlink() {
  const TrainingClasses = () => {
    return <Link className="dropright" to="/trainingclasses">Training Classes</Link>;
  };
  
  return (
    <>
      <Navbar
        bg="light"
        expand="md"
        className="navbar mb-3 py-2 sticky-top border-bottom "
      >
        <Container className="container-fluid">
          <Navbar.Brand>
            <Link to="/">
              <img className="logo" src={logoImg} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="nav-links-container justify-content-end flex-grow-1 pe-3">
                <ul className="navlinks-ul">
                  <li className="navlinks-li">
                    <Link className="navlinks-a" to="/">
                      Homepage
                    </Link>
                  </li>
                  <NavDropdown
                    className="navlinks-dropdown"
                    title="About Us"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item>
                      <Link className="nav-dropdown" to="/ourstory">
                        Our Story
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link className="nav-dropdown" to="/faq">
                        FAQs
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown title="Services" id="basic-nav-dropdown">
                    <NavDropdown
                      className="dropright"
                      title={TrainingClasses()}
                      id="basic-nav-dropdown"
                    >
                      <NavDropdown.Item>
                        <Link className="nav-dropdown" to="/manners">Manners</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link className="nav-dropdown" to="/puppykindergarten">Puppy Kindergarten</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link className="nav-dropdown" to="/privatelessons">Private Lessons</Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown.Item>
                      <Link className="nav-dropdown" to="/adoption">Adoption</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link className="nav-dropdown" to="/ourproducts">Our Products</Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <li className="navlinks-li">
                    <Link className="navlinks-a" to="/contact">
                      Contacts
                    </Link>
                  </li>
                </ul>
              </Nav>
              <Nav className="nav-links-container justify-content-end flex-grow-1 pe-3">
                <div className="navlinks-ul">
                  <ul className="navlinks-ul">
                    <li className="navlinks-li">
                      <Link className="navlinks-a" to="/login">
                        Login
                      </Link>
                    </li>
                    <li className="navlinks-li">
                      <Link className="navlinks-a" to="/register">
                        Sign Up
                      </Link>
                    </li>
                   
                    <Link to="/cart" className="cartIcon">
                      <FontAwesomeIcon icon={faCartShopping} />
                      <span className="cartIcon-qty">0</span>
                    </Link>
                  </ul>
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Navlink;
