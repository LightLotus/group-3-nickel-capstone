import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import "../css/AdoptionPetdetails.css";
import swal from "sweetalert";

const AdoptionPetDetails = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [adoppets, setAdoppets] = useState("");
  const params = useParams();
  const [showAddCustomer, setShowAddCustomer] = useState(true);
  const navigate = useNavigate();

  const petDetails = () => {
    const adoption_id = params.id;
    axios
      .get(`http://127.0.0.1:8000/api/editadoption/${adoption_id}`)
      .then((res) => {
        if (res.status === 200) {
          const details = res.data.adoption;
          setAdoppets(details);
        }
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  useEffect(() => {
    petDetails();
  }, []);

  const showAddCustomerHandler = (val) => {
    setShowAddCustomer(val);
    window.location.href = `/adoption-details/${params.id}`;
  };

  //display pet details and enter modal inpuy fields for user

  return (
    <Container>
      <Link to="/adoption" className="fs-5 mb-4 d-block">
        <FontAwesomeIcon icon={faArrowAltCircleLeft}></FontAwesomeIcon>
        Back
      </Link>
      <h3 className="text-center my-5">
        <strong>Adoption Pet Details</strong>
      </h3>
      <div className="row">
        <div className="col-md-6">
          <img
            src={adoppets.imgsrc}
            className="adoptiondetails-img container-fluid"
            alt=""
          />
        </div>
        <div className="col-md-6">
          <h2>
            <strong>{adoppets.petname}</strong>
          </h2>
          <p className="adopt-status">{adoppets.status}</p>
          <p>
            <span>
              <strong>Description: </strong>
            </span>
            {adoppets.description}
          </p>
          <p>
            <span>
              <strong>Animal Type: </strong>
            </span>
            {adoppets.animaltype}
          </p>
          <p>
            <span>
              <strong>Estimated Birthday: </strong>
            </span>
            {adoppets.estbirthday}
          </p>
          <p>
            <span>
              <strong>Color: </strong>
            </span>
            {adoppets.color}
          </p>
          <p>
            <span>
              <strong>Sex: </strong>
            </span>
            {adoppets.sex}
          </p>
          {showAddCustomer && (
            <AddCustomer
              showformadd={showAddCustomerHandler}
              adoppets={adoppets}
              className="button-link-style"
            />
          )}
        </div>
      </div>
    </Container>
  );
};

const AddCustomer = (props) => {
  const user = JSON.parse(localStorage.getItem("userData"));

  const [customerInput, setCustomer] = useState({
    firstname: user && user.firstname ? user.firstname : "",
    lastname: user && user.lastname ? user.lastname : "",
    contactnumber: user && user.contactnumber ? user.contactnumber : "",
    email: user && user.email ? user.email : "",
    address: user && user.address ? user.address : "",
    dateinterview: "",
    timeinterview: "",
    error_list: [],
    adoption_id: "",
  });

  const handleInput = (e) => {
    e.preventDefault();
    e.persist();
    setCustomer({ ...customerInput, [e.target.name]: e.target.value });
  };

  const saveCustomer = (e) => {
    const data = {
      firstname: customerInput.firstname,
      lastname: customerInput.lastname,
      contactnumber: customerInput.contactnumber,
      email: customerInput.email,
      address: customerInput.address,
      dateinterview: customerInput.dateinterview,
      timeinterview: customerInput.timeinterview,
      adoption_id: props.adoppets.id,
      logged_id: user && user.id ? user.id : null,
    };

    axios.post(`http://127.0.0.1:8000/api/addcustomer`, data).then((res) => {
      if (res.data.status === 200) {
        setCustomer({
          firstname: "",
          lastname: "",
          contactnumber: "",
          email: "",
          address: "",
          dateinterview: "",
          timeinterview: "",
        });

        swal("Success!", res.data.message, "success").then(() => {
          props.showformadd(false);
        });
      } else if (res.data.status === 422) {
        setCustomer({ ...customerInput, error_list: res.data.validate_err });
      }
    });
  };

  return (
    //modal for user
    <>
      {!props.adoppets.petstatus ? (
        <button
          type="button"
          className="button-link-style"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Adopt {props.adoppets.petname}
        </button>
      ) : (
        <button type="button">Unavailable</button>
      )}

      {/* // Modal */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Thank you for choosing to adopt. Please provide the following
                details and we will send you an email for zoom interview.
              </h5>
            </div>
            <div className="modal-body">
              <form>
                {/* first name */}
                <input
                  className="customer-details-input"
                  type="text"
                  disabled={user && user.firstname ? true : false}
                  placeholder="First Name"
                  name="firstname"
                  onChange={handleInput}
                  value={customerInput.firstname && customerInput.firstname}
                />
                <span className="text-danger">
                  {customerInput.error_list.firstname &&
                    customerInput.error_list.firstname}
                </span>

                {/* last name */}
                <input
                  className="customer-details-input"
                  type="text"
                  placeholder="Last Name"
                  name="lastname"
                  disabled={user && user.lastname ? true : false}
                  onChange={handleInput}
                  value={customerInput.lastname}
                />
                <span className="text-danger">
                  {customerInput.error_list.lastname &&
                    customerInput.error_list.lastname}
                </span>

                {/* contact number */}
                <input
                  className="customer-details-input"
                  type="text"
                  placeholder="Contact Number"
                  name="contactnumber"
                  disabled={user && user.contactnumber ? true : false}
                  onChange={handleInput}
                  value={customerInput.contactnumber}
                />
                <span className="text-danger">
                  {customerInput.error_list.contactnumber &&
                    customerInput.error_list.contactnumber}
                </span>

                {/* email */}
                <input
                  className="customer-details-input"
                  type="email"
                  placeholder="Email"
                  name="email"
                  disabled={user && user.email ? true : false}
                  onChange={handleInput}
                  value={customerInput.email}
                />
                <span className="text-danger">
                  {customerInput.error_list.email &&
                    customerInput.error_list.email}
                </span>

                {/* address */}
                <input
                  className="customer-details-input"
                  type="text"
                  placeholder="Address"
                  name="address"
                  disabled={user && user.address ? true : false}
                  onChange={handleInput}
                  value={customerInput.address}
                />
                <span className="text-danger">
                  {customerInput.error_list.address &&
                    customerInput.error_list.address}
                </span>

                {/* date interview */}
                <div>
                  <label htmlFor="">Requested Date for Zoom Interview</label>
                  <input
                    className="customer-details-input"
                    type="date"
                    name="dateinterview"
                    onChange={handleInput}
                    value={customerInput.dateinterview}
                  />
                  <span className="text-danger">
                    {customerInput.error_list.dateinterview &&
                      customerInput.error_list.dateinterview}
                  </span>
                </div>

                {/* time interview */}
                <div>
                  <label htmlFor="">Requested Time for Zoom Interview</label>
                  <input
                    className="customer-details-input"
                    type="time"
                    name="timeinterview"
                    onChange={handleInput}
                    value={customerInput.timeinterview}
                  />
                  <span className="text-danger">
                    {customerInput.error_list.timeinterview &&
                      customerInput.error_list.timeinterview}
                  </span>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={saveCustomer}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdoptionPetDetails;
