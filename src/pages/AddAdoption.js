import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "../css/Adoption.css";

const AddAdoption = () => {
  
  const [adoptionInput, setAdoption] = useState({
    petname: "",
    status: "",
    description: "",
    animaltype: "",
    estbirthday: "",
    color: "",
    sex: "",
    imgsrc: "",
    error_list: [],
  });

  const handleInput = (e) => {
    setAdoption({ ...adoptionInput, [e.target.name]: e.target.value });
  };

  const saveAdoption = (e) => {
    e.preventDefault();
    const data = {
      petname: adoptionInput.petname,
      status: adoptionInput.status,
      description: adoptionInput.description,
      animaltype: adoptionInput.animaltype,
      estbirthday: adoptionInput.estbirthday,
      color: adoptionInput.color,
      sex: adoptionInput.sex,
      imgsrc: adoptionInput.imgsrc,
    };

    axios.post(`http://127.0.0.1:8000/api/addadoption`, data).then((res) => {
      if (res.data.status === 200) {
        swal("Success!", res.data.message, "success");
        setAdoption({
          petname: "",
          status: "",
          description: "",
          animaltype: "",
          estbirthday: "",
          color: "",
          sex: "",
          imgsrc: "",
        });
      } else if (res.data.status === 422) {
        setAdoption({ ...adoptionInput, error_list: res.data.validate_err });
      }
    });
  };

  return (
    <Container>
      <Link to="/adoptionadmin" className="fs-5 mb-4 d-block">
        <FontAwesomeIcon icon={faArrowAltCircleLeft}></FontAwesomeIcon>
        Back
      </Link>
      <form className="add-adoption-form">
        <div className="add-adoption-div">
          {" "}
          {/* Pet Name Input*/}
          <label className="add-adoption-label" htmlFor="">
            Pet Name:{" "}
          </label>
          <input
            className="add-adoption-input"
            type="text"
            name="petname"
            onChange={handleInput}
            value={adoptionInput.petname}
          />
          <span className="add-manner-span">
            {adoptionInput.error_list.petname}
          </span>
        </div>
        <div className="add-adoption-div">
          {" "}
          {/* Status Input */}
          <label className="add-adoption-label" htmlFor="">
            Status:{" "}
          </label>
          <input
            className="add-adoption-input"
            type="text"
            name="status"
            onChange={handleInput}
            value={adoptionInput.status}
          />
          <span className="add-manner-span">
            {adoptionInput.error_list.status}
          </span>
        </div>

        {/* Description Input */}
        <div className="add-adoption-div">
          {" "}
          <label className="add-adoption-label" htmlFor="">
            Description:{" "}
          </label>
          <textarea
            className="add-adoption-input"
            name="description"
            onChange={handleInput}
            value={adoptionInput.description}
            rows="4"
            cols="50"
          ></textarea>
          <span className="add-manner-span">
            {adoptionInput.error_list.description}
          </span>
        </div>

        {/* Animal Type Section */}
        <div className="add-adoption-div">
          {" "}
          <label className="add-adoption-label" htmlFor="">
            Animal Type:
          </label>
          <input
            className="add-adoption-input"
            type="text"
            name="animaltype"
            onChange={handleInput}
            value={adoptionInput.animaltype}
          />
          <span className="add-manner-span">
            {adoptionInput.error_list.animaltype}
          </span>
        </div>

        {/* Estimated Birthday */}
        <div className="add-adoption-div">
          {" "}
          <label className="add-adoption-label" htmlFor="">
            Estimated Birthday:
          </label>
          <input
            className="add-adoption-input"
            type="text"
            name="estbirthday"
            onChange={handleInput}
            value={adoptionInput.estbirthday}
          />
          <span className="add-manner-span">
            {adoptionInput.error_list.estbirthday}
          </span>
        </div>

        {/* color */}
        <div className="add-adoption-div">
          {" "}
          <label className="add-adoption-label" htmlFor="">
            Color:
          </label>
          <input
            className="add-adoption-input"
            type="text"
            name="color"
            onChange={handleInput}
            value={adoptionInput.color}
          />
          <span className="add-manner-span">
            {adoptionInput.error_list.color}
          </span>
        </div>

        {/* Sex Section */}
        <div className="add-adoption-div">
          {" "}
          <label className="add-adoption-label" htmlFor="">
            Sex:
          </label>
          <input
            className="add-adoption-input"
            type="text"
            name="sex"
            onChange={handleInput}
            value={adoptionInput.sex}
          />
          <span className="add-manner-span">
            {adoptionInput.error_list.sex}
          </span>
        </div>

        {/* Image Section */}
        <div className="add-adoption-div">
          {" "}
          <label className="add-adoption-label" htmlFor="">
            Image Source:
          </label>
          <textarea
            className="add-adoption-input"
            type="text"
            name="imgsrc"
            onChange={handleInput}
            value={adoptionInput.imgsrc}
            rows="4"
            cols="50"
          />
          <span className="add-manner-span">
            {adoptionInput.error_list.imgsrc}
          </span>
        </div>

        <button
          type="button"
          onClick={saveAdoption}
          className="add-adoption-btn button-link-style"
        >
          Add Pet
        </button>
      </form>
    </Container>
  );
};

export default AddAdoption;
