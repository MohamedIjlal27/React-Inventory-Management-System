import { Avatar, Box, Button, Modal, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { Component } from "react";
import OrderModal from "./OrderModal";
import orders from "./listOrders";

export default class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {},
      open: false,
    };
  }

  handleOrderDetail = (order) => {
    console.log("the order is : ", order);
    this.setState({ order: order, open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const columns = [
      {
        field: "id",
        headerName: "ID",
        width: 90,
        description: "id of the product",
      },
      {
        field: "fullname",
        headerName: "Full Name",
        width: 400,
        description: "customer full name",
        renderCell: (params) => {
          const firstNameInitial = params.row.customer.firstName.charAt(0);
          const lastNameInitial = params.row.customer.lastName.charAt(0);
          const initials = `${firstNameInitial}${lastNameInitial}`;
          return (
            <>
              <Avatar alt="name" variant="square" sx={{ width: 30, height: 30, backgroundColor: '#1976d2', borderRadius: 1 }}>
                {initials.toUpperCase()}
              </Avatar>
              <Typography variant="subtitle2" sx={{ mx: 3 }}>
                {`${params.row.customer.firstName || ""} ${params.row.customer.lastName || ""}`}
              </Typography>
            </>
          );
        },
      },
      {
        field: "mobile",
        headerName: "Mobile",
        width: 400,
        description: "customer phone number ",
        valueGetter: (params) => params.row.customer.mobile,
      },
      {
        field: "total",
        headerName: "Total Amount",
        width: 300,
        description: "total amount of the order",
        valueGetter: (params) => {
          const total = 300;
          return total;
        },
      },
      {
        field: "details",
        headerName: "Order Details",
        width: 300,
        description: "the details of the order",

        renderCell: (params) => {
          const order = params.row;
          return (
            <Button
              variant="contained"
              sx={{ bgcolor: "#504099" }}
              onClick={() => this.handlOrderDetail(order)}
            >
              Order Details
            </Button>
          );
        },
      },
    ];

    return (
      <Box
        sx={{
          margin: 3,
          bgcolor: "#f9fafc", 
          borderRadius: 2,
          padding: 3,
          height: "100%",
          display: 'flex',
          flexDirection: 'column',
          '@media (max-width:600px)': {
            padding: 2,
          },
        }}
      >
        <Typography variant="h5" sx={{ m: 3, fontWeight: "bold" }}>
            Order List
        </Typography>
        <DataGrid
          sx={{
            boxShadow: 2,
            border: 1,
            borderColor: 'divider',
            '&.MuiDataGrid-row:hover': {
              backgroundColor: 'action.hover', 
            },
            '&.MuiDataGrid-cell:hover': {
              color: 'primary.main',
              backgroundColor: 'grey.50', 
            },
            '&.MuiDataGrid-columnHeader': {
              backgroundColor: 'secondary.main',
              color: 'white',
              '&:hover': {
                backgroundColor: 'secondary.dark', 
              },
            },
            '&.MuiDataGrid-groupingRow': {
              backgroundColor: 'action.selected',
              cursor: 'pointer',
              color: 'blue',
              '&:active': {
                backgroundColor: 'action.disabled', 
              },
            },
            '@media (min-width:601px)': {
              boxShadow: 3, 
            },
          }}
          rows={orders}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[15, 20, 30]}
          rowSelection={false}
        />
        <Modal open={this.state.open} onClose={this.handleClose}>
          <Box>
            <OrderModal order={this.state.order} />
          </Box>
        </Modal>
      </Box>
    );
  }
}