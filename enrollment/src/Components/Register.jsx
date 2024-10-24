import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [yearLevel, setYearLevel] = useState("");
  const [department, setDepartment] = useState("");

  const handleYearLevelChange = (event) => {
    setYearLevel(event.target.value); // Just update the state here
  };
  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value); // Update state with selected department
};

  return (
    <div>
      <div class="header">
        <Link to="/apps">
          <img
            src="./images/cvsu-logo.png"
            alt="University Logo"
            className="logo"
          />
        </Link>
        <p className="title">
          CAVITE STATE UNIVERSITY <br />
          BACOOR CAMPUS
        </p>
      </div>
      <div className="login-signup-form animated fadeinDown">
        <div className="form">
          <form>
            <input type="name" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <select
              id="yr_lvl"
              value={yearLevel}
              onChange={handleYearLevelChange}
            >
              <option value="" disabled selected>
                Year Level
              </option>
              <option value="one-1">1rst Year - 1rst Semester</option>
              <option value="one-2">1rst Year - 2nd Semester</option>
              <option value="two-1">2nd Year - 1st Semester</option>
              <option value="two-2">2nd Year - 2nd Semester</option>
              <option value="three-1">3rd Year - 1st Semester</option>
              <option value="three-2">3rd Year - 2nd Semester</option>
              <option value="four-1">4th Year - 1st Semester</option>
              <option value="four-2">4th Year - 2nd Semester</option>
            </select>

            <select
              id="department"
              value={department}
              onChange={handleDepartmentChange}
            >
              <option value="" disabled selected>
                Select a Department
              </option>
              <option value="comp_sci">
                Bachelor of Science in Computer Science
              </option>
              <option value="info_tech">
                Bachelor of Science in Information Technology
              </option>
            </select>
            <select id="student-type">
              <option value="" disabled selected>
                Student Type
              </option>
              <option value="regular">Regular Student</option>
              <option value="Irreg">Irregular Student</option>
              <option value="Transferee">Transferee Student</option>
            </select>

            <Link
              to="/regform"
              state={{ yearLevel: yearLevel, department: department }}
            >
              {/* Pass both yearLevel and department to RegForm */}
              <button className="btn btn-block">Register</button>
            </Link>
            <p className="message">
              Already Have An Account?
              <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
