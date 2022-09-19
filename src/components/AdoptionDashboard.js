import React from "react";
import { Table } from "react-bootstrap";

const AdoptionDashboard = () => {
  return (
    <div className="dashboard-content">
      <div className="ownerproifile-header">
        <h3>
          <strong>Adoption Details</strong>
        </h3>
      </div>
      <div>
        <p>
          Name: <span>Nala</span>{" "}
        </p>
        <p>
          Age: <span>1</span>{" "}
        </p>
      </div>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Pet Name</th>
            <th>Animal Type</th>
            <th>Estimated Birthday</th>
            <th>Color</th>
            <th>Sex</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody></tbody>
        <p className="mt-5">
          <strong>Zoom Interview Schedule:</strong>{" "}
        </p>
        <p>
          Date: <span>October 1, 2022</span>
        </p>
        <p>
          Time: <span>9:30AM</span>
        </p>
      </Table>
    </div>
  );
};

export default AdoptionDashboard;
