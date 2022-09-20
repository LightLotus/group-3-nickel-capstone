import React from "react";
import { Link } from "react-router-dom";
import "../css/DashBoardProfile.css";

const OwnerProfileDashboard = () => {
  const user = JSON.parse(localStorage.getItem("userData"));

  return (
    <div className="dashboard-content">
      <div className="ownerproifile-header">
        <h3>
          <strong>Owner Details</strong>
        </h3>
        <Link to="/dashboard/editprofiledashboard">Edit Profile</Link>
      </div>
      <div>
        <p>
          Name:{" "}
          <span>
            <strong>{user.firstname}</strong>
          </span>{" "}
          <span>
            <strong>{user.lastname}</strong>
          </span>{" "}
        </p>
        <p>
          Phone No:{" "}
          <span>
            <strong>{user.contactnumber}</strong>
          </span>{" "}
        </p>
        <p>
          Address:{" "}
          <span>
            <strong>{user.address}</strong>
          </span>{" "}
        </p>
        <p>
          Email:{" "}
          <span>
            <strong>{user.email}</strong>
          </span>{" "}
        </p>
      </div>
      <hr />
    </div>
  );
};

export default OwnerProfileDashboard;
