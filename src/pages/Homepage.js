import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
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
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et.
        </p>
        <div className="feature-services-container">
          <div>
            <img className="feature-services-img" src={trainingIcon} alt="" />
            <p className="description">Training</p>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et{" "}
            </p>
          </div>
          <div>
            <img className="feature-services-img" src={adoptionIcon} alt="" />
            <p className="description">Training</p>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et{" "}
            </p>
          </div>
          <div>
            <img className="feature-services-img" src={productionIcon} alt="" />
            <p className="description">Training</p>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et{" "}
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Homepage;
