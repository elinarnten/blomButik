import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import BgCheckOut from "../Assets/backgroundCheckOut.jpg";
import CheckOutBagOverview from "./CheckOutBagOverview";

function CheckOutContact() {
  const { setFirstname, setLastname, setPhoneNumber } = useContext(Context);

  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [code, setCode] = useState("");
  const [city, setCity] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
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

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${BgCheckOut})`,
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
          <FormControl>
        <div>
            <TextField
              required
              onChange={(event) => {
                setFirstname(event.target.value);
              }}
              id="outlined-required"
              label="Förnamn"
              name="name"
              size="small"
              sx={{
                mr: 2,
                mb: 2,
                bgcolor: "rgba(244, 234, 198, 0.4)",
              }}
            />
            <TextField
              required
              onChange={(event) => {
                setLastname(event.target.value);
              }}
              id="outlined-required"
              label="Efternamn"
              name="name"
              size="small"
              sx={{ mb: 2, bgcolor: "rgba(244, 234, 198, 0.4)" }}
            />
        </div>
        <div>
            <TextField
              required
              onChange={handleEmailChange}
              id="outlined-required"
              name="email"
              label="E-post"
              size="small"
              sx={{ mr: 2, mb: 2, bgcolor: "rgba(244, 234, 198, 0.4)" }}
            />
            <TextField
              required
              onChange={(event) => {
                setPhoneNumber(event.target.value);
              }}
              id="outlined-number"
              type="number"
              name="number"
              label="Telefonnummer"
              size="small"
              inputProps={{maxLength: 13}}
              sx={{ mb: 2, bgcolor: "rgba(244, 234, 198, 0.4)" }}
            />
        </div>
        <div>
            <TextField
              required
              value={address}
              onChange={handleAddressChange}
              id="outlined-required"
              label="Gatuadress"
              name="address"
              size="small"
              sx={{ mb: 2, bgcolor: "rgba(244, 234, 198, 0.4)" }}
            />
        </div>
        <div>
            <TextField
              required
              onChange={handleCodeChange}
              id="outlined-required"
              type="number"
              name="zipcode"
              label="Postnummer"
              size="small"
              sx={{ mr: 2, mb: 2, bgcolor: "rgba(244, 234, 198, 0.4)" }}
            />
            <TextField
              required
              onChange={handleCityChange}
              id="outlined-required"
              label="Ort"
              name="city"
              size="small"
              sx={{ bgcolor: "rgba(244, 234, 198, 0.4)" }}
            />
        </div>
          </FormControl>
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
        <Link to={"/leverans"}>
          <Button
            size="small"
            variant="contained"
            sx={{
              backgroundColor: "#F4EAC6",
              boxShadow: "none",
              color: "black",

              mt: 3,
            }}
            type="submit"
          >
            Gå vidare
          </Button>
        </Link>
      </Box>
      <CheckOutBagOverview />
    </Box>
  );
}

export default CheckOutContact;
