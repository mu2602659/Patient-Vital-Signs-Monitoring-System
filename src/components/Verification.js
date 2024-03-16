import React, { useState } from 'react';
import './Verification.css'; // Import CSS file for component-specific styles

function Verification() {
  const [verificationCode, setVerificationCode] = useState('');

  const handleChange = e => {
    setVerificationCode(e.target.value);
  };

  const handleVerification = () => {
    // Implement verification logic
  };

  return (
    <div className="verification-container">
      <h3>Verify Email</h3>
      <p>Please enter the verification code sent to your email.</p>
      <div className="form-container">
        <input
          type="text"
          className="form-control"
          placeholder="Verification Code"
          value={verificationCode}
          onChange={handleChange}
        />
        <button type="button" className="btn btn-custom-purple" style={{ backgroundColor: 'purple', color: 'white' }} onClick={handleVerification}>
          Verify
        </button>
      </div>
    </div>
  );
}

export default Verification;
