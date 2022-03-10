import React, { Component } from "react";
import { 
  Button, Grid, Typography, TextField, 
  FormHelperText, FormControl, Radio, RadioGroup, 
  FormControlLabel, Container, Modal, Box, Stack, Dialog,
  DialogContent, DialogTitle, DialogContentText, DialogActions, Pagination
} from '@mui/material'
import { withRouter, Route  } from 'react-router-dom';
import AuditTable from "./AuditTable"


export default class Audit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audit: {
        name: null,
        description: null,
        quantity: null,
        unit_price: null,
        location: null,
        memo: null,
        purchase_date: null
            }
        };
    }


    handleDoAuditOpen(){
        this.setState({dialog_open: true});
      }
    
      handleDoAuditClose(){
        this.setState({dialog_open: false});
      }


    renderDoAudit(){
        return(
            <>  
            <Button variant="contained" onClick={this.handleDoAuditOpen}>
                Do an Audit
          </Button>
          <Dialog open={this.state.dialog_open} onClose={this.handleDoAuditClose}>
          <DialogTitle>Is this information correct?</DialogTitle>
          <DialogContent>
            <DialogContentText>
                
            </DialogContentText>
            \
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleAddItemSubmit}>Submit</Button>
            <Button onClick={this.handleAddItemClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
        </>
        );
        }

    render() {
        return (
            <>
                <Container>
                    <Typography component="h1" variant="h2" align='center'>
                        PostGod Auditing
                    </Typography>
                    <AuditTable/>
                    </Container>
                    <Container>
                    <Button variant="contained">Make New Audit</Button>
                    <Button variant="contained">Export an Audit</Button>
                </Container>
            </>
            
        );
      }

}