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

// const validEmailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
// const validateForm = errors => {
//   let valid = true;
//   Object.values(errors).forEach(val => val.length > 0 && (valid = false));
//   return valid;
// };

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


export default function SignUp({ setLoggedIn }) {
  const classes = useStyles();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
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

      case 'email':
        setEmail(value);
        break;
      default:
    }
  };

  const backtoSignIn = () => {
    history.push({
      pathname: `/SignIn`,
    });
  }
  const handleSubmit = async e => {
    e.preventDefault();
    controller.signUp(username, password, email).then(data => {
      if (data.status === 'ok') {
        setMessage("Sign Up Success")
      }
      else
        setMessage("Sign Up Failed")
    });

  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
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
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            value={email}
            label="Email"
            type="email"
            id="email"
            autoComplete="email"
            onChange={handleChange}
          />
          <Typography variant="body1" color = "primary">
            {message}
          </Typography>
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
            Sign Up
          </Button>

          <Button
            onClick={backtoSignIn}
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            style={{
              marginBottom: '24px',
            }}
          >
            Return to Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}

// class signupComponent extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       email: '',
//       password: '',
//       errors: {
//         email: '',
//       },
//     };
//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleInputChange(event) {
//     const { name, value } = event.target;
//     const { errors } = this.state;
//
//     switch (name) {
//       case 'email':
//         errors.email = !validEmailRegex.test(value) ? 'Not a Valid Email' : '';
//         break;
//     }
//
//     this.setState({ errors, [name]: value });
//
//     this.setState({
//       [name]: value,
//     });
//   }
//
//   handleSubmit(event) {
//     event.preventDefault();
//
//     if (validateForm(this.state.errors)) {
//       window.location.replace(
//         `${host}/auth/signup/callback?email=${this.state.email}&password=${this.state.password}`,
//       );
//     }
//   }
//
//   render() {
//     return (
//       <div className="row row-container">
//         <div className="col-12">
//           <h1>
//             <span className="fa fa-sign-in"></span>Sign Up
//           </h1>
//         </div>
//         <div className="col-sm-6 col-sm-offset-3">
//           <Form onSubmit={this.handleSubmit}>
//             <FormGroup row>
//               <Label htmlFor="email" md={2}>
//                 Email
//               </Label>
//               <Col md={7}>
//                 <Input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={this.state.email}
//                   onChange={this.handleInputChange}
//                 />
//               </Col>
//               <Col md={3}>
//                 {this.state.errors.email.length > 0 && (
//                   <Alert color="danger">{this.state.errors.email}</Alert>
//                 )}
//               </Col>
//             </FormGroup>
//             <FormGroup row>
//               <Label htmlFor="password" md={2}>
//                 Password
//               </Label>
//               <Col md={7}>
//                 <Input
//                   type="password"
//                   id="password"
//                   name="password"
//                   value={this.state.password}
//                   onChange={this.handleInputChange}
//                 />
//               </Col>
//             </FormGroup>
//             <FormGroup row>
//               <Col md={{ size: 10, offset: 2 }}>
//                 <Button type="submit" color="warning">
//                   Sign Up
//                 </Button>
//               </Col>
//             </FormGroup>
//           </Form>
//           <Col md={{ size: 10, offset: 2 }}>
//             <NavLink to="/auth">Login</NavLink>
//           </Col>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default signupComponent;
