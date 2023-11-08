import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
      
        if( localStorage.getItem("token") ){
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
            localStorage.setItem('token',data)
            window.location.reload()

            navigate('/')
        } else {
            const data = await response.json()
            alert(data.message);
        }

    };

    return (
        <div className="login-container">
        <h2>MindfulHub</h2>
        <div className="login-form">
            <label htmlFor="username">Username</label>
            <input type="text" 
             value={username} 
             required placeholder='Enter username'
             onChange={(e) => setUsername(e.target.value)}
             />

            <label htmlFor="password">Password</label>
            <input type="password" 
            value={password} 
            required placeholder='Enter Password'
            onChange={(e) => setPassword(e.target.value)}
            />

            <button className="login" onClick={handleLogin}>Login</button>
        </div>
    </div>
    );
};

export default Login;
