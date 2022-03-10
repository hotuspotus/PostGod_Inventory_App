import React, { Component } from "react";
import { 
  Button, Grid, Typography, TextField, 
  FormHelperText, FormControl, Radio, RadioGroup, 
  FormControlLabel, Container, Modal, Box, Stack, Dialog,
  DialogContent, DialogTitle, DialogContentText, DialogActions
} from '@mui/material';
import DataTable from "./Table";
import GoToAudit from "./Audit/GoAudit";
import { getCookie } from "./App"

export default class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialog_open: false,
    item: {
        name: null,
        description: null,
        quantity: null,
        unit_price: null,
        location: null,
        memo: null,
        purchase_date: null
      }
    };
  
    this.formRef = React.createRef();
    this.handleAddItemOpen = this.handleAddItemOpen.bind(this)
    this.handleAddItemClose = this.handleAddItemClose.bind(this)
    this.handleAddItemSubmit = this.handleAddItemSubmit.bind(this)
    this.handleItemChange = this.handleItemChange.bind(this)
  }



  handleAddItemOpen(){
    this.setState({dialog_open: true});
  }

  handleAddItemClose(){
    this.setState({dialog_open: false});
  }
  // <Button variant="primary" onClick={this.handleShow}>


  handleItemChange(e){
    console.log(e.target.id);
    console.log(e.target.value);
    let item_field = e.target.id
    console.log(item_field)
    this.setState({item: {...this.state.item, [e.target.id]: e.target.value} });
    console.log(this.state.item)
  }



  handleAddItemSubmit(e){
    if (!this.formRef.current.reportValidity()){
      return
    }
    const csrftoken = getCookie('csrftoken');
    console.log(this.state.item);
    console.log('csrf token is ' + csrftoken);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json",
                  'X-CSRFToken': csrftoken          
                },
      mode: 'same-origin',
      body: JSON.stringify(
        this.state.item
      ),
    };
    fetch("/api/item/", requestOptions)
      .then((response) => response.json())
  }


  renderAddItem(){
    return(
        <>
          <Button variant="contained" onClick={this.handleAddItemOpen}>
            Add Item
          </Button>
          <Dialog open={this.state.dialog_open} onClose={this.handleAddItemClose}>
          <DialogTitle>Add Item</DialogTitle>
          <DialogContent>
          <form ref={this.formRef}>
            <TextField
              required={true}
              autoFocus
              margin="dense"
              id="name"
              label="Item Name"
              fullWidth
              onChange={this.handleItemChange}
            />
            <TextField
              required={true}
              margin="dense"
              id="description"
              label="Description"
              fullWidth
              onChange={this.handleItemChange}
            />
            <TextField
              required={true}
              margin="dense"
              id="quantity"
              label="Quantity"
              type="number"
              inputProps={{
                min: 1,
                style: { textAlign: "center" },
              }}
              onChange={this.handleItemChange}
            />
            <TextField
              required={true}
              margin="dense"
              id="unit_price"
              label="Price"
              type="number"
              inputProps={{
                min: 0.01,
                style: { textAlign: "center" },
              }}
              onChange={this.handleItemChange}
            />
            <TextField
              required={true}
              margin="dense"
              id="location"
              label="Location"
              onChange={this.handleItemChange}
            />
            <TextField
              required={true}
              margin="dense"
              id="memo"
              label="Memo"
              fullWidth
              onChange={this.handleItemChange}
            />
            <TextField
              required={true}
              margin="dense"
              id="purchase_date"
              label="Purchase Date"
              type="date"
              fullWidth
              inputProps={{
                style: { textAlign: "right" },
              }}
              onChange={this.handleItemChange}
              />
            {/* <input type="submit" value="Submit" />       */}
          </form>
          </DialogContent>
          <DialogActions>
            {/* <Button onClick={() => this.formRef.current.reportValidity()}>Validate</Button> */}
            <Button onClick={this.handleAddItemSubmit}>Subscribe</Button>
            <Button onClick={this.handleAddItemClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }




  render() {
    return (
      // <Grid container spacing={16}>
      //   <Grid item xs={8} align="center">
      //     {<DataTable/>}
      //   </Grid>
      //   <Grid item xs={8} align="center">
      //       {this.renderAddItem()}
      //   </Grid>
      // </Grid>

      // <Stack>
      //     {<DataTable/>}
      //     <p>odisfjs</p>
      // </Stack>

      <>
      <Container maxWidth="lg">
          <Typography component="h1" variant="h2" align='center'>
            PostGod Inventory
          </Typography>
          {<DataTable/>}
      </Container>
      <Container maxWidth="sm">
        {this.renderAddItem()}
        {<GoToAudit/>}
      </Container>
      </>
    );
  }
}


