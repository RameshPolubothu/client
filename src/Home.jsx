import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState } from "react";
const Home = () => {
    const [name,setname] = useState("");
    const navigate = useNavigate();
    function handleSubmit(event) {
        event.preventDefault();
        axios.post(`https://api-backend-qbum.onrender.com/city`,{name})
            .then(result => {
                console.log(result);
                if(result.data === "Place already exists"){
                  navigate('/data');
                }
                navigate('/data'); 
            })
            .catch(err => console.log(err));
    }
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: "300px" }}>
        <h3 className="text-center">Weather App</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              <strong>City</strong>
            </label>
            <input
              type="text"
              className="form-control"
              autoComplete="off"
              id="name"
              placeholder="Enter City Name"
              onChange={(event) => setname(event.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">Weather</button>
        </form>
        <div className="text-center mt-3">
          <Link to="/data" className="btn btn-success w-100">
            DATA
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
