import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import Copyright from './Copyright';
import { FormLabel, Container, Card, CardContent, CardActions } from '@material-ui/core';
import { stat } from 'fs';

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

    let [isDisabled, setIsDisabled] = React.useState(false)

    useEffect(() => {
    }, [isDisabled])

    return (
        <>
            <Container>
                <br />
                <br />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Password Reset
                    </Typography>
                    <br/>
                    <form className={classes.form} onSubmit={(e) => { e.preventDefault(); setIsDisabled(true)}} >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email for Password Recovery"
                            name="email"
                            autoComplete="email"
                            helperText="A token ID will be sent to the email provided below if it is and existing account. The token ID can be entered in the form at the bottom along with the new password."
                            autoFocus
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            disabled={isDisabled}
                        >
                            Submit
                        </Button>
                    </form>
                    <hr/>
                    <form className={classes.form}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="tokenID"
                            label="Enter Token ID"
                            name="tokenID"
                            autoComplete="tokenID"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="newpassword"
                            label="New Password"
                            name="newpassword"
                            autoComplete="newpassword"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="repeatnewpassword"
                            label="Re-enter New Password"
                            name="repeatnewpassword"
                            autoComplete="repeatnewpassword"
                        />
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
                                <Link to="/" variant="body2">
                                    <Button>
                                        Back To Login
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
