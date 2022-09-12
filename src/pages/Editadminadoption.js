import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";

const Editadminadoption = () => {
  const [loading, setLoading] = useState(true);
  const [adoptionInput, setAdoption] = useState([]);
  const [errorInput, setError] = useState([]);
  const params = useParams();

  useEffect(() => {
    const adoption_id = params.id;
    axios
      .get(`http://127.0.0.1:8000/api/editadoption/${adoption_id}`)
      .then((res) => {
        if (res.data.status === 200) {
          setAdoption(res.data.adoption);
          setLoading(false);
        } else if (res.data.adoption === 404) {
          swal("Error", res.data.message, "error");
        }
      });
  }, []);

  const handleInput = (e) => {
    e.persist();
    setAdoption({
      ...adoptionInput,
      [e.target.name]: e.target.value,
    });
  };

  const updateAdoption = (e) => {
    const adoption_id = params.id;
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
    
    axios
      .put(`http://127.0.0.1:8000/api/updateadoption/${adoption_id}`, data)
      .then((res) => {
        if (res.data.status === 200) {
          swal("Success", res.data.message, "success");
          setError([]);
        } else if (res.data.status === 422) {
          swal("All fields are mandatory", "", "error");
          setError(res.data.validationErrors);
        } else if (res.data.status === 404) {
          swal("Error", res.data.message, "error");
        }
      });
  };

  if (loading) {
    return <h4>Loading Edit Adoption Details...</h4>;
  }

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
          <span className="add-manner-span">{errorInput.petname}</span>
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
          <span className="add-manner-span">{errorInput.status}</span>
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
          <span className="add-manner-span">{errorInput.description}</span>
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
          <span className="add-manner-span">{errorInput.animaltype}</span>
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
          <span className="add-manner-span">{errorInput.estbirthday}</span>
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
          <span className="add-manner-span">{errorInput.color}</span>
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
          <span className="add-manner-span">{errorInput.sex}</span>
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
          <span className="add-manner-span">{errorInput.imgsrc}</span>
        </div>

        <button
          type="button"
          onClick={updateAdoption}
          className="add-adoption-btn button-link-style"
        >
          Update Pet
        </button>
      </form>
    </Container>
  );
};

export default Editadminadoption;
