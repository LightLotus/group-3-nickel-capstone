import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";

const EditPuppyEnrollees = () => {
  const [loading, setLoading] = useState(true);
  const [puppyenrollInput, setPuppyenroll] = useState([]);
  const [errorInput, setError] = useState([]);
  const params = useParams();

  useEffect(() => {
    const puppyenroll_id = params.id;
    axios
      .get(`http://127.0.0.1:8000/api/editpuppyenroll/${puppyenroll_id}`)
      .then((res) => {
        if (res.data.status === 200) {
          setPuppyenroll(res.data.puppyenroll);
          setLoading(false);
        } else if (res.data.puppyenroll === 404) {
          swal("Error", res.data.message, "error");
        }
      });
  }, []);

  const handleInput = (e) => {
    e.persist();
    setPuppyenroll({ ...puppyenrollInput, [e.target.name]: e.target.value });
  };

  const updateEnrollees = (e) => {
    const puppyenroll_id = params.id;
    const data = {
      petname: puppyenrollInput.petname,
      age: puppyenrollInput.age,
      ownername: puppyenrollInput.ownername,
      email: puppyenrollInput.email,
      phonenumber: puppyenrollInput.phonenumber,
      address: puppyenrollInput.address,
    };
    axios
      .put(`http://127.0.0.1:8000/api/updatepuppyenroll/${puppyenroll_id}`, data)
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
    return <h4>Loading Edit Student Details...</h4>;
  }

  return (
    <Container>
      <Link to="/puppyadmin/view-enrollees/:d" className="fs-5 mb-4 d-block">
        <FontAwesomeIcon icon={faArrowAltCircleLeft}></FontAwesomeIcon>
        Back
      </Link>
      <form className="add-manner-class-form">
        <div className="add-manners-div">
          {" "}
          <label className="add-manners-input" htmlFor="">
            Pet Name:{" "}
          </label>
          <input
            type="text"
            name="petname"
            onChange={handleInput}
            value={puppyenrollInput.petname}
          />
          <span className="add-manner-span">{errorInput.petname}</span>
        </div>
        <div className="add-manners-div">
          {" "}
          <label className="add-manners-input" htmlFor="">
            Age:{" "}
          </label>
          <input
            type="number"
            name="age"
            onChange={handleInput}
            value={puppyenrollInput.age}
          />
          <span className="add-manner-span">{errorInput.age}</span>
        </div>
        <div className="add-manners-div">
          {" "}
          <label className="add-manners-input" htmlFor="">
            Owner's Name:{" "}
          </label>
          <input
            type="text"
            name="ownername"
            onChange={handleInput}
            value={puppyenrollInput.ownername}
          />
          <span className="add-manner-span">{errorInput.ownername}</span>
        </div>
        <div className="add-manners-div">
          {" "}
          <label className="add-manners-input" htmlFor="">
            Email:
          </label>
          <input
            type="email"
            name="email"
            onChange={handleInput}
            value={puppyenrollInput.email}
          />
          <span className="add-manner-span">{errorInput.email}</span>
        </div>
        <div className="add-manners-div">
          {" "}
          <label className="add-manners-input" htmlFor="">
            Phone Number:
          </label>
          <input
            type="text"
            name="phonenumber"
            onChange={handleInput}
            value={puppyenrollInput.phonenumber}
          />
          <span className="add-manner-span">{errorInput.phonenumber}</span>
        </div>
        <div className="add-manners-div">
          {" "}
          <label className="add-manners-input" htmlFor="">
            Address:
          </label>
          <input
            type="text"
            name="address"
            onChange={handleInput}
            value={puppyenrollInput.address}
          />
          <span className="add-manner-span">{errorInput.address}</span>
        </div>
        <button type="button" onClick={updateEnrollees} class="button-link-style">
          Update Student Details
        </button>
      </form>
    </Container>
  );
};

export default EditPuppyEnrollees;
