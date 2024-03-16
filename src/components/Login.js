import React from 'react';
import './Login.css'; // Import CSS file for component-specific styles
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="container-fluid login-container">
      <div className="row justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 d-flex justify-content-center">
          <div className="login-title">
            <h1>Welcome to LifeTrack!</h1>
            <p>Remote Health Monitoring System of Patient's Vital Signs.</p>
          </div>
        </div>
        <div className="col-md-5 d-flex justify-content-center">
          <div className="login-form-container">
            <div className="card-body login-form">
              <h2>Login</h2>
              <form>
                <div className="form-group">
                  <label>Email:</label>
                  <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className="d-grid mb-3">
                  <button type="submit" className="btn btn-custom-purple" style={{ backgroundColor: 'purple', color: 'white' }}>
                    Submit
                  </button>
                </div>
                <p className="signup text-left">
                  Don't have an account? <Link to="/signup">Register Yourself</Link>
                </p>
                <p className="forgot-password text-right">
                  Forgot <a href="#">password?</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
