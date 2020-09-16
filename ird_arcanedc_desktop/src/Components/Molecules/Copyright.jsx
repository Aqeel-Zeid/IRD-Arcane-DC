import React from 'react'
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";


export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <a href="https://www.ird.lk/" >
        Institute for Research & Development in Health & Social Care
        </a>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
