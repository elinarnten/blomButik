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
import CheckOutBagOverview from "./CheckOutBagOverview";
import { deliveryAlternatives, DeliveryOption } from "../mockedDelivery";

function CheckOutDelivery() {
  const { deliveryOption, setDeliveryOption } = useContext(Context);

  const handleDeliveryCost = (
    event: React.MouseEvent<HTMLElement>,
    newSelected: string
  ) => {
    setDeliveryOption(newSelected);
  };

  const date = new Date();
  const deliveryDate = new Date(date);

  deliveryDate.setDate(deliveryDate.getDate() + deliveryOption.deliveryTime);

  console.log(deliveryDate.toDateString());

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
          //value={deliveryCost}
          exclusive
          onChange={handleDeliveryCost}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          {deliveryAlternatives.map((item, idx) => (
            <ToggleButton
              key={item.label}
              value={deliveryAlternatives[idx]}
              sx={{
                width: "100%",
                color: "black",
                border: "none",
                backgroundColor: "#F4EAC6",
                mb: 1,
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: 12,
                  ml: 1,
                  textTransform: "capitalize",
                }}
              >
                {item.company}
              </Typography>
              <Typography
                sx={{ fontSize: 10, ml: 1, textTransform: "capitalize" }}
              >
                {item.label}
              </Typography>
            </ToggleButton>
          ))}
          {/*  <ToggleButton
            value={deliveryAlternatives[0]}
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
          </ToggleButton> */}
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
      <CheckOutBagOverview />
    </Box>
  );
}

export default CheckOutDelivery;
