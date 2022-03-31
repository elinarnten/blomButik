import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { CartContext } from "../../contexts/CartContext";

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
