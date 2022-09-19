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
import AdoptionPetDisplay from "../components/AdoptionPetDisplay";
import "../css/Homepage.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Tabtitle } from '../components/GeneralFunctions';

const Homepage = () => {
  Tabtitle('Charming Pets');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Container>
        <div className="hero-container mt-5">
          <div className="hero-text-container">
            <h1 id="welcome" className="text-dark" data-aos="fade-right">
              Welcome to <span className="span-color">Charming Pets</span>
            </h1>
            <p className="hero-text-p" data-aos="fade-left">
              We believe every person, human and animal should be able to
              fulfill their potential.
            </p>
            <Link
              id="enroll"
              className="button-link-style"
              data-aos="fade-up"
              to="/trainingclasses"
            >
              Enroll Now!
            </Link>
          </div>
          <div className="CarouselSlider">
            <CarouselSlider />
          </div>
        </div>

        <h3 className="subtitle d-block w-100" id="whatcan">
          What Can <span className="span-color">We Do</span>
        </h3>
        <p className="feature-services-container-description">
          Charming Pets offers two major services - Training Classes and Pet
          Adoption. We train using positive reinforcement. There are many ways
          to train a pet, but we believe this method is the easiest, kindest,
          and most reliable way to train. We focus on teaching your pets what we
          want them to do, not what we don't. This science-based approach is
          used worldwide by animal trainers in all disciplines, such as training
          zoo animals to allow medical care or training chickens in order to
          better train pets.
        </p>
        <div className="feature-services-container">
          <div className="feature-services-div">
            <Link to="/trainingclasses">
              <img className="feature-services-img" src={trainingIcon} alt="" />
            </Link>
            <p className="feature-services-title">Training</p>
            <p className="description">
              Introductory class that teaches basic manners with impulse
              control, relationship building and more.
            </p>
          </div>

          <div className="feature-services-div">
            <Link to="/adoption">
              <img
                className="feature-services-img zoom"
                src={adoptionIcon}
                alt=""
              />
            </Link>
            <p className="feature-services-title">Adoption</p>
            <p className="description">
              Whether you adopt online or at Charming Pets near you, you’re
              helping change the life of a pet in need.
            </p>
          </div>
          <div className="feature-services-div">
            <Link to="/ourproducts">
              <img
                className="feature-services-img"
                src={productionIcon}
                alt=""
              />
            </Link>
            <p className="feature-services-title">Our Products</p>
            <p className="description">
              In addition to training, Charming Pets Training Center also
              includes a retail store full of only the best dog products and a
              few for dog people, too!
            </p>
          </div>
        </div>
        <div className="cats-and-dog">
          <h3 className="subtitle" ID="catsdog">
            Cats & Dogs who wants to
            <span className="span-color"> go home with You</span>
          </h3>
          <Link id="adoption-cta" className="button-link-style" to="/adoption">
            View More
          </Link>
          <AdoptionPetDisplay />
        </div>
        <div className="gallery-section">
          <h3 class="subtitle" id="Gallery">Gallery</h3>
          <div className="gallery-container">
            <img
              className="featured-col gallery-img"
              src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGV0JTIwY2FyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
              data-aos="fade-up"
            />
            <img
              className="gallery-img featured-row"
              src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBldCUyMGNhcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
              alt=""
              data-aos="fade-right"
            />
            <img
              className="gallery-img featured-row"
              src="https://images.unsplash.com/photo-1597590566487-17e08c9102a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
              data-aos="fade-left"
            />
            <img
              className="gallery-img"
              src="https://images.unsplash.com/photo-1581753418434-51c11169a3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nJTIwdHJhaW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
              alt=""
              data-aos="fade-right"
            />
            <img
              className="gallery-img"
              src="https://images.unsplash.com/photo-1531531534025-0b78da954d21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nJTIwdHJhaW5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
              alt=""
              data-aos="fade-up"
            />
            <img
              className="gallery-img featured-row"
              src="https://images.unsplash.com/photo-1591324535489-9c78376631dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
              data-aos="fade-left"
            />
            <img
              className="gallery-img featured-row"
              src="https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGV0JTIwc2Nob29sfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
              data-aos="fade-up"
            />
            <img
              className="gallery-img"
              src="https://images.unsplash.com/photo-1544378382-5ea6d7768876?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGRvZyUyMHRyYWluaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
              data-aos="fade-right"
            />
            <img
              className="gallery-img"
              src="https://images.unsplash.com/photo-1541882430670-a57064b3f448?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGRvZyUyMHRyYWluaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
              data-aos="fade-up-left"
            />
            <img
              className="featured-col gallery-img"
              src="https://images.unsplash.com/photo-1535812859-6bfd2f132e78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGRvZyUyMHRyYWluaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt=""
              data-aos="fade-up"
            />
          </div>
        </div>
        <div className="trainer-section">
          <h3 className="subtitle" id="Trainers">
            Meet <span className="span-color">Our Trainers!</span>{" "}
          </h3>
          <div className="trainer-container">
            <div className="trainer-profile">
              <img
                className="trainer-img container-fluid p-0 "
                src="https://s0.hfdstatic.com/sites/the_hartford/pubimgs/1444709093966.jpg?v=2021-02-19_124202848"  
                alt=""
              />
              <p className="trainer-name">Keith Thurman</p>
              <p className="trainer-position">Animal Trainer</p>
              <div className="trainer-social-icons">
                <a href="https://www.facebook.com" className="facebook social">
                  <FontAwesomeIcon
                    className="social-icons"
                    icon={faSquareFacebook}
                  />
                </a>
                <a
                  href="https://www.instagram.com/learnbuildteach"
                  className="instagram social"
                >
                  <FontAwesomeIcon
                    className="social-icons"
                    icon={faSquareInstagram}
                  />
                </a>
              </div>
            </div>
            <div className="trainer-profile">
              <img
                className="trainer-img container-fluid p-0"
                src="https://www.familyhandyman.com/wp-content/uploads/2020/12/dog-training-GettyImages-1181179887.jpg"
                alt=""
              />
              <p className="trainer-name">Sunny Lane</p>
              <p className="trainer-position">Animal Trainer</p>
              <div className="trainer-social-icons">
                <a href="https://www.facebook.com" className="facebook social">
                  <FontAwesomeIcon
                    className="social-icons"
                    icon={faSquareFacebook}
                  />
                </a>
                <a
                  href="https://www.instagram.com/learnbuildteach"
                  className="instagram social"
                >
                  <FontAwesomeIcon
                    className="social-icons"
                    icon={faSquareInstagram}
                  />
                </a>
              </div>
            </div>
            <div className="trainer-profile">
              <img
                className="trainer-img container-fluid p-0"
                src="https://yt3.ggpht.com/ytc/AMLnZu_H8IYmcdN2-ucYz6Fzqh5Qo2LDncSR2M06S0v0-A=s900-c-k-c0x00ffffff-no-rj"
                alt=""
              />
              <p className="trainer-name">Nach Vidal</p>
              <p className="trainer-position">Animal Trainer</p>
              <div className="trainer-social-icons">
                <a href="https://www.facebook.com" className="facebook social">
                  <FontAwesomeIcon
                    className="social-icons"
                    icon={faSquareFacebook}
                  />
                </a>
                <a
                  href="https://www.instagram.com/learnbuildteach"
                  className="instagram social"
                >
                  <FontAwesomeIcon
                    className="social-icons"
                    icon={faSquareInstagram}
                  />
                </a>
              </div>
            </div>
            <div className="trainer-profile">
              <img
                className="trainer-img container-fluid p-0"
                src="https://www.sciencebuddies.org/sbCBjGmJ5arH4-h8tT42wrAscZY=/640x480/-/https/careerdiscovery.sciencebuddies.org/Files/872/17/iStock-883216142.jpg"
                alt=""
              />
              <p className="trainer-name">Chloe Adams</p>
              <p className="trainer-position">Animal Trainer</p>
              <div className="trainer-social-icons">
                <a href="https://www.facebook.com" className="facebook social">
                  <FontAwesomeIcon
                    className="social-icons"
                    icon={faSquareFacebook}
                  />
                </a>
                <a
                  href="https://www.instagram.com/learnbuildteach"
                  className="instagram social"
                >
                  <FontAwesomeIcon
                    className="social-icons"
                    icon={faSquareInstagram}
                  />
                </a>
              </div>
            </div>
            <div className="trainer-profile">
              <img
                className="trainer-img container-fluid p-0"
                src="https://s.abcnews.com/images/Entertainment/GTY_Cesar_Millan_ml_160425_16x9_992.jpg"
                alt=""
              />
              <p className="trainer-name">Cesar Millano</p>
              <p className="trainer-position">Animal Trainer</p>
              <div className="trainer-social-icons">
                <a href="https://www.facebook.com" className="facebook social">
                  <FontAwesomeIcon
                    className="social-icons"
                    icon={faSquareFacebook}
                  />
                </a>
                <a
                  href="https://www.instagram.com/learnbuildteach"
                  className="instagram social"
                >
                  <FontAwesomeIcon
                    className="social-icons"
                    icon={faSquareInstagram}
                  />
                </a>
              </div>
            </div>
            <div className="trainer-profile">
              <img
                className="trainer-img container-fluid p-0"
                src="https://www.britishcollegeofcaninestudies.com/wordpress/wp-content/uploads/2020/07/RDO1-image.jpg"
                alt=""
              />
              <p className="trainer-name">Stacey Young</p>
              <p className="trainer-position">Animal Trainer</p>
              <div className="trainer-social-icons">
                <a href="https://www.facebook.com" className="facebook social">
                  <FontAwesomeIcon
                    className="social-icons"
                    icon={faSquareFacebook}
                  />
                </a>
                <a
                  href="https://www.instagram.com/learnbuildteach"
                  className="instagram social"
                >
                  <FontAwesomeIcon
                    className="social-icons"
                    icon={faSquareInstagram}
                  />
                </a>
              </div>
            </div>
            <div className="trainer-profile">
              <img
                className="trainer-img container-fluid p-0"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE3hPU0N3TsYg-BWz1t_D0rJyyC41edS1aPw&usqp=CAU"
                alt=""
              />
              <p className="trainer-name">Leah Gotti</p>
              <p className="trainer-position">Animal Trainer</p>
              <div className="trainer-social-icons">
                <a href="https://www.facebook.com" className="facebook social">
                  <FontAwesomeIcon
                    className="social-icons"
                    icon={faSquareFacebook}
                  />
                </a>
                <a
                  href="https://www.instagram.com/learnbuildteach"
                  className="instagram social"
                >
                  <FontAwesomeIcon
                    className="social-icons"
                    icon={faSquareInstagram}
                  />
                </a>
              </div>
            </div>
            <div className="trainer-profile">
              <img
                className="trainer-img container-fluid p-0"
                src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2022%2F01%2F14%2Fsit-woman-giving-treat-to-sitting-cat-648311944-2000.jpg"
                alt=""
              />
              <p className="trainer-name">Iwa Tanaka</p>
              <p className="trainer-position">Animal Trainer</p>
              <div className="trainer-social-icons">
                <a href="https://www.facebook.com" className="facebook social">
                  <FontAwesomeIcon
                    className="social-icons"
                    icon={faSquareFacebook}
                  />
                </a>
                <a
                  href="https://www.instagram.com/learnbuildteach"
                  className="instagram social"
                >
                  <FontAwesomeIcon
                    className="social-icons"
                    icon={faSquareInstagram}
                  />
                </a>
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
