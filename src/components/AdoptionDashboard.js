import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import swal from "sweetalert";
import axios from "axios";

const AdoptionDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [pets, setPets] = useState([]);

  // code to display adoption animals
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userData"));

    if (!user) {
      swal("Error!", "No customer found!", "error");
    }

    axios
      .get(`http://127.0.0.1:8000/api/adoption/${user.id}/dashboard`)
      .then((res) => {
        if (res.status === 200) {
          setPets(res.data.adoptedPets);
          setLoading(false);
        }
      });
  }, []);

  let adoptedPets = "";

  if (loading) {
    adoptedPets = <h4>Loading Pets...</h4>;
  } else {
    if (pets.length) {
      adoptedPets = pets.map((pet, index) => {
        return (
          <>
            <Table key={index} striped bordered hover>
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
              <tbody>
                <tr>
                  <td>{pet.petname}</td>
                  <td>{pet.animaltype}</td>
                  <td>{pet.estbirthday}</td>
                  <td>{pet.color}</td>
                  <td>{pet.sex}</td>
                  <td>{pet.pivot.status.toUpperCase()}</td>
                </tr>
                <tr>
                  <td colSpan="6">
                    <p className="mt-5">
                      <strong>Zoom Interview Schedule:</strong>{" "}
                    </p>
                    <p>
                      Date: <strong>{pet.pivot.dateinterview}</strong>
                    </p>
                    <p>
                      Time: <strong>{pet.pivot.timeinterview}</strong>
                    </p>
                  </td>
                </tr>
              </tbody>
            </Table>
          </>
        );
      });
    } else {
      return (
        <>
          <h3>
            <strong>Adoption Details</strong>
          </h3>
          <p>No data found</p>
        </>
      );
    }
  }

  return (
    <div className="dashboard-content">
      <div className="ownerproifile-header">
        <h3>
          <strong>Adoption Details</strong>
        </h3>
      </div>

      {adoptedPets}
    </div>
  );
};

export default AdoptionDashboard;
