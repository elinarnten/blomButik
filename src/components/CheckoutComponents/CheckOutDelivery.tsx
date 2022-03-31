import {
  bottomNavigationActionClasses,
  Box,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { style } from "@mui/system";
import "./CheckOutDelivery.css"
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ConsumerContext } from "../../contexts/ConsumerContext";
import { deliveryAlternatives, DeliveryOption } from "../../mockedDelivery";

function CheckOutDelivery() {
  const { deliveryOption, setDeliveryOption, deliveryDate, setDeliveryDate } =
    useContext(ConsumerContext);
   
  
   

  const handleOnChange = (
    event: React.MouseEvent<HTMLElement>,
    newSelected: DeliveryOption
  ) => {
    
    setDeliveryOption(newSelected);
    calcDeliveryDate(newSelected.deliveryTime);
  };

  const calcDeliveryDate = (newDeliveryVal: number) => {
    const date = new Date();
    const result = new Date(date);
    result.setDate(result.getDate() + newDeliveryVal);
    setDeliveryDate(result.toLocaleDateString());
  };

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
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ mb: 3 }} variant="h6">
          Hur vill du få dina varor levererade?
        </Typography>
        <ToggleButtonGroup
        value={deliveryOption}
          exclusive
          onChange={handleOnChange}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          {deliveryAlternatives.map((item, idx) => (
            <ToggleButton
            className={'buttonStyle'}
              key={item.label}
              value={deliveryAlternatives[idx]}
              //color="primary"
              sx={{
                width: "100%",
                color: "black",
                border: "solid black 2px",
                borderRadius: 1,
                //backgroundColor: "pink",
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
        backgroundColor: "pink",
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
    </Box>
  );
}

export default CheckOutDelivery;
