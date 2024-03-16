import React, { useState, useEffect } from 'react';
import './Signup.css'; // Import CSS file for component-specific styles
import { Link } from 'react-router-dom';

function SignUp() {
  const [countries, setCountries] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    phoneNumber: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        // Extracting required data (name and alpha3Code) from the response
        const formattedData = data.map(country => ({
          name: country.name.common,
          code: country.cca3
        }));
        setCountries(formattedData);
      })
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (Object.values(formData).every(value => value !== '')) {
      // All fields are filled
      // You can submit the form data here
      console.log('Form submitted:', formData);
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="container-fluid signup-container">

      <div className="row justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-5">
          <div className="signup-title">
            <h1>Welcome to LifeTrack!</h1>
            <p>Remote Health Monitoring System of Patient's Vital Signs.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card signup-form-container">
            <div className="card-body signup-form">
              <h2>Signup</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>First Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    placeholder="Enter first name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    placeholder="Enter last name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group form-inline">
              <div className="form-group" style={{ width: 'calc(50% - 5px)', marginRight: '10px' }}>
                <label>Country:</label>
                <select
                  className="form-control"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="">Select Country</option>
                  {countries.map(country => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Phone Number:</label>
                <input
                  type="tel"
                  className="form-control"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-custom-purple">
                    <Link to="/verification" className="btn btn-custom-purple" style={{ backgroundColor: 'purple', color: 'white' }}>Sign Up</Link>
                  </button>
                </div>
                <p className="signup text-left">
                  Already registered? <Link to="/login">Sign in</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
