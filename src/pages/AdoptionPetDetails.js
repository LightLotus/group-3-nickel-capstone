import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import "../css/AdoptionPetdetails.css";
import swal from "sweetalert";

const AdoptionPetDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [adoppets, setAdoppets] = useState("");
  const params = useParams();

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

  const AddCustomer = () => {
    const [customerInput, setCustomer] = useState({
      firstname: "",
      lastname: "",
      contactnumber: "",
      email: "",
      address: "",
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
        adoption_id: adoppets.id,
      };

      axios.post(`http://127.0.0.1:8000/api/addcustomer`, data).then((res) => {
        if (res.data.status === 200) {
          swal("Success!", res.data.message, "success");
          setCustomer({
            firstname: "",
            lastname: "",
            contactnumber: "",
            email: "",
            address: "",
            dateinterview: "",
            timeinterview: "",
          });
        } else if (res.data.status === 422) {
          setCustomer({ ...customerInput, error_list: res.data.validate_err });
        }
      });
    };

    return (
      //modal for user
      <>
        {/* // Button trigger modal */}
        <button
          type="button"
          class="button-link-style"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Adopt {adoppets.petname}
        </button>
        {/* // Modal */}
        <div
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Thank you for choosing to adopt. Please provide the following
                  details and we will send you an email for zoom interview.
                </h5>
              </div>
              <div class="modal-body">
                <form>
                  {/* first name */}
                  <input
                    className="customer-details-input"
                    type="text"
                    placeholder="First Name"
                    name="firstname"
                    onChange={handleInput}
                    value={customerInput.firstname}
                  />
                  <span className="text-danger">
                    {customerInput.error_list.firstname}
                  </span>

                  {/* last name */}
                  <input
                    className="customer-details-input"
                    type="text"
                    placeholder="Last Name"
                    name="lastname"
                    onChange={handleInput}
                    value={customerInput.lastname}
                  />
                  <span className="text-danger">
                    {customerInput.error_list.lastname}
                  </span>

                  {/* contact number */}
                  <input
                    className="customer-details-input"
                    type="text"
                    placeholder="Contact Number"
                    name="contactnumber"
                    onChange={handleInput}
                    value={customerInput.contactnumber}
                  />
                  <span className="text-danger">
                    {customerInput.error_list.contactnumber}
                  </span>

                  {/* email */}
                  <input
                    className="customer-details-input"
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={handleInput}
                    value={customerInput.email}
                  />
                  <span className="text-danger">
                    {customerInput.error_list.email}
                  </span>

                  {/* address */}
                  <input
                    className="customer-details-input"
                    type="text"
                    placeholder="Address"
                    name="address"
                    onChange={handleInput}
                    value={customerInput.address}
                  />
                  <span className="text-danger">
                    {customerInput.error_list.address}
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
                      {customerInput.error_list.dateinterview}
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
                      {customerInput.error_list.timeinterview}
                    </span>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
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
          <AddCustomer className="button-link-style" />
        </div>
      </div>
    </Container>
  );
};

export default AdoptionPetDetails;
