import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';





export const LoginView = () =>{

    const paperStyle={padding: 20, height : '70vh' , width : 680 , margin:"20px auto"}
    const btnStyle={margin:'8px 0'}
    const avatarStyle={backgroundColor:'green'}
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const setLogIn = (logged) => {
        localStorage.setItem('isLoggedIn',logged);
        if(!logged){
            Swal.fire({
                title: 'Bad credentials!',
                text: 'Continue',
                icon: 'error',
                confirmButtonText: 'Cool'
              });
        }
        else{
            window.location.href = "/profile";
        }
    }

    const handlePasswordChange = (e) =>{
        setPassword(e.target.value)
    }

    const handleUsernameChange = (e) =>{
        setUsername(e.target.value)
    }

    const handleSubmit = (e) => {
        const isLogged = (username === localStorage.getItem("username") && password === localStorage.getItem("password"));
        setLogIn(isLogged);
    }

    return (
        <div>
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign in</h2>
                </Grid>
                <TextField 
                    label='Username' 
                    placeholder = 'Enter username' 
                    fullWidth required 
                    onChange={handleUsernameChange}
                />
                <br/>  
                <TextField 
                    label='Password' 
                    placeholder = 'Enter password' 
                    type ='password' 
                    fullWidth required 
                    onChange={handlePasswordChange}
                />
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                />
                <Button
                    type='submit' 
                    color='primary' 
                    style = {btnStyle} 
                    variant = 'contained' 
                    fullWidth required
                    onClick = {handleSubmit}
                >
                        Sign in
                </Button>
                <Typography align="left">
                <Link to="/login">
                    Forgot password?    
                </Link>
                </Typography >
                <Typography align="left"> Do you have an account? &nbsp;
                <Link to="/login">
                    Sign up
                </Link>
                </Typography>
            </Paper>
        </Grid>
        </div>
    );
}
