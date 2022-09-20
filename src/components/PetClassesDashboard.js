import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import swal from "sweetalert";
import axios from "axios";

const PetClassesDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [kinderGarteens, setKinderGarteens] = useState([]);
  const [petmanners, setPetManners] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userData"));

    if (!user) {
      swal("Error!", "No customer found!", "error");
    }

    axios
      .get(`http://127.0.0.1:8000/api/puppyenroll/${user.id}/dashboard`)
      .then((res) => {
        if (res.status === 200) {
          setKinderGarteens(res.data.kindergartenPups);
          setLoading(false);
        }
      });

    axios
      .get(`http://127.0.0.1:8000/api/mannerenroll/${user.id}/dashboard`)
      .then((res) => {
        if (res.status === 200) {
          setPetManners(res.data.mannerPups);
          setLoading(false);
        }
      });
  }, []);

  let petKinderGarten = "";

  if (loading) {
    petKinderGarten = <h4>Loading Kindergarten sched...</h4>;
  } else {
    if (kinderGarteens.length) {
      petKinderGarten = kinderGarteens.map((kinder, index) => {
        return (
          <>
            <div>
              <p>
                Name: <strong>{kinder.petname}</strong>{" "}
              </p>
              <p>
                Age: <span>{kinder.age}</span>{" "}
              </p>
            </div>
            <Table key={index} striped bordered hover>
              <thead>
                <tr>
                  <th>Dates</th>
                  <th>Time Start</th>
                  <th>Time End</th>
                  <th>Trainer</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{kinder.puppies[0].date}</td>
                  <td>{kinder.puppies[0].timestart}</td>
                  <td>{kinder.puppies[0].timeend}</td>
                  <td>{kinder.puppies[0].trainer}</td>
                  <td>{kinder.puppies[0].status.toUpperCase()}</td>
                </tr>
              </tbody>
            </Table>
            <hr />
          </>
        );
      });
    } else {
      petKinderGarten = "No class for kindergarten";
    }
  }

  let petManners = "";

  if (loading) {
    petManners = <h4>Loading Pet Manners sched...</h4>;
  } else {
    if (petmanners.length) {
      petManners = petmanners.map((petmanner, index) => {
        return (
          <>
            <div>
              <p>
                Name: <strong>{petmanner.petname}</strong>{" "}
              </p>
              <p>
                Age: <span>{petmanner.age}</span>{" "}
              </p>
            </div>
            <Table key={index} striped bordered hover>
              <thead>
                <tr>
                  <th>Dates</th>
                  <th>Time Start</th>
                  <th>Time End</th>
                  <th>Trainer</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{petmanner.manners[0].date}</td>
                  <td>{petmanner.manners[0].timestart}</td>
                  <td>{petmanner.manners[0].timeend}</td>
                  <td>{petmanner.manners[0].trainer}</td>
                  <td>{petmanner.manners[0].status.toUpperCase()}</td>
                </tr>
              </tbody>
            </Table>
            <hr />
          </>
        );
      });
    } else {
      petManners = "No class for pet manners";
    }
  }
  return (
    <div className="dashboard-content">
      <div className="ownerproifile-header">
        <h3>
          <strong>Pet Kindergarten Schedule</strong>
        </h3>
      </div>

      {petKinderGarten}

      <div className="ownerproifile-header">
        <h3>
          <strong>Pet Manners Schedule</strong>
        </h3>
      </div>

      {petManners}
    </div>
  );
};

export default PetClassesDashboard;
