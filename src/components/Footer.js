import "../css/Footer.css";
import logoImg from "../images/charming-pets-logo.svg";
import Container from "react-bootstrap/esm/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquarePinterest } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container>
          <div className="footer-container-wrapper">
            <div className="footer-container">
              <div className="footer-first-col">
                <Link to="/">
                  <img className="logo-img" src={logoImg} alt="" />
                </Link>
                <div className="footer-social-icons-container">
                  <FontAwesomeIcon
                    className="footer-social-icons"
                    icon={faSquareFacebook}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="footer-social-icons"
                    icon={faSquareInstagram}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="footer-social-icons"
                    icon={faSquareTwitter}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="footer-social-icons"
                    icon={faSquarePinterest}
                  ></FontAwesomeIcon>
                </div>
              </div>

              <div className="usefule-links">
                <p className="useful-links-p">
                  <strong>Useful Links</strong>
                </p>
                <ul className="useful-links-ul">
                  <li className="useful-links-li">
                    <Link className="useful-links-items" to="/ourstory">
                      Our Story
                    </Link>
                  </li>
                  <li className="useful-links-li">
                    <Link className="useful-links-items" to="/faq">
                      FAQs
                    </Link>
                  </li>
                  <li className="useful-links-li">
                    <Link className="useful-links-items" to="/contact">
                      Contact Us
                    </Link>
                  </li>
                  <li className="useful-links-li">
                    <Link className="useful-links-items" to="/adoption">
                      Adoption
                    </Link>
                  </li>
                  <li className="useful-links-li">
                    <Link className="useful-links-items" to="/trainingclasses">
                      Training Classes
                    </Link>
                  </li>
                  <li className="useful-links-li">
                    <Link className="useful-links-items" to="/ourproducts">
                      Our Products
                    </Link>
                  </li>
                </ul>
              </div>

              <div class="footer-third-col">
                <p className="newsletter-p">
                  Subscribe to our newsletter for latest updates!
                </p>
                <form className="newsletter-form" action="#">
                  <input className="newsletter-input" type="email" placeholder="Email" />
                  <button type="Submit" className="newsletter-button button-link-style">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <p className="copyright">Copyright &copy; 2022 | Charming Pets</p>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
