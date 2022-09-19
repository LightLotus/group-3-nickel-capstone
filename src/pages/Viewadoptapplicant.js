import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";
import axios from "axios";
import { useParams } from "react-router-dom";

const Viewadoptapplicant = () => {
  const [loading, setLoading] = useState(true);
  const [customer, setCustomer] = useState([]);
  const test_id = useParams();

  // code to display applicant
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/customer/${test_id.id}`)
      .then((res) => {
        if (res.status === 200) {
          setCustomer(res.data.customer);
          setLoading(false);
        }
      });
  }, []);

  const letsGoForLove = (e, id) => {
    let status = e.target.value;

    if (status.trim().length !== 0) {
      swal({
        title: "Update status?",
        text: "Update adoption status",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          console.log(customer);
          const data = {
            customer_id: id,
            adoption_id: test_id.id,
            status: status.trim(),
          };

          axios
            .post(`http://127.0.0.1:8000/api/update-customer-status`, data)
            .then((res) => {
              if (res.data.status === 200) {
                swal(
                  `Status Update to ${status.trim().toUpperCase()}!`,
                  res.data.message,
                  "success"
                );
              } else {
                swal("Error", res.data.message, "error");
              }
            });
        }
      });
    }
  };

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

  if (loading) {
    return <h4>Loading Applicants...</h4>;
  } else {
    var customer_HTMLTABLE = "";
    customer_HTMLTABLE = customer.map((customer, index) => {
      return (
        <tr key={index}>
          <td>{customer.id}</td>
          <td>{customer.firstname}</td>
          <td>{customer.lastname}</td>
          <td>{customer.contactnumber}</td>
          <td>{customer.email}</td>
          <td>{customer.address}</td>
          <td>{customer.pivot.dateinterview}</td>
          <td>{customer.pivot.timeinterview}</td>
          <td>
            <select onChange={(e) => letsGoForLove(e, customer.id)}>
              <option value="">=</option>
              <option
                selected={customer.pivot.status == "open" ? true : false}
                value="open"
              >
                open
              </option>
              <option
                selected={customer.pivot.status == "pending" ? true : false}
                value="pending"
              >
                pending
              </option>
              <option
                selected={customer.pivot.status == "canceled" ? true : false}
                value="canceled"
              >
                canceled
              </option>
              <option
                selected={customer.pivot.status == "closed" ? true : false}
                value="closed"
              >
                closed
              </option>
              <option
                selected={customer.pivot.status == "onreview" ? true : false}
                value="onreview"
              >
                onreview
              </option>
              <option
                selected={customer.pivot.status == "accepted" ? true : false}
                value="accepted"
              >
                accepted
              </option>
            </select>
          </td>
          <td>
            <span
              onClick={(e) => deleteAdoption(e, customer.id)}
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
      <Link to="/adoptionadmin" className="fs-5 mb-4 d-block">
        <FontAwesomeIcon icon={faArrowAltCircleLeft}></FontAwesomeIcon>
        Back
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Contact Number</th>
            <th>Email</th>
            <th>Address</th>
            <th>Date Interview</th>
            <th>Time Interview</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{customer_HTMLTABLE}</tbody>
      </Table>
    </Container>
  );
};

export default Viewadoptapplicant;
