
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="containers">
      <div className="header">
      <Link to="/"><img src="./images/cvsu-logo.png" alt="University Logo" className="logo" /></Link>
        <p>CAVITE STATE UNIVERSITY <br /> BACOOR CAMPUS</p>
      </div>
      
      <div className="login-signup-form">
        <div className="form">
          <form>
            <input type="email" placeholder="Email" required/>
            <input type="password" placeholder="Password" required />
            <Link to="/"><button className="btn btn-block">Login</button></Link>
            <p className="message">
              Not Registered? <Link to="/register">Create a new account</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
