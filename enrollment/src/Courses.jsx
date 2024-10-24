import React from "react";
import "./Course.css";
import './fonts.css';
function Courses() {
  return (
    <section id="Course">
      <h1 className="titles">COURSE</h1>
      <div className="section-container">
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-containers">
              <h3>
                <img
                  className="logos"
                  src="./images/cs.png"
                  alt="Cavite State University Logo"
                />
              </h3>
              <br />
              <p>CvSU Bacoor - Alliance of Computer Scientist</p>
            </div>
            <div className="details-containers">
              <h3><img
                  className="logos"
                  src="./images/it.png"
                  alt="Cavite State University Logo"
                /></h3>
              <br />
              <p>
              CvSU-Bacoor: Information Technology Society 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;
