import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";

const ViewMannersEnrollees = () => {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/mannerenroll/${params.id}`)
      .then((res) => {
        if (res.status === 200) {
          setStudents(res.data.mannerenroll);
          setLoading(false);
        }
      });
  }, []);

  const deleteStudent = (e, id) => {
    e.preventDefault();

    const thisClicked = e.currentTarget;
    if ((thisClicked.innerText = "Deleting")) {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this student details!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios
            .delete(`http://127.0.0.1:8000/api/deletemannerenroll/${id}`)
            .then((res) => {
              if (res.data.status === 200) {
                swal("Deleted!", res.data.message, "success");
                thisClicked.closest("tr").remove();
              } else if (res.data.message === 404) {
                swal("Error", res.data.message, "error");
                thisClicked.innerText = "Delete";
              }
            });
        } else {
          swal("The student detail is safe!");
          thisClicked.innerText = "Delete";
        }
      });
    }
  };

  if (loading) {
    return <h4>Loading Pets</h4>;
  } else {
    var student_HTMLTABLE = "";

    student_HTMLTABLE = students.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.petname}</td>
          <td>{item.age}</td>
          <td>{item.customer.firstname}</td>
          <td>{item.customer.email}</td>
          <td>{item.customer.contactnumber}</td>
          <td>{item.customer.address}</td>
          <td>
            <Link
              to={`/edit-enrollees/${item.id}`}
              className="btn btn-success btn-sm"
            >
              <FontAwesomeIcon icon={faPencil} />
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
      <p className="text-dark text-center fs-3">List of Adult Dog Enrollees</p>
      <Link to="/mannersadmin" className="fs-5 mb-4 d-block">
        <FontAwesomeIcon icon={faArrowAltCircleLeft}></FontAwesomeIcon>
        Back
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Pet Name</th>
            <th>Age</th>
            <th>Owner's Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>{student_HTMLTABLE}</tbody>
      </Table>
    </Container>
  );
};

export default ViewMannersEnrollees;
