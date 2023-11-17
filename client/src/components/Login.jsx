import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'

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
        <div class="bg1">

            <div class="backdrop-filter">

                < div className="login-container" >
                    <h2>Log In</h2>
                    <div class="login-form">
                        <label htmlFor="username">Username</label>
                        <input type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <label htmlFor="password">Password</label>
                        <input type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}

                        />
                        <div class="btn">
                            <button class="login" onClick={handleLogin}>Login</button>

                            <Link to="/register">
                                <button class="signup">Sign Up</button>
                            </Link>
                        </div>
                    </div>
                </div >
            </div>
        </div>
    );
};

export default Login;
