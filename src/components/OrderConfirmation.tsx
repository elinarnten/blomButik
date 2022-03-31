import React, { useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import BgCheckOut from "../Assets/backgroundCheckOut.jpg";
import { CartContext } from "../CartContext";



function OrderConfirmation()  {
  
  const { getOrderNumber } =
    useContext(CartContext);

    let orderNumber = getOrderNumber()

    window.addEventListener("popstate", e => {
      window.location.assign('/')
    });

  
    return (
      <Box sx={{
        width: "100%",
        minHeight: "100vh",
        //backgroundImage: `url(${BgCheckOut})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex"
      }}
      >
        <Box sx={{
          width: "100%",
          //height: "100%",
          display: "flex",
          flexDirection: "column",
          //justifyContent: "center",
          alignItems: "center",
        }}>
          <Typography variant="h4" sx={{mt: 10}}>Tack för ditt köp!</Typography>
          <Typography sx={{m:2}}>Ditt ordernummer är: <strong> {orderNumber} </strong></Typography>
          <Typography>Frågor? Tveka inte att höra av dig.</Typography>
          <Typography sx={{m:2, textAlign: "center"}}>
             Vi på Blombutiken hoppas du blir nöjd med <br></br>dina varor och att vi ses snart igen. 
          </Typography>
      </Box>
      </Box>
    );
  }
export default OrderConfirmation