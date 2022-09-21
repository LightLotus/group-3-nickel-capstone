import axios from "axios";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import "../css/MannerEnroll.css";

function PuppyEnroll() {
  const params = useParams();
  const enroll_id = params.id;
  const user = JSON.parse(localStorage.getItem("userData"));

  const [enrollInput, setEnroll] = useState({
    petname: "",
    age: "",
    ownername: user && user.firstname ? user.firstname : "",
    lastname: user && user.lastname ? user.lastname : "",
    email: user && user.email ? user.email : "",
    phonenumber: user && user.contactnumber ? user.contactnumber : "",
    address: user && user.address ? user.address : "",
    error_list: [],
  });

  const [viewAgeLists, setViewAgeLists] = useState();
  const [viewKndergartenStatus, setKndergartenStatus] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setViewAgeLists(ageLists());

    axios
      .get(`http://127.0.0.1:8000/api/puppy/kindergarten/${enroll_id}`)
      .then((res) => {
        if (res.status === 200) {
          setKndergartenStatus(res.data.message);
          setLoading(false);
        }
      });
  }, []);

  const handleInput = (e) => {
    e.persist();
    setEnroll({ ...enrollInput, [e.target.name]: e.target.value });
  };

  const ageLists = () => {
    var arr = [];

    for (let i = 1; i <= 11; i++) {
      arr.push(
        <option key={i} value={i}>
          {i > 10 ? "> 10" : i}
        </option>
      );
    }

    return arr;
  };

  const saveEnroll = (e) => {
    e.preventDefault();
    const data = {
      petname: enrollInput.petname,
      age: enrollInput.age,
      ownername: enrollInput.ownername,
      lastname: enrollInput.lastname,
      email: enrollInput.email,
      phonenumber: enrollInput.phonenumber,
      address: enrollInput.address,
      puppy_id: enroll_id,
      logged_id: user && user.id ? user.id : null,
    };

    axios.post(`http://127.0.0.1:8000/api/addpuppyenroll`, data).then((res) => {
      if (res.data.status === 200) {
        swal("Success!", res.data.message, "success").then(() => {
          window.location.href = "/puppykindergarten";
        });
        setEnroll({
          petname: "",
          age: "",
          ownername: "",
          lastname: "",
          email: "",
          phonenumber: "",
          address: "",
        });
      } else if (res.data.status === 422) {
        setEnroll({ ...enrollInput, error_list: res.data.validate_err });
      }
    });
  };

  return (
    <>
      <Container className="mannerenroll-container">
        <p className="mannerenroll-header">
          PUPPY KINDERGARTEN CLASS <br />
          <span className="mannerenroll-subtitle">
            Enrollments for August 25, 2022 - October 24, 2022
          </span>
        </p>
      </Container>
      <Container>
        <Link className="mannerenroll-back button-link-style" to="/manners">
          Back
        </Link>
        {viewKndergartenStatus === "unavailable" ? (
          <form className="mannerenroll-form">
            <p className="mannerenroll-ins">
              <strong>{viewKndergartenStatus.toUpperCase()}</strong>
            </p>
          </form>
        ) : (
          <form onSubmit={saveEnroll} className="mannerenroll-form">
            <p className="mannerenroll-ins">
              <strong>Please fill in information below to enroll</strong>
            </p>
            <input
              className="mannerenroll-input"
              type="text"
              name="petname"
              onChange={handleInput}
              value={enrollInput.petname}
              placeholder="Pet Name"
            />
            <span className="add-manner-span">
              {enrollInput.error_list.petname}
            </span>
            <select
              name="age"
              className="mannerenroll-input"
              onChange={handleInput}
            >
              <option value=""></option>
              {viewAgeLists}
            </select>
            <span className="add-manner-span">
              {enrollInput.error_list.age}
            </span>
            <input
              className="mannerenroll-input"
              type="text"
              name="ownername"
              onChange={handleInput}
              value={enrollInput.ownername}
              disabled={user && user.firstname ? true : false}
              placeholder="Owner Name"
            />
            <span className="add-manner-span">
              {enrollInput.error_list.ownername}
            </span>
            <input
              className="mannerenroll-input"
              type="text"
              name="lastname"
              onChange={handleInput}
              disabled={user && user.lastname ? true : false}
              value={enrollInput.lastname}
              placeholder="Owner Last Name"
            />
            <span className="add-manner-span">
              {enrollInput.error_list.lastname}
            </span>
            <input
              className="mannerenroll-input"
              type="email"
              name="email"
              onChange={handleInput}
              disabled={user && user.email ? true : false}
              value={enrollInput.email}
              placeholder="Email"
            />
            <span className="add-manner-span">
              {enrollInput.error_list.email}
            </span>
            <input
              className="mannerenroll-input"
              type="text"
              name="phonenumber"
              onChange={handleInput}
              disabled={user && user.contactnumber ? true : false}
              value={enrollInput.phonenumber}
              placeholder="Phone Number"
            />
            <span className="add-manner-span">
              {enrollInput.error_list.phonenumber}
            </span>
            <input
              className="mannerenroll-input"
              type="text"
              name="address"
              onChange={handleInput}
              value={enrollInput.address}
              disabled={user && user.address ? true : false}
              placeholder="address"
            />
            <span className="add-manner-span">
              {enrollInput.error_list.address}
            </span>
            <button className="mannerenroll-button" type="submit">
              Enroll
            </button>
          </form>
        )}
      </Container>
    </>
  );
}

export default PuppyEnroll;
