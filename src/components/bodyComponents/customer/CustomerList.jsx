import { Component } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import customers from "./Customers";

export default class CustomerList extends Component {
  render() {
    const columns = [
      {
        field: "id",
        headerName: "ID",
        width: 90,
        description: "ID of the product",
      },
      {
        field: "fullname",
        headerName: "Full Name",
        width: 200,
        description: "Customer full name",
        renderCell: (params) => {
          const firstNameInitial = params.row.firstName.charAt(0).toUpperCase();
          const lastNameInitial = params.row.lastName.charAt(0).toUpperCase();
          const initials = `${firstNameInitial}${lastNameInitial}`;
          return (
            <>
              <Avatar
                alt="name"
                variant="square"
                sx={{ borderRadius: 1, width: 30, height: 30, backgroundColor: '#1976d2' }}
              >
                {initials}
              </Avatar>
              <Typography variant="subtitle2" sx={{ mx: 3, color: "#333",  }}>
                {`${params.row.firstName || ""} ${params.row.lastName || ""}`}
              </Typography>
            </>
          );
        },
      },
      {
        field: "orderNumber",
        headerName: "Number Of Order",
        width: 200,
        description: "Number of orders that the customer made",
        valueGetter: (params) => params.row.orders.length,
      },
      {
        field: "total",
        headerName: "Total Amount",
        width: 300,
        description: "Total amount of the order",
        valueGetter: (params) => {
          const total = 300;
          return total;
        },
      },
      {
        field: "orderHistory",
        headerName: "Order Details",
        width: 300,
        description: "The details of the order",
        valueGetter: (params) => {
          const history = "03/01/2027";
          return history;
        },
      },
      {
        field: "mobile",
        headerName: "Mobile",
        width: 300,
        description: "Total amount of the order",
      },
    ];
    const rows = customers;
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
            Customer List
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
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[15, 20, 30]}
          rowSelection={false}
        />
        <Box></Box>
      </Box>
    );
  }
}
