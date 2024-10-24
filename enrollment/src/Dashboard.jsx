// src/Dashboard.jsx
import React from "react";
import "./Dashboard.css";
import './Fonts.css';
import { Link } from "react-router-dom";
import PrototypeModal from "./PrototypeModal";

function Dashboard() {
  return (
    
    <div className="containers">
       <PrototypeModal /> 
      <nav className="desktop-nav">
        <div className="nav-name">Enrollment System</div>
        <div>
          <ul className="navigation">
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Course">Courses</a>
            </li>
            <li>
              <a href="#Admission">Admission</a>
            </li>
          </ul>
        </div>
      </nav>
       

      <section id="Home" className="main-content">
          <div className="welcome-container">
            <div className="welcome-text">
              <h2 className="hello">Hello Welcome,</h2>
              <h1 className="university-name">
                CAVITE STATE
                <br /> UNIVERSITY -<br />BACOOR CAMPUS
              </h1>
              <Link to="/login"><button className="applys-buttons">APPLY NOW</button></Link>
            </div>
            <img
              className="logos"
              src="./images/cvsu-logo.png"
              alt="Cavite State University Logo"
            />
          </div>
      </section>
    </div>
  );
}

export default Dashboard;
