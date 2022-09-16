import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import axios from "axios";

const Adoptionadmin = () => {
  const [loading, setLoading] = useState(true);
  const [adoppets, setAdoppets] = useState([]);

  // code to display adoption animals
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/adoption`).then((res) => {
      if (res.status === 200) {
        setAdoppets(res.data.adoption);
        setLoading(false);
      }
    });
  }, []);

  const deleteAdoption = (e, id) => {
    e.preventDefault();

    const thisClicked = e.currentTarget;
    if ((thisClicked.innerText = "Deleting")) {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this class schedule!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios
            .delete(`http://127.0.0.1:8000/api/deleteadoption/${id}`)
            .then((res) => {
              if (res.data.status === 200) {
                swal("Deleted!", res.data.message, "success");
                thisClicked.closest("tr").remove();
              } else if (res.data.status === 404) {
                swal("Error", res.data.message, "error");
                thisClicked.innerText = "Delete";
              }
            });
        } else {
          swal("The pet details is safe!");
          thisClicked.innerText = "Delete";
        }
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return <h4>Loading Pets...</h4>;
  } else {
    var adoption_HTMLTABLE = "";
    adoption_HTMLTABLE = adoppets.map((pet, index) => {
      return (
        <tr key={index}>
          <td>{pet.id}</td>
          <td>{pet.petname}</td>
          <td>{pet.status}</td>
          <td>{pet.animaltype}</td>
          <td>{pet.estbirthday}</td>
          <td>{pet.color}</td>
          <td>{pet.sex}</td>
          <td>
            <Link
              to={`/editadminadoption/${pet.id}`}
              className="btn btn-success btn-sm"
            >
              <FontAwesomeIcon icon={faPencil} />
            </Link>
          </td>

          <td>
            <Link
              className="btn btn-success btn-sm"
              to={`/viewadoptionapplicant/${pet.id}`}
            >
              View Applicants
            </Link>
          </td>
          <td>
            <span
              onClick={(e) => deleteAdoption(e, pet.id)}
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
      <h1>
        <span className="text-dark">Pet Adoption</span> Admin Dashboard
      </h1>
      <Link to="/mainadmin" className="fs-5 mb-4 d-block">
        <FontAwesomeIcon icon={faArrowAltCircleLeft}></FontAwesomeIcon>
        Back
      </Link>
      <Link className="button-link-style mb-3" to="/adoptionadminadd">
        Add Pet
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Pet Name</th>
            <th>Status</th>
            <th>Animal Type</th>
            <th>Estimated Birthday</th>
            <th>Color</th>
            <th>Sex</th>
          </tr>
        </thead>
        <tbody>{adoption_HTMLTABLE}</tbody>
      </Table>
    </Container>
  );
};

export default Adoptionadmin;
