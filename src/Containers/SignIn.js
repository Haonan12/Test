/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import controller from "../Libs/ApiLib";

import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(12),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  authImg: {
    width: '25px',
    height: '25px',
    marginRight: '5px',
    // lineHeight: '15px',
  },
}));


export default function SignIn( ) {
  const classes = useStyles();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');


  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'password':
        setPassword(value);
        break;
      case 'username':
        setUsername(value);
        break;
      default:
    }
  };

  const handleSignUp = () => {
    history.push({
      pathname: `/SignUp`,
    });
  }
  const handleSubmit = async e => {
    e.preventDefault();
    controller.signIn(username, password).then(data => {
      if (data.status === 'ok') {
        setLoggedIn(true);
        history.push({
          pathname: `/Profile`,
        });

      }

    });
    setMessage('Login Failed')
    console.log("1")

  };
  console.log(message)
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="username"
            value={username}
            autoComplete="username"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            value={password}
            label="Password"
            type="password"
            id="password"
            autoComplete="password"
            onChange={handleChange}
          />
          <Typography variant="body1" color = "primary">
            {message}
          </Typography>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{
              marginBottom: '24px',
            }}
          >
            Sign In
          </Button>

          <Button
            onClick={handleSignUp}
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            style={{
              marginBottom: '24px',
            }}
          >
            Don't have a account? Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
}
