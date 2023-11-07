import React, { useState } from 'react';
import './Login.css';




const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        // Send a POST request to your server to authenticate the user
        const response = await fetch('/user/login', {
            method: 'POSR',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.status === 200) {
            // User logged in successfully, you can redirect to another page
            // Example: window.location.href = '/dashboard';
        } else {
            // Handle login error
            console.error('Login failed');
        }
    };

    return (
        <div class="login-container">
        <h2>MindfulHub</h2>
        <form class="login-form" action="login.php" method="post">
            <label for="username">Username</label>
            <input type="text" 
             value={username} 
             required placeholder='Enter username'
             onChange={(e) => setUsername(e.target.value)}
             />

            <label for="password">Password</label>
            <input type="password" 
            value={password} 
            required placeholder='Enter Password'
            onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleLogin}>Login</button>
        </form>
    </div>
    );
};

export default Login;
