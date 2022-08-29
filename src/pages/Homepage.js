import Container from "react-bootstrap/Container";
import { Link, Outlet } from "react-router-dom";
import CarouselSlider from "../components/Carousel";
import trainingIcon from "../images/training-icon.svg";
import adoptionIcon from "../images/adoption-icon.svg";
import productionIcon from "../images/production-icon.svg";
import "../css/Homepage.css";

const Homepage = () => {
  return (
    <>
      <Container>
        <div className="hero-container">
          <div className="hero-text-container">
            <h1>
              Welcome to <span className="span-color">Charming Pets</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>
            <Link className="button-link-style" to="/trainingclasses">
              Enroll Now!
            </Link>
          </div>
          <CarouselSlider />
        </div>
        <h3 className="subtitle">
          What Can <span className="span-color">We Do</span>
        </h3>
        <p className="feature-services-container-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et.
        </p>
        <div className="feature-services-container">
          <div className="feature-services-div">
            <img className="feature-services-img" src={trainingIcon} alt="" />
            <p className="feature-services-title">Training</p>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et{" "}
            </p>
          </div>
          <div className="feature-services-div">
            <img className="feature-services-img" src={adoptionIcon} alt="" />
            <p className="feature-services-title">Adoption</p>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et{" "}
            </p>
          </div>
          <div className="feature-services-div">
            <img className="feature-services-img" src={productionIcon} alt="" />
            <p className="feature-services-title">Our Products</p>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et{" "}
            </p>
          </div>
        </div>
        <div>
          <h3 className="subtitle">
            Cats & Dogs who wants to
            <span className="span-color"> go home with You</span>
          </h3>
          <Link id="adoption-cta" className="button-link-style" to="/adoption">
            View More
          </Link>
        </div>
      </Container>
      <Outlet />
    </>
  );
};

export default Homepage;
