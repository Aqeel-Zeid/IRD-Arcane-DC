import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Grid , Paper } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';
import SignUpForm from '../Molecules/SignUpForm';



const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
}));


export default function SignUpPage() {

    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={5} className={classes.image} />
            <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square>
                <SignUpForm/>       
            </Grid>
        </Grid>
    )
}
