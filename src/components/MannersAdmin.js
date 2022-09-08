import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import Table from "react-bootstrap/Table";
import AddMannerSched from "./AddMannerSched";

function MannersAdmin() {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/manners`).then((res) => {
      if (res.status === 200) {
        setStudents(res.data.manners);
        setLoading(false);
      }
    });
  }, []);

  const deleteStudent = (e, id) => {
    e.preventDefault();

    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Deleting";

    axios.delete(`/api/delete-student/${id}`).then((res) => {
      if (res.data.status === 200) {
        swal("Deleted!", res.data.message, "success");
        thisClicked.closest("tr").remove();
      } else if (res.data.status === 404) {
        swal("Error", res.data.message, "error");
        thisClicked.innerText = "Delete";
      }
    });
  };

  if (loading) {
    return <h4>Loading Schedule...</h4>;
  } else {
    var student_HTMLTABLE = "";

    student_HTMLTABLE = students.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.date}</td>
          <td>{item.time}</td>
          <td>{item.day}</td>
          <td>{item.trainer}</td>
          <td>{item.availslot}</td>
          <td>{item.status}</td>
          {/* <td>
            <Link
              to={`edit-student/${item.id}`}
              className="btn btn-success btn-sm"
            >
              Edit
            </Link>
          </td>
          <td>
            <button
              type="button"
              onClick={(e) => deleteStudent(e, item.id)}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </td> */}
        </tr>
      );
    });
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <AddMannerSched />
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Dates</th>
                  <th>Times</th>
                  <th>Days</th>
                  <th>Trainer</th>
                  <th>Available Slot</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>{student_HTMLTABLE}</tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MannersAdmin;
