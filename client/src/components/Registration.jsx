import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css'

const Registration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    const response = await fetch("http://localhost:8081/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (response.status === 200) {
      navigate('/questionnaireForm');
    } else {
      console.error('Registration failed');
    }
  };

  return (
    <div class="bg1">
      <div class="backdrop-filter">
        <div div className="login-container">
          <div class="login-form">
            <h2>Register</h2>

            <label htmlFor="username">Username</label>

            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="email">Email-Id</label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div class="btn">
              <button class="register" onClick={handleRegister}>
                Register
              </button>
            </div>
            <p>
              Already have an account?{" "}
              <span class="login" onClick={() => navigate("/login")}>
                Login here
              </span>
            </p>
          </div>
        </div>
      </div>
      /
    </div>
  );
};

export default Registration;
