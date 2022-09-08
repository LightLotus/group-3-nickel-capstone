import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

function AddMannerSched() {
  const [mannersInput, setManners] = useState({
    date: "",
    time: "",
    day: "",
    trainer: "",
    availslot: "",
    status: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setManners({ ...mannersInput, [e.target.name]: e.target.value });
  };

  const saveManner = (e) => {
    e.preventDefault();

    const data = {
      date: mannersInput.date,
      time: mannersInput.time,
      day: mannersInput.day,
      trainer: mannersInput.trainer,
      availslot: mannersInput.availslot,
      status: mannersInput.status,
    };

    axios.post(`http://127.0.0.1:8000/api/addmanners`, data).then((res) => {
      if (res.data.status === 200) {
        swal("Success!", res.data.message, "success");
        setManners({
          date: "",
          time: "",
          day: "",
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
      {/* Button trigger modal  */}
      <button
        type="button"
        class="btn btn-primary my-3"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Schedule
      </button>

      {/* Modal */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add Manner Class Schedule
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={saveManner}>
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
                  <span>{mannersInput.error_list.date}</span>
                </div>
                <div className="add-manners-div">
                  {" "}
                  <label className="add-manners-input" htmlFor="">
                    Time:{" "}
                  </label>
                  <input
                    type="time"
                    name="time"
                    onChange={handleInput}
                    value={mannersInput.time}
                  />
                  <span>{mannersInput.error_list.time}</span>
                </div>
                <div className="add-manners-div">
                  {" "}
                  <label className="add-manners-input" htmlFor="">
                    Day:
                  </label>
                  <input
                    type="text"
                    name="day"
                    onChange={handleInput}
                    value={mannersInput.day}
                  />
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
                  <span>{mannersInput.error_list.trainer}</span>
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
                  <span>{mannersInput.error_list.availslot}</span>
                </div>
                <div className="add-manners-div">
                  {" "}
                  <label className="add-manners-input" htmlFor="">
                    Status:
                  </label>
                  <input
                    type="string"
                    name="status"
                    onChange={handleInput}
                    value={mannersInput.status}
                  />
                  <span>{mannersInput.error_list.status}</span>
                </div>
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit button" class="btn btn-primary">
                  Confirm
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddMannerSched;
