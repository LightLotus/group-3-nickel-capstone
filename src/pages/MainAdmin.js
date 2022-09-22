import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/MainAdmin.css";
import swal from "sweetalert";
import { Tabtitle } from "../components/GeneralFunctions";

const MainAdmin = () => {
  Tabtitle("Main Admin| Charming Pets");

  useEffect(() => {
    const customerLoggedIn = localStorage.getItem("customerLoggedIn");

    if (customerLoggedIn) {
      swal("Error!", "Cannot access admin page", "warning").then(() => {
        window.location.href = "/";
      });
    }
  }, []);

  return (
    <Container>
      <h1 className="main-admin-text">
        <span className=" text-dark">Admin </span>Dashboard Menu
      </h1>
      <div className="admin-container">
        <div className="admin-category">
          <Link to="/mannersadmin" className="admin-links">
            Enter Adult <br /> Training Class Admin Dashboard
          </Link>
        </div>
        <div className="admin-category">
          <Link to="/puppyadmin" className="admin-links">
            Enter Puppy Kindergarten Class Admin Dashboard
          </Link>
        </div>
        <div className="admin-category">
          <Link to="/adoptionadmin" className="admin-links">
            Enter Pet <br />
            Adoption <br /> Admin Dashboard
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default MainAdmin;
