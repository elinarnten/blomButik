import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import BgCheckOut from "../Assets/backgroundCheckOut.jpg";

function CheckOutStepTwo() {
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

        <Button
          variant="outlined"
          id="basic-button"
          sx={{
            width: "100%",
            color: "black",
            border: "none",

            backgroundColor: "#F4EAC6",
          }}
        >
          Schenker utlämningsställe
        </Button>

        <Button
          variant="outlined"
          id="basic-button"
          //onClick={handleSwishClick}
          sx={{
            width: "100%",
            mt: 2,
            color: "black",
            border: "none",

            backgroundColor: "#F4EAC6",
          }}
        >
          Postens utlämningsställe
        </Button>

        <Button
          variant="outlined"
          id="basic-button"
          sx={{
            width: "100%",
            mt: 2,
            color: "black",
            border: "none",

            backgroundColor: "#F4EAC6",
          }}
        >
          BudBee Hemleverans
        </Button>

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

export default CheckOutStepTwo;
