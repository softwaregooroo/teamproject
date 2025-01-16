import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './style.css'; // Import your CSS file

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically handle the login logic
    // e.g., send a request to your server to authenticate the user
    console.log('Username:', username);
    console.log('Password:', password);
  };
   
  
  return (
    <div className='page-container'>
    <div className="login-container">
      <h1>Login</h1>
      <form className='form'onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <button type="submit" className="login-button">
          Login
        </button>
        <p className='fp'id='fp'> forget password</p>
        <p>
        Already have an account? <Link to="/signup">Signup</Link>
      </p>
      
      
      </form>
      
    </div>
    <script>

      
    </script>
    </div>
  );
}

export default Login;