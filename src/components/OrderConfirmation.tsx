import React, { useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import BgCheckOut from "../Assets/backgroundCheckOut.jpg";
import { CartContext } from "../contexts/CartContext";

function OrderConfirmation() {
  const { getOrderNumber } = useContext(CartContext);

  let orderNumber = getOrderNumber();

  window.addEventListener("popstate", (e) => {
    window.location.assign("/");
  });

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `url(${BgCheckOut})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: "100%",
          //height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>Orderbekräftelse</Typography>
        <Typography>Ditt ordernummer är: {orderNumber}</Typography>
        <Typography>Tack för ditt köp!</Typography>
      </Box>
    </Box>
  );
}
export default OrderConfirmation;
