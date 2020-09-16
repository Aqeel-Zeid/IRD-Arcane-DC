import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

import Copyright from './Copyright';
import { FormLabel, Container , Card , CardContent , CardActions } from '@material-ui/core';




// Custom Styling for the Form 
const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(8, 4),
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
}));

export default function PasswordResetForm() {

    const classes = useStyles();


    return (
        <>
            <Container>
            <br />
            <br />
            <   div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Password Reset
                </Typography>
                    <Container>
                        Message About Password Reset
                    </Container>
                
                <form className={classes.form} noValidate>
                    
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Reset Password
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link to="/PasswordReset" variant="body2">
                                <Button>
                                    Forgot password?
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/SignUp" >
                                <Button color="info">
                                    {"Register as New Lead Coordinator"}
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </form>
            </div>
            </Container>
        </>
    )
}
