import React, { useState } from 'react';
import decode from "jwt-decode";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch } from 'react-redux';
import LockIcon from '@material-ui/icons/Lock';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';



const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Register({ history }) {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const capFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            let res = await fetch('http://localhost:1000/auth/register', {
                method: 'POST',
                body: JSON.stringify({ fname: capFirstLetter(fname), lname: capFirstLetter(lname), username, password }),
                headers: { "content-type": "application/json" }
            })
            let data = await res.json()
            if (data.error) {
                setError(data.msg)
                setTimeout(() => {
                    setError('')
                }, 3000);
                if (!password) {
                    document.querySelector('#password').focus()
                }
                if (!username) {
                    document.querySelector('#username').focus()
                }
                if (!lname) {
                    document.querySelector('#lastName').focus()
                }
                if (!fname) {
                    document.querySelector('#firstName').focus()
                }
            } else {
                localStorage.token = data.access_token;
                const { id, role, username, fname, lname } = decode(data.access_token);
                dispatch({
                    type: "LOGIN",
                    payload: { id, role, username, fname, lname },
                });
                history.push("/vacations");
                console.log('Registered and logged')
            }
        } catch (error) {
            throw error
        }
    }


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Typography component="h1" variant="h5" color="secondary">
                    {error}
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                onChange={(e) => setFname(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                onChange={(e) => setLname(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="username"
                                label="username"
                                type="username"
                                id="username"
                                onChange={(e) => setUsername(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={(e) => setPassword(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={(e) => handleRegister(e)}
                    >
                        Sign Up
          </Button>
                    <Grid container justify="center">
                        <Grid item>
                            <Link component={RouterLink} to="/login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}