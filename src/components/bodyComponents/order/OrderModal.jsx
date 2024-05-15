import { Delete, DeleteOutline } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export default function OrderModal({ order }) {
  const handleDeleteProductFromOrder = (orderId, productId) => {
    console.log("delete the product : ", productId, " from the order ", orderId);
  };

  const tableRows = order.products.map((orderProduct, index) => {
    return (
      <TableRow key={index} sx={{ "&:nth-child(even)": { backgroundColor: "#f9f9f9" } }}>
        <TableCell>{orderProduct.product.name}</TableCell>
        <TableCell>{orderProduct.quantity}</TableCell>
        <TableCell>{orderProduct.product.stock}</TableCell>
        <TableCell>
          <IconButton
            onClick={() => handleDeleteProductFromOrder(order.id, orderProduct.product.id)}
          >
            <DeleteOutline color="error" />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  });

  return (
    <Box
      sx={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: "80%", 
        bgcolor: "white",
        borderRadius: 2,
        boxShadow: 24,
        p: 4,
        overflowY: "auto", 
      }}
    >
      <Box sx={{ color: "black", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography variant="h6" sx={{ m: 3 }}>
          Order Details
        </Typography>
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            m: 3,
          }}
        >
          <Typography variant="subtitle1">Customer Name</Typography>
          <Typography variant="subtitle1" color={"grey"}>
            Mohamed Ijlal
          </Typography>
        </Paper>
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            m: 3,
          }}
        >
          <Typography variant="subtitle1">Address</Typography>
          <Typography variant="subtitle1" color={"grey"}>
            Colombo
          </Typography>
        </Paper>
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            m: 3,
          }}
        >
          <Typography variant="subtitle1">Mobile</Typography>
          <Typography variant="subtitle1" color={"grey"}>
            0727920628
          </Typography>
        </Paper>
        <Box>
          <TableContainer sx={{ marginBottom: 3 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Stock Availability</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableRows}
              </TableBody>
            </Table>
          </TableContainer>
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              m: 0,
            }}
          >
            <Button
              variant="outlined"
              color="error"
              sx={{ m: 3, px: 12 }}
              onClick={() => alert('Reject action')}
            >
              Reject
            </Button>
            <Button
              variant="contained"
              color="success"
              sx={{ bgcolor: "#504099", m: 3, px: 12 }}
              onClick={() => alert('Approve action')}
            >
              Approve
            </Button>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
