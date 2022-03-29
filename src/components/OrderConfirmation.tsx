import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import BgCheckOut from "../Assets/backgroundCheckOut.jpg";

function OrderConfirmation()  {
  
    return (
      <Box sx={{
        width: "100%",
        height: "100%",
        backgroundImage: `url(${BgCheckOut})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      >
        <Box sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Typography>Orderbekräftelse</Typography>
          <Typography>Ditt ordernummer är:</Typography>
          <strong>{Math.floor(Math.random() * 100000) + 600000}</strong>
        
          <Typography>
            Tack för ditt köp!
          </Typography>
      </Box>
      </Box>
    );
  }
export default OrderConfirmation