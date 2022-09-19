import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Table from "react-bootstrap/Table";

function ViewPuppyClass() {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/puppies`).then((res) => {
      if (res.status === 200) {
        setStudents(res.data.puppies);
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <h4>Loading Schedule...</h4>;
  } else {
    var student_HTMLTABLE = "";

    student_HTMLTABLE = students.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.date}</td>
          <td>{item.timestart}</td>
          <td>{item.timeend}</td>
          <td>{item.trainer}</td>
          <td>{item.availslot}</td>
          <td>
            {item.status !== "available" ? (
              item.status
            ) : (
              <Link to={`/puppykindergarten/${item.id}`}>{item.status}</Link>
            )}
          </td>
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
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Dates</th>
                  <th>Time Start</th>
                  <th>Time End</th>
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

export default ViewPuppyClass;
