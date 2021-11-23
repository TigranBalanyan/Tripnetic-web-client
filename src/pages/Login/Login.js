import "./Login.css"
import Button from '@mui/material/Button';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

function Login() {

  const [showPassword, setShowPassword] = useState(false);
  
  const LoginButton = () => {
    const { loginWithRedirect } = useAuth0(); 
  }
  
  const [token, setToken] = useState();
  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form>
          <TextField id="filled-basic" label="username" />
        <label>
          <p>Password</p>
          <TextField id="filled-basic" label="password" 
            type={showPassword ? "text" : "password"} 
             />
        </label>
        <p></p>
        <div>
          <Button variant="contained" type="submit" onClick={ ()=> loginWithRedirect() }>Login</Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
