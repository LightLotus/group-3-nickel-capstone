import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import "../css/AddMannerSched.css";

function AddMannerSched() {
  const [mannersInput, setManners] = useState({
    date: "",
    timestart: "",
    timeend: "",
    trainer: "",
    availslot: "",
    status: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.preventDefault();
    e.persist();
    setManners({ ...mannersInput, [e.target.name]: e.target.value });
  };

  const saveManner = (e) => {
    e.preventDefault();
    const data = {
      date: mannersInput.date,
      timestart: mannersInput.timestart,
      timeend: mannersInput.timeend,
      trainer: mannersInput.trainer,
      availslot: mannersInput.availslot,
      status: mannersInput.status,
    };

    axios.post(`http://127.0.0.1:8000/api/addmanners`, data).then((res) => {
      if (res.data.status === 200) {
        swal("Success!", res.data.message, "success");
        e.preventDefault();
        setManners({
          date: "",
          timestart: "",
          timeend: "",
          trainer: "",
          availslot: "",
          status: "",
        });
      } else if (res.data.status === 422) {
        setManners({ ...mannersInput, error_list: res.data.validate_err });
      }
    });
  };

  return (
    <>
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
          <span className="add-manner-span">
            {mannersInput.error_list.date}
          </span>
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
          <span className="add-manner-span">
            {mannersInput.error_list.timestart}
          </span>
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
          <span className="add-manner-span">
            {mannersInput.error_list.timeend}
          </span>
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
          <span className="add-manner-span">
            {mannersInput.error_list.trainer}
          </span>
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
          <span className="add-manner-span">
            {mannersInput.error_list.availslot}
          </span>
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
          <span className="add-manner-span">
            {mannersInput.error_list.status}
          </span>
        </div>
        <button
          type="button"
          onClick={saveManner}
          class="button-link-style w-50"
        >
          Add Class
        </button>
      </form>
    </>
  );
}

export default AddMannerSched;
