import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import CarouselSlider from "../components/Carousel";
import trainingIcon from "../images/training-icon.svg";
import adoptionIcon from "../images/adoption-icon.svg";
import productionIcon from "../images/production-icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import CarouselReviews from "../components/CarouselReviews";
import "../css/Homepage.css";

const Homepage = () => {
  return (
    <>
      <Container>
        <div className="hero-container mt-5">
          <div className="hero-text-container">
            <h1>
              Welcome to <span className="span-color">Charming Pets</span>
            </h1>
            <p className="hero-text-p">
            We believe every person, human and animal 
            should be able to fulfill their potential.
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
        At Charming Pets, we train using positive reinforcement, 
        often called "clicker training." There are many ways to train a pet, 
        but we believe this method is the easiest, kindest, and most reliable way to train.
        We focus on teaching your pets what we want them to do, not what we don't.
        This science-based approach is used worldwide by animal trainers in all disciplines,
        such as training zoo animals to allow medical care or training chickens in order to better train pets. 
        </p>
        <div className="feature-services-container">
          <div className="feature-services-div">
            <img className="feature-services-img" src={trainingIcon} alt="" />
            <p className="feature-services-title">Training</p>
            <p className="description">
            5 months up 6-weeks. introductory class that teaches basic
             manners with impulse control, relationship building and more.
            </p>
          </div>
          <div className="feature-services-div">
            <img className="feature-services-img" src={adoptionIcon} alt="" />
            <p className="feature-services-title">Adoption</p>
            <p className="description">
            Whether you adopt online or at a PetSmart store near you, 
            you’re helping change the life of a pet in need.
            </p>
          </div>
          <div className="feature-services-div">
            <img className="feature-services-img" src={productionIcon} alt="" />
            <p className="feature-services-title">Our Products</p>
            <p className="description">
            In addition to training, Lucky Dog Training Center also includes a 
            retail store full of only the best dog products and a few for dog people, too!
            </p>
          </div>
        </div>
        <div className="adoption-container">
          <h3 className="subtitle">
            Cats & Dogs who wants to
            <span className="span-color"> go home with You</span>
          </h3>
          <Link id="adoption-cta" className="button-link-style" to="/adoption">
            View More
          </Link>
          <div className="adoption-details-wrapper">
            <Link to="/adoption" class="adoption-details">
              <img
                className="adoption-details-img container-fluid"
                src="https://images.unsplash.com/photo-1602832309326-e1bd02f48a99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RyYXklMjBjYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                alt=""
              />
              <div className="adoption-details-texts">
                <p>Sex: F</p>
                <p>Age: 1 year old</p>
              </div>
            </Link>
            <Link to="/adoption" class="adoption-details">
              <img
                className="adoption-details-img container-fluid"
                src="https://images.unsplash.com/photo-1602832309326-e1bd02f48a99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RyYXklMjBjYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                alt=""
              />
              <div className="adoption-details-texts">
                <p>Sex: F</p>
                <p>Age: 1 year old</p>
              </div>
            </Link>
            <Link to="/adoption" class="adoption-details">
              <img
                className="adoption-details-img container-fluid"
                src="https://images.unsplash.com/photo-1602832309326-e1bd02f48a99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RyYXklMjBjYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                alt=""
              />
              <div className="adoption-details-texts">
                <p>Sex: F</p>
                <p>Age: 1 year old</p>
              </div>
            </Link>
            <Link to="/adoption" class="adoption-details">
              <img
                className="adoption-details-img container-fluid"
                src="https://images.unsplash.com/photo-1602832309326-e1bd02f48a99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RyYXklMjBjYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                alt=""
              />
              <div className="adoption-details-texts">
                <p>Sex: F</p>
                <p>Age: 1 year old</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="gallery-section">
          <h3 class="subtitle">Gallery</h3>
          <div className="gallery-container">
            <img
              className="featured-col gallery-img"
              src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGV0JTIwY2FyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
            <img
              className="gallery-img featured-row"
              src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBldCUyMGNhcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
            <img
              className="gallery-img featured-row"
              src="https://images.unsplash.com/photo-1597590566487-17e08c9102a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
            <img
              className="gallery-img"
              src="https://images.unsplash.com/photo-1581753418434-51c11169a3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nJTIwdHJhaW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
            <img
              className="gallery-img"
              src="https://images.unsplash.com/photo-1531531534025-0b78da954d21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nJTIwdHJhaW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
            <img
              className="gallery-img featured-row"
              src="https://images.unsplash.com/photo-1591324535489-9c78376631dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
            <img
              className="gallery-img featured-row"
              src="https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGV0JTIwc2Nob29sfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
            <img
              className="gallery-img"
              src="https://images.unsplash.com/photo-1544378382-5ea6d7768876?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGRvZyUyMHRyYWluaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
            <img
              className="gallery-img"
              src="https://images.unsplash.com/photo-1541882430670-a57064b3f448?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGRvZyUyMHRyYWluaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
            <img
              className="featured-col gallery-img"
              src="https://images.unsplash.com/photo-1535812859-6bfd2f132e78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGRvZyUyMHRyYWluaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
            />
          </div>
        </div>
        <div className="trainer-section">
          <h3 className="subtitle">
            Meet <span className="span-color">Our Trainers!</span>{" "}
          </h3>
          <div className="trainer-container">
            <div className="trainer-profile">
              <img
                className="trainer-img container-fluid p-0"
                src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt=""
              />
              <p className="trainer-name">John D. Dohansoon</p>
              <p className="trainer-position">Animal Trainer</p>
              <div className="trainer-social-icons">
                <FontAwesomeIcon
                  className="social-icons"
                  icon={faSquareFacebook}
                />
                <FontAwesomeIcon
                  className="social-icons"
                  icon={faSquareInstagram}
                />
              </div>
            </div>
            <div className="trainer-profile">
              <img
                className="trainer-img container-fluid p-0"
                src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt=""
              />
              <p className="trainer-name">John D. Dohansoon</p>
              <p className="trainer-position">Animal Trainer</p>
              <div className="trainer-social-icons">
                <FontAwesomeIcon
                  className="social-icons"
                  icon={faSquareFacebook}
                />
                <FontAwesomeIcon
                  className="social-icons"
                  icon={faSquareInstagram}
                />
              </div>
            </div>
            <div className="trainer-profile">
              <img
                className="trainer-img container-fluid p-0"
                src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt=""
              />
              <p className="trainer-name">John D. Dohansoon</p>
              <p className="trainer-position">Animal Trainer</p>
              <div className="trainer-social-icons">
                <FontAwesomeIcon
                  className="social-icons"
                  icon={faSquareFacebook}
                />
                <FontAwesomeIcon
                  className="social-icons"
                  icon={faSquareInstagram}
                />
              </div>
            </div>
            <div className="trainer-profile">
              <img
                className="trainer-img container-fluid p-0"
                src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt=""
              />
              <p className="trainer-name">John D. Dohansoon</p>
              <p className="trainer-position">Animal Trainer</p>
              <div className="trainer-social-icons">
                <FontAwesomeIcon
                  className="social-icons"
                  icon={faSquareFacebook}
                />
                <FontAwesomeIcon
                  className="social-icons"
                  icon={faSquareInstagram}
                />
              </div>
            </div>
            <div className="trainer-profile">
              <img
                className="trainer-img container-fluid p-0"
                src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt=""
              />
              <p className="trainer-name">John D. Dohansoon</p>
              <p className="trainer-position">Animal Trainer</p>
              <div className="trainer-social-icons">
                <FontAwesomeIcon
                  className="social-icons"
                  icon={faSquareFacebook}
                />
                <FontAwesomeIcon
                  className="social-icons"
                  icon={faSquareInstagram}
                />
              </div>
            </div>
            <div className="trainer-profile">
              <img
                className="trainer-img container-fluid p-0"
                src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt=""
              />
              <p className="trainer-name">John D. Dohansoon</p>
              <p className="trainer-position">Animal Trainer</p>
              <div className="trainer-social-icons">
                <FontAwesomeIcon
                  className="social-icons"
                  icon={faSquareFacebook}
                />
                <FontAwesomeIcon
                  className="social-icons"
                  icon={faSquareInstagram}
                />
              </div>
            </div>
            <div className="trainer-profile">
              <img
                className="trainer-img container-fluid p-0"
                src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt=""
              />
              <p className="trainer-name">John D. Dohansoon</p>
              <p className="trainer-position">Animal Trainer</p>
              <div className="trainer-social-icons">
                <FontAwesomeIcon
                  className="social-icons"
                  icon={faSquareFacebook}
                />
                <FontAwesomeIcon
                  className="social-icons"
                  icon={faSquareInstagram}
                />
              </div>
            </div>
            <div className="trainer-profile">
              <img
                className="trainer-img container-fluid p-0"
                src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                alt=""
              />
              <p className="trainer-name">John D. Dohansoon</p>
              <p className="trainer-position">Animal Trainer</p>
              <div className="trainer-social-icons">
                <FontAwesomeIcon
                  className="social-icons"
                  icon={faSquareFacebook}
                />
                <FontAwesomeIcon
                  className="social-icons"
                  icon={faSquareInstagram}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-reviews">
          <CarouselReviews />
        </div>
      </Container>
    </>
  );
};

export default Homepage;
