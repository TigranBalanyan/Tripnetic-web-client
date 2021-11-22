import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import "./Registration"
import Button from '@mui/material/Button';

const Registration = () =>{

   return <div className="registration-wrapper">
      <h1>Please Register</h1>
      <form>
          <TextField id="filled-basic" label="username" />
        <label>
          <p></p>
          <TextField id="filled-basic" label="email"  
             />
        </label>
        <p></p>
        <div>
          <Button variant="contained" type="submit">Login</Button>
        </div>
      </form>
    </div>
}

export default Registration