import React from "react";
import { Link } from "react-router-dom";
import "../css/DashBoardProfile.css";

const OwnerProfileDashboard = () => {
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
          Name: <span>John Doe</span>{" "}
        </p>
        <p>
          Phone No: <span>09091234576</span>{" "}
        </p>
        <p>
          Address: <span>John Doe</span>{" "}
        </p>
      </div>
      <hr />
      <p>
        Email: <span>johndoe@email.com</span>{" "}
      </p>
      <p>
        Password: <span>********</span>{" "}
      </p>
    </div>
  );
};

export default OwnerProfileDashboard;
