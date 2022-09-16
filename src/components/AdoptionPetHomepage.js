import "../css/CustomerReviews.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const AdoptionPetDisplay = () => {
  const [adoption, setAdoption] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/adoption`).then((res) => {
      if (res.status === 200) {
        setAdoption(res.data.adoption);
        console.log(res.data.adoption);
      }
    });
  }, []);

  let adoption_HTMLTABLE = "";
  adoption_HTMLTABLE = adoption.map((pet, index) => {
    return (
      <div key={index}>
        <img src={pet.imgsrc} alt="" className="adoption-img-carousel" />
        <div className="text-dark mt-3">
          <strong>Name: {pet.petname} </strong>
          <br /> <strong>Sex: {pet.sex}</strong>
        </div>
      </div>
    );
  });

  return (
    <div className="adoption-container-homepage">{adoption_HTMLTABLE}</div>
  );
};

export default AdoptionPetDisplay;
