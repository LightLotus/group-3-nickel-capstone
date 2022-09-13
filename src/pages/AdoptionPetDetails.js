import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import "../css/AdoptionPetdetails.css";

const AdoptionPetDetails = () => {
  const [adoppets, setAdoppets] = useState("");
  const params = useParams();

  const petDetails = () => {
    const adoption_id = params.id;
    axios
      .get(`http://127.0.0.1:8000/api/editadoption/${adoption_id}`)
      .then((res) => {
        if (res.status === 200) {
          const details = res.data.adoption;
          console.log(details);
          setAdoppets(details);
        }
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  useEffect(() => {
    petDetails();
  }, []);

  return (
    <Container>
      <Link to="/adoption" className="fs-5 mb-4 d-block">
        <FontAwesomeIcon icon={faArrowAltCircleLeft}></FontAwesomeIcon>
        Back
      </Link>
      <h3 className="text-center my-5">
        <strong>Adoption Pet Details</strong>
      </h3>
      <div className="row">
        <div className="col-md-6">
          <img
            src={adoppets.imgsrc}
            className="adoptiondetails-img container-fluid"
            alt=""
          />
        </div>
        <div className="col-md-6">
          <h2>
            <strong>{adoppets.petname}</strong>
          </h2>
          <p className="adopt-status">{adoppets.status}</p>
          <p>
            <span>
              <strong>Description: </strong>
            </span>
            {adoppets.description}
          </p>
          <p>
            <span>
              <strong>Animal Type: </strong>
            </span>
            {adoppets.animaltype}
          </p>
          <p>
            <span>
              <strong>Estimated Birthday: </strong>
            </span>
            {adoppets.estbirthday}
          </p>
          <p>
            <span>
              <strong>Color: </strong>
            </span>
            {adoppets.color}
          </p>
          <p>
            <span>
              <strong>Sex: </strong>
            </span>
            {adoppets.sex}
          </p>
          <Link to="" className="button-link-style">
            Adopt {adoppets.petname}
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default AdoptionPetDetails;
