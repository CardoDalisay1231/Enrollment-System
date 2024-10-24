import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function RegForm() {
  const [selectedImage, setSelectedImage] = useState(null);
  const location = useLocation(); // Access the location hook
  const { yearLevel, department } = location.state;

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      // Instantly display the image
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div>
      <div className="header">
        <Link to="/">
          <img
            src="./images/cvsu-logo.png"
            alt="University Logo"
            className="logo"
          />
        </Link>
        <p className="title">
          CAVITE STATE UNIVERSITY <br /> BACOOR CAMPUS
        </p>
      </div>
      <div className="form-container">
        <h2>REGULAR FORM</h2>

        <section className="form-section">
          <div className="image-upload-container">
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleImageChange}
            />
            {selectedImage && (
              <div className="image-preview">
                <img
                  src={selectedImage}
                  alt="Uploaded"
                  style={{ maxWidth: "100px", maxHeight: "100px" }}
                />
              </div>
            )}
          </div>
        </section>
        <section className="form-section">
          <label>Name:</label>
          <div className="form-row">
            <input type="text" placeholder="Family Name" />
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Middle Name" />
            <input type="text" placeholder="Suffix" />
          </div>
        </section>

        <section className="form-section">
          <div className="form-row">
            <input type="date" placeholder="Date of Birth" />
            <input type="text" placeholder="Place of Birth" />
            <input type="number" placeholder="Age" />
            <input type="text" placeholder="Status" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Mobile" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Religion" />
            <input type="text" placeholder="Citizenship" />
          </div>
        </section>

        <section className="form-section">
          <label>Home Address:</label>
          <input type="text" placeholder="House Number / Street / Barangay" />
          <div className="form-row">
            <input type="text" placeholder="Region" />
            <input type="text" placeholder="Province" />
            <input type="text" placeholder="Municipality" />
            <input type="text" placeholder="Zipcode" />
          </div>
        </section>

        <section className="form-section">
          <label>Guardian Name:</label>
          <div className="form-row">
            <input type="text" placeholder="Family Name" />
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Middle Name" />
            <input type="text" placeholder="Relation" />
          </div>
        </section>

        <div className="button-container">
          <Link
            to="/regformpt2"
            state={{ yearLevel: yearLevel, department: department }}
          >
            {/* Pass both yearLevel and department to RegFormPt2 */}
            <button type="submit">Submit</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegForm;
