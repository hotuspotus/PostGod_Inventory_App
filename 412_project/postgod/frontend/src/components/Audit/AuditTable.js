import React, { Component } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { 
    Button, Link
  } from '@mui/material'

export default class AuditTable extends Component {
    constructor(props) {
      super(props);
      this.state = {
          rows: [],
      };
 
    this.columns = [
        {field: 'id', headerName: 'ID', width: 70},
        {field: "Route",
renderCell: (cellValues) => {
  return <Link href={`#${cellValues.row.url}`}>View</Link>;
}},
            { field: 'name', headerName: 'Department', width: 70},
            { field: 'description', headerName: 'Items', width: 70},
            { field: 'renders', headerName: 'Status', width: 130 },
            { field: 'parses', headerName: 'Date Completed', width: 160}
        ];
    }

    componentDidMount() {
        this.getAuditData();
      }
  
      getAuditData(){
          return fetch("/api/audit")
              .then((response) => {
                  return response.json();
              })
              .then((data) => {
                  this.setState({
                      rows: data
                  });
              });
      }
  
  
      render() {
          return (
              <div style={{ width: '100%', height: '100%'}}>
                  <DataGrid
                  rows={this.state.rows}
                  columns={this.columns}
                  pageSize={100}
                  rowsPerPageOptions={[100]}
                  checkboxSelection
                  autoHeight={true}
                  autoPageSize={true}
                  />
              </div>
          );
      }
  }