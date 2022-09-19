import React from "react";
import { Table } from "react-bootstrap";

const PetClassesDashboard = () => {
  return (
    <div className="dashboard-content">
      <div className="ownerproifile-header">
        <h3>
          <strong>Pet Details</strong>
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
            <th>Dates</th>
            <th>Time Start</th>
            <th>Time End</th>
            <th>Trainer</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
    </div>
  );
};

export default PetClassesDashboard;
