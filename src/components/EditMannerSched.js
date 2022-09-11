import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";

function EditMannerSched() {
  const history = useNavigate();
  const [loading, setLoading] = useState(true);
  const [mannersInput, setManner] = useState([]);
  const [errorInput, setError] = useState([]);
  const params = useParams();

  useEffect(() => {
    const manner_id = params.id;
    axios
      .get(`http://127.0.0.1:8000/api/edit-manner/${manner_id}`)
      .then((res) => {
        if (res.data.status === 200) {
          console.log(res.data.manner);
          setManner(res.data.manner);
          setLoading(false);
        } else if (res.data.status === 404) {
          swal("Error", res.data.message, "error");
          history.push(`/mannersadmin`);
        }
      });
  }, [history]);

  const handleInput = (e) => {
    e.persist();
    setManner({ ...mannersInput, [e.target.name]: e.target.value });
  };


  const updateManner = (e) => {
    const manner_id = params.id;
    const data = {
      date: mannersInput.date,
      timestart: mannersInput.timestart,
      timeend: mannersInput.timeend,
      trainer: mannersInput.trainer,
      availslot: mannersInput.availslot,
      status: mannersInput.status,
    };

    axios
      .put(`http://127.0.0.1:8000/api/update-manner/${manner_id}`, data)
      .then((res) => {
        if (res.data.status === 200) {
          swal("Success", res.data.message, "success");
          setError([]);
          history.push("/mannersadmin");
        } else if (res.data.status === 422) {
          swal("All fields are mandatory", "", "error");
          setError(res.data.validationErrors);
        } else if (res.data.status === 404) {
          swal("Error", res.data.message, "error");
          history.push("/mannersadmin");
        }
      });
  };

  if (loading) {
    return <h4>Loading Edit Manner Schedules...</h4>;
  }

  return (
    <>
      <Container>
        <Link to="/mannersadmin" className="fs-5 mb-4 d-block">
          <FontAwesomeIcon icon={faArrowAltCircleLeft}></FontAwesomeIcon>
          Back
        </Link>
        <form className="add-manner-class-form">
          <div className="add-manners-div">
            {" "}
            <label className="add-manners-input" htmlFor="">
              Date:{" "}
            </label>
            <input
              type="date"
              name="date"
              onChange={handleInput}
              value={mannersInput.date}
            />
            <span className="add-manner-span">{errorInput.date}</span>
          </div>
          <div className="add-manners-div">
            {" "}
            <label className="add-manners-input" htmlFor="">
              Time Start:{" "}
            </label>
            <input
              type="time"
              name="timestart"
              onChange={handleInput}
              value={mannersInput.timestart}
            />
            <span className="add-manner-span">{errorInput.timestart}</span>
          </div>
          <div className="add-manners-div">
            {" "}
            <label className="add-manners-input" htmlFor="">
              Time End:{" "}
            </label>
            <input
              type="time"
              name="timeend"
              onChange={handleInput}
              value={mannersInput.timeend}
            />
            <span className="add-manner-span">{errorInput.timeend}</span>
          </div>
          <div className="add-manners-div">
            {" "}
            <label className="add-manners-input" htmlFor="">
              Trainer:
            </label>
            <input
              type="text"
              name="trainer"
              onChange={handleInput}
              value={mannersInput.trainer}
            />
            <span className="add-manner-span">{errorInput.trainer}</span>
          </div>
          <div className="add-manners-div">
            {" "}
            <label className="add-manners-input" htmlFor="">
              Available Slots:
            </label>
            <input
              type="number"
              name="availslot"
              onChange={handleInput}
              value={mannersInput.availslot}
            />
            <span className="add-manner-span">{errorInput.availslot}</span>
          </div>
          <div className="add-manners-div">
            {" "}
            <label className="add-manners-input" htmlFor="">
              Status:
            </label>
            <input
              type="text"
              name="status"
              onChange={handleInput}
              value={mannersInput.status}
            />
            <span className="add-manner-span">{errorInput.status}</span>
          </div>
          <button
            type="button"
            onClick={updateManner}
            class="button-link-style"
          >
            Update Class
          </button>
        </form>
      </Container>
    </>
  );
}

export default EditMannerSched;
