import React, { useEffect, useState } from "react";
import {Link,useNavigate} from "react-router-dom"
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Data = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://api-backend-qbum.onrender.com/getData`)
      .then((response) => setData(response.data))
      .catch((err) => console.error(err));
  }, []);
  const UpdateData = (id) => {
    axios
      .put(`https://api-backend-qbum.onrender.com/updateuser/${id}`)
      .then((result) => {
        axios
          .get(`https://api-backend-qbum.onrender.com/getData`)
          .then((response) => setData(response.data))
          .catch((err) => console.error(err));
      })
      .catch((err) => console.log(err));
  };
  function deletitem(id){
     axios.put(`https://api-backend-qbum.onrender.com/deleteuser/${id}`)
     .then((result) => {
      axios
      .get(`https://api-backend-qbum.onrender.com/getData`)
      .then((response) => setData(response.data))
      .catch((err) => console.error(err));
     })
     console.error("Error deleting user:", error);
  }
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
      <Link to="/" className="btn btn-success">Add +</Link>
        <table className="table">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature(&deg;C)</th>
              <th>Feels_Like(&deg;C)</th>
              <th>Wind(m/s)</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => {
              return(
              <tr>
                <td>{row.place}</td>
                <td>{row.temp}</td>
                <td>{row.feelslike}</td>
                <td>{row.wind}</td>
                <td>{row.description}</td>
                <td>
                <button type="button" onClick={() => UpdateData(row._id)} className="btn btn-success w-100">Update</button>
                </td>
                <td>
                <button type="button" onClick={deletitem(row._id)} className="btn btn-success w-100">Delete</button>
                </td>
              </tr>
            );
            })} 
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Data;
