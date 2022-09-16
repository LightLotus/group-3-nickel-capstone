import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";

function EditPuppySched() {
  const history = useNavigate();
  const [loading, setLoading] = useState(true);
  const [puppyInput, setPuppy] = useState([]);
  const [errorInput, setError] = useState([]);
  const params = useParams();

  useEffect(() => {
    const puppy_id = params.id;
    axios
      .get(`http://127.0.0.1:8000/api/edit-puppies/${puppy_id}`)
      .then((res) => {
        if (res.data.status === 200) {
          console.log(res.data.puppy);
          setPuppy(res.data.puppy);
          setLoading(false);
        } else if (res.data.status === 404) {
          swal("Error", res.data.message, "error");
          history.push(`/puppyadmin`);
        }
      });
  }, [history]);

  const handleInput = (e) => {
    e.persist();
    setPuppy({ ...puppyInput, [e.target.name]: e.target.value });
  };


  const updatePuppy = (e) => {
    const puppy_id = params.id;
    const data = {
      date: puppyInput.date,
      timestart: puppyInput.timestart,
      timeend: puppyInput.timeend,
      trainer: puppyInput.trainer,
      availslot: puppyInput.availslot,
      status: puppyInput.status,
    };

    axios
      .put(`http://127.0.0.1:8000/api/update-puppies/${puppy_id}`, data)
      .then((res) => {
        if (res.data.status === 200) {
          swal("Success", res.data.message, "success");
          setError([]);
          history.push("/puppyadmin");
        } else if (res.data.status === 422) {
          swal("All fields are mandatory", "", "error");
          setError(res.data.validationErrors);
        } else if (res.data.status === 404) {
          swal("Error", res.data.message, "error");
          history.push("/puppyadmin");
        }
      });
  };

  if (loading) {
    return <h4>Loading Edit Manner Schedules...</h4>;
  }

  return (
    <>
      <Container>
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
              value={puppyInput.date}
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
              value={puppyInput.timestart}
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
              value={puppyInput.timeend}
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
              value={puppyInput.trainer}
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
              value={puppyInput.availslot}
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
              value={puppyInput.status}
            />
            <span className="add-manner-span">{errorInput.status}</span>
          </div>
          <button type="button" onClick={updatePuppy} class="button-link-style">
            Update Class
          </button>
        </form>
      </Container>
    </>
  );
}

export default EditPuppySched;
