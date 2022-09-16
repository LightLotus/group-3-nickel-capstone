import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import "../css/AddMannerSched.css";

function AddPuppySched() {
  const [puppyInput, setPuppy] = useState({
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
    setPuppy({ ...puppyInput, [e.target.name]: e.target.value });
  };

  const savePuppy = (e) => {
    e.preventDefault();
    const data = {
      date: puppyInput.date,
      timestart: puppyInput.timestart,
      timeend: puppyInput.timeend,
      trainer: puppyInput.trainer,
      availslot: puppyInput.availslot,
      status: puppyInput.status,
    };

    axios.post(`http://127.0.0.1:8000/api/addpuppies`, data).then((res) => {
      if (res.data.status === 200) {
        swal("Success!", res.data.message, "success");
        e.preventDefault();
        setPuppy({
          date: "",
          timestart: "",
          timeend: "",
          trainer: "",
          availslot: "",
          status: "",
        });
      } else if (res.data.status === 422) {
        setPuppy({ ...puppyInput, error_list: res.data.validate_err });
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
            value={puppyInput.date}
          />
          <span className="add-manner-span">
            {puppyInput.error_list.date}
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
            value={puppyInput.timestart}
          />
          <span className="add-manner-span">
            {puppyInput.error_list.timestart}
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
            value={puppyInput.timeend}
          />
          <span className="add-manner-span">
            {puppyInput.error_list.timeend}
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
            value={puppyInput.trainer}
          />
          <span className="add-manner-span">
            {puppyInput.error_list.trainer}
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
            value={puppyInput.availslot}
          />
          <span className="add-manner-span">
            {puppyInput.error_list.availslot}
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
            value={puppyInput.status}
          />
          <span className="add-manner-span">
            {puppyInput.error_list.status}
          </span>
        </div>
        <button
          type="button"
          onClick={savePuppy}
          class="button-link-style w-50"
        >
          Add Class
        </button>
      </form>
    </>
  );
}

export default AddPuppySched;
