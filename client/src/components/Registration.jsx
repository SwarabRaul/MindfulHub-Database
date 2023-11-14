import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import './Registration.css'

const Registration = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        // Send a POST request to your server to create a new user
        const response = await fetch('http://localhost:8081/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });

        if (response.status === 200) {
            // User registered successfully, you can show a success message or redirect to the login page
            // Example: window.location.href = '/login';
            navigate('/login');
        } else {
            // Handle registration error
            console.error('Registration failed');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email Id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Register</button>

            {/* Add a link to the login page */}
            <p>Already have an account? <span onClick={() => navigate('/login')}>Login here</span></p>
        </div >
    );
};

export default Registration;
