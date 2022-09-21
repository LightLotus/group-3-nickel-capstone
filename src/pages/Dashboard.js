import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import "../css/DashBoardProfile.css";
import { Link, Outlet } from "react-router-dom";
import swal from "sweetalert";
import { Tabtitle } from "../components/GeneralFunctions";

const Dashboard = () => {
  Tabtitle("Dashboard | Charming Pets");

  useEffect(() => {
    const customerLoggedIn = localStorage.getItem("customerLoggedIn");

    if (!customerLoggedIn) {
      swal("Error!", "Cannot access customers page", "warning").then(() => {
        window.location.href = "/";
      });
    }
  }, []);

  return (
    <Container>
      <h1>My Account Dashboard</h1>

      <div className="dashboard-menu-container">
        <Link
          className="dashboard-menu d-menu px-5 border"
          to="/dashboard/ownerprofiledashboard"
        >
          View Profile
        </Link>
        <Link
          className="dashboard-menu d-menu px-5 border"
          to="/dashboard/petclassesdashboard"
        >
          Pet's Classes
        </Link>
        <Link
          className="dashboard-menu d-menu px-5 border"
          to="/dashboard/adoptiondashboard"
        >
          Adoption
        </Link>
      </div>
      <div className="border-box-dash border">
        <Outlet />
      </div>
    </Container>
  );
};

export default Dashboard;
