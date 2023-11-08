import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import './Login.css'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    useEffect(() => {

        if (localStorage.getItem("token")) {
            navigate('/')
        }

    }, [navigate])


    const handleLogin = async () => {
        const response = await fetch('http://localhost:8081/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.status === 200) {
            const data = await response.json()
            localStorage.setItem('token', data)
            window.location.reload()

            navigate('/')
        } else {
            const data = await response.json()
            alert(data.message);
        }

    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>

            {/* Add the Sign Up button with a Link to the Registration page */}
            <Link to="/register">
                <button class="signup">Sign Up</button>
            </Link>
        </div>
    );
};

export default Login;
