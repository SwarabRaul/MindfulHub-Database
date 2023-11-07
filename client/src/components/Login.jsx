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

            <button class="login" onClick={handleLogin}>Login</button>
        </form>
    </div>
    );
};

export default Login;
