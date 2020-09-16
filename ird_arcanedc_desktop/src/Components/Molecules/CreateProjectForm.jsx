import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AssessmentIcon from '@material-ui/icons/Assessment';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import Copyright from './Copyright';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import {Col, Row} from 'react-bootstrap'

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

export default function CreateProjectForm() {

    const classes = useStyles();

    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <>
            <br />
            <br />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <AssessmentIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Create Project
                </Typography>
                <hr />
                <form className={classes.form}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="pcode"
                        label="Project Code"
                        name="pcode"
                        autoComplete="pcode"
                        helperText="Short name for the project"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="pname"
                        label="Project Name"
                        name="pname"
                        autoComplete="pname"
                        helperText="Full name of the project"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="projectco"
                        label="Project Co-rodinator"
                        name="projectco"
                        autoComplete="projectco"
                        disabled
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="projectcoemail"
                        label="Project Co-rodinator Email"
                        name="projectcoemail"
                        autoComplete="projectcoemail"
                        disabled
                        autoFocus
                    />
                    <Grid container justify="space-around">
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Project Deadline"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{ 'aria-label': 'change date', }}
                                fullWidth
                                required
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>


                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Create Project
                    </Button>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </form>
            </div>
        </>
    )
}
