import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import AddPuppySched from "./AddPuppySched";
import { Container } from "react-bootstrap";

const PuppyAdmin = () => {
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

  const deleteStudent = (e, id) => {
    e.preventDefault();

    const thisClicked = e.currentTarget;
    if (thisClicked) {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this class schedule!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios
            .delete(`http://127.0.0.1:8000/api/delete-puppies/${id}`)
            .then((res) => {
              if (res.data.status === 200) {
                swal("Deleted!", res.data.message, "success");
                thisClicked.closest("tr").remove();
              } else if (res.data.status === 404) {
                swal("Error", res.data.message, "error");
              }
            });
        } else {
          swal("The class schedule is safe!");
        }
      });
    }
  };

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
          <td>{item.status}</td>
          <td>
            <Link
              to={`edit-puppysched/${item.id}`}
              className="btn btn-success btn-sm"
            >
              <FontAwesomeIcon icon={faPencil} />
            </Link>
          </td>
          <td>
            <Link
              to={`view-enrollees/${item.id}`}
              className="btn btn-success btn-sm"
            >
              View Enrollees
            </Link>
          </td>
          <td>
            <span
              onClick={(e) => deleteStudent(e, item.id)}
              className="btn btn-danger btn-sm"
            >
              <FontAwesomeIcon icon={faTrash} />
            </span>
          </td>
        </tr>
      );
    });
  }

  return (
    <Container>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="fs-2 text-center my-3">
                <strong>
                  <span className="text-dark">Puppy Kindergarten Class</span>{" "}
                  Schedule Admin Dashboard
                </strong>
              </p>
              <Link to="/mainadmin" className="fs-5 mb-4 d-block">
                <FontAwesomeIcon icon={faArrowAltCircleLeft}></FontAwesomeIcon>
                Back
              </Link>
              <AddPuppySched />
              <hr />
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
    </Container>
  );
};

export default PuppyAdmin;
