import React, { Component } from "react";
import CustomerList from "./CustomerList";
import { Box, Typography, Paper } from "@mui/material";

const Customer = () => {
  return (
  
      <Box
        sx={{bgcolor: 'linear-gradient(135deg, #add8e6, #87ceeb)',
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
        }}
      >
      
        <CustomerList />
      </Box>
   
  );
};

export default Customer;