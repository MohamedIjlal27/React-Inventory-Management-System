import { Avatar, Typography } from "@mui/material";
import React from "react";

export default function Product({ productName }) {
  const firstLetter = productName.charAt(0).toUpperCase();

  return (
    <>
      <Avatar
        alt="product"
        variant="square"
        sx={{  borderRadius: 1, width: 30, height: 30, backgroundColor: '#1976d2'}}
      >
        {firstLetter}
      </Avatar>

      <Typography sx={{ mx: 3 }} variant="subtitle2">
        {productName}
      </Typography>
    </>
  );
}
