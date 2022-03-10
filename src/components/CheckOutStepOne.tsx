import {
  Box,
  Button,
  FormControl,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { useState } from "react";

function CheckOutStepOne() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [code, setCode] = useState("");
  const [city, setCity] = useState("");

  const handleFirstnameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstname(event.target.value);
  };

  const handleLastnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastname(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhoneNumber(event.target.value);
  };

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };

  const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  console.log(firstname, lastname, email, phoneNumber, address, code, city);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
        backgroundColor: "lightGreen",
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
          Vänligen fyll i dina uppgifter:
        </Typography>
        <div>
          <FormControl>
            <TextField
              required
              value={firstname}
              onChange={handleFirstnameChange}
              id="outlined-required"
              label="Förnamn"
              size="small"
              sx={{ mr: 2, mb: 2 }}
            />
          </FormControl>

          <FormControl>
            <TextField
              required
              value={lastname}
              onChange={handleLastnameChange}
              id="outlined-required"
              label="Efternamn"
              size="small"
              sx={{ mb: 2 }}
            />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <TextField
              required
              value={email}
              onChange={handleEmailChange}
              id="outlined-required"
              label="E-post"
              size="small"
              sx={{ mr: 2, mb: 2 }}
            />
          </FormControl>
          <FormControl>
            <TextField
              required
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              id="outlined-number"
              type="number"
              label="Telefonnummer"
              size="small"
              sx={{ mb: 2 }}
            />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <TextField
              required
              value={address}
              onChange={handleAddressChange}
              id="outlined-required"
              label="Gatuadress"
              size="small"
              sx={{ mb: 2 }}
            />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <TextField
              required
              value={code}
              onChange={handleCodeChange}
              id="outlined-required"
              type="number"
              label="Postnummer"
              size="small"
              sx={{ mr: 2, mb: 2 }}
            />
          </FormControl>
          <FormControl>
            <TextField
              required
              value={city}
              onChange={handleCityChange}
              id="outlined-required"
              label="Ort"
              size="small"
            />
          </FormControl>
        </div>
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
      </Box>
      <Box
        sx={{
          ml: 2,
          mr: 3,
          mt: 8,
          backgroundColor: "pink",
          width: "40%",
          height: 400,
        }}
      >
        Här visas innehållet i varukorgen, tänker jag.
      </Box>
    </Box>
  );
}

export default CheckOutStepOne;
