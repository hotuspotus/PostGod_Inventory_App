import React, { Component } from "react";
import { DataGrid } from '@mui/x-data-grid';


export default class DataTable extends Component {
    constructor(props) {
      super(props);
      this.state = {
          rows: [],
      };
 
    this.columns = [
            { field: 'id', headerName: 'ID', width: 70 },
            { field: 'name', headerName: 'Item', width: 130 },
            { field: 'description', headerName: 'Description', width: 130 },
            { field: 'location', headerName: 'Location', width: 90 },
            { field: 'quantity', headerName: 'Quantity', type: 'number', width: 70},
            { field: 'unit_price', headerName: 'Price', width: 70},
            { field: 'memo', headerName: 'Memo', width: 130 },
            { field: 'purchase_date', headerName: 'Date', type: 'date', width: 160},
        ];
    }


    
    componentDidMount() {
      this.getInventoryData();
    }

    getInventoryData(){
        return fetch("/api/item")
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
            // <div style={{ display: 'flex', height: '100%'}}>
            //     <div style={{ flexGrow: 1}}>
            //     <DataGrid
            //     rows={this.state.rows}
            //     columns={this.columns}
            //     pageSize={100}
            //     rowsPerPageOptions={[100]}
            //     checkboxSelection
            //     />
            //     </div>
            // </div>
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
  