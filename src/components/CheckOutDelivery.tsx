import {
  Box,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import BgCheckOut from "../Assets/backgroundCheckOut.jpg";
import { Context } from "../Context";

function CheckOutDelivery() {
  const { selectedDelivery, setSelectedDelivery } = useContext(Context);

  const handleSelectedDelivery = (
    event: React.MouseEvent<HTMLElement>,
    newSelected: string
  ) => {
    setSelectedDelivery(newSelected);
  };

  console.log(selectedDelivery);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${BgCheckOut})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
      }}
    >
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ ml: 3, width: "60%" }}
      >
        <Typography sx={{ mb: 3, mt: 8 }} variant="h6">
          Hur vill du få dina varor levererade?
        </Typography>

        <ToggleButtonGroup
          //value={selectedDelivery}
          exclusive
          onChange={handleSelectedDelivery}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <ToggleButton
            value="40"
            sx={{
              width: "100%",
              color: "black",
              border: "none",
              fontSize: 12,
              fontWeight: "bold",
              backgroundColor: "#F4EAC6",
            }}
          >
            Schenker utlämningsställe.
            <Typography
              sx={{ fontSize: 10, ml: 1, textTransform: "capitalize" }}
            >
              1-2 arbetsdagar. (40,00 SEK)
            </Typography>
          </ToggleButton>

          <ToggleButton
            value="19"
            sx={{
              width: "100%",
              mt: 2,
              color: "black",
              border: "none",
              fontSize: 12,
              fontWeight: "bold",
              backgroundColor: "#F4EAC6",
            }}
          >
            Postens utlämningsställe.
            <Typography
              sx={{ fontSize: 10, ml: 1, textTransform: "capitalize" }}
            >
              2-5 arbetsdagar. (19,00 SEK)
            </Typography>
          </ToggleButton>

          <ToggleButton
            value="60"
            sx={{
              width: "100%",
              mt: 2,
              color: "black",
              border: "none",
              fontSize: 12,
              fontWeight: "bold",
              backgroundColor: "#F4EAC6",
            }}
          >
            BudBee Hemleverans.
            <Typography
              sx={{ fontSize: 10, ml: 1, textTransform: "capitalize" }}
            >
              Idag 17-21. (60,00 SEK)
            </Typography>
          </ToggleButton>
        </ToggleButtonGroup>

        <div>
          <Link to={"/kunduppgifter"}>
            <Button
              size="small"
              variant="outlined"
              sx={{
                borderColor: "#F4EAC6",
                boxShadow: "none",
                color: "black",
                mr: 2,
                mt: 3,
              }}
            >
              Tillbaka
            </Button>
          </Link>
          <Link to={"/betalning"}>
            <Button
              size="small"
              variant="contained"
              sx={{
                backgroundColor: "#F4EAC6",
                boxShadow: "none",
                color: "black",

                mt: 3,
              }}
            >
              Gå vidare
            </Button>
          </Link>
        </div>
      </Box>
      <Box
        sx={{
          ml: 2,
          mr: 3,
          mt: 8,
          backgroundColor: "rgba(244, 234, 198, 0.4)",
          borderRadius: 2,
          padding: 2,
          width: "40%",
          height: 400,
        }}
      >
        Här visas innehållet i varukorgen, tänker jag.
      </Box>
    </Box>
  );
}

export default CheckOutDelivery;
