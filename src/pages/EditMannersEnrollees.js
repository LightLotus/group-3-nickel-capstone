import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";

const EditMannersEnrollees = () => {
  const [loading, setLoading] = useState(true);
  const [mannersenrollInput, setMannerenroll] = useState([]);
  const [errorInput, setError] = useState([]);
  const params = useParams();

  useEffect(() => {
    const mannerenroll_id = params.id;
    axios
      .get(`http://127.0.0.1:8000/api/editmannerenroll/${mannerenroll_id}`)
      .then((res) => {
        if (res.data.status === 200) {
          setMannerenroll(res.data.mannerenroll);
          setLoading(false);
        } else if (res.data.mannerenroll === 404) {
          swal("Error", res.data.message, "error");
        }
      });
  }, []);

  const handleInput = (e) => {
    e.persist();
    setMannerenroll({ ...mannersenrollInput, [e.target.name]: e.target.value });
  };

  const updateEnrollees = (e) => {
    const mannerenroll_id = params.id;
    const data = {
      petname: mannersenrollInput.petname,
      age: mannersenrollInput.age,
    };
    axios
      .put(
        `http://127.0.0.1:8000/api/updatemannerenroll/${mannerenroll_id}`,
        data
      )
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
      <Link
        to={`/mannersadmin/view-enrollees/${params.id}`}
        className="fs-5 mb-4 d-block"
      >
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
            value={mannersenrollInput.petname}
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
            value={mannersenrollInput.age}
          />
          <span className="add-manner-span">{errorInput.age}</span>
        </div>

        <div className="add-manners-div">
          {" "}
          <label className="add-manners-input" htmlFor="">
            Owner:
          </label>
          <input
            type="text"
            name="address"
            onChange={handleInput}
            disabled={true}
            value={mannersenrollInput.ownername}
          />
          <span className="add-manner-span">{errorInput.ownername}</span>
        </div>
        <button
          type="button"
          onClick={updateEnrollees}
          class="button-link-style"
        >
          Update Student Details
        </button>
      </form>
    </Container>
  );
};

export default EditMannersEnrollees;
