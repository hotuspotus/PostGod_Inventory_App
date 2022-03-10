import React, { Component } from "react";
import { 
  Button, Grid, Typography, TextField, 
  FormHelperText, FormControl, Radio, RadioGroup, 
  FormControlLabel, Container, Modal, Box, Stack, Dialog,
  DialogContent, DialogTitle, DialogContentText, DialogActions
} from '@mui/material'
import { withRouter, Link } from 'react-router-dom';

function GoToAudit (){
    return (
      <>
      <Link to="/audit">
        <Button variant="contained">
          Audit
        </Button>
      </Link>
      </>
    );        
}
export default GoToAudit;

  