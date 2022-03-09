import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

function CheckOut() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        //backgroundImage: `url(${startpageBackground})`,

        backgroundSize: "cover",
        backgroundColor: "lightGreen",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
      }}
    >
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Obligatorisk"
            defaultValue="Förnamn"
          />
          <TextField
            required
            id="outlined-required"
            label="Obligatorisk"
            defaultValue="Efternamn"
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Obligatorisk"
            defaultValue="E-post"
          />
          <TextField
            required
            id="outlined-required"
            label="Obligatorisk"
            defaultValue="Telefon"
          />
        </div>
      </Box>
    </Box>
  );
}

export default CheckOut;
