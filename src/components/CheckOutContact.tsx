import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ConsumerContext } from "../ConsumerContext";
import BgCheckOut from "../Assets/backgroundCheckOut.jpg";

function CheckOutContact() {
  const { firstname, setFirstname, lastname, setLastname, phoneNumber, setPhoneNumber, email, setEmail, address, setAddress, code, setCode, city, setCity } = useContext(ConsumerContext);


  function SubmitButton() {
    if (firstname && lastname && phoneNumber && email && address && code && city) {
      return <Button
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
    } else {
      return <Button disabled
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
    }
  }


  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundImage: `url(${BgCheckOut})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
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
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ mb: 3, mt: 8 }} variant="h6">
          Vänligen fyll i dina uppgifter:
        </Typography>
        <div>
          <FormControl>
            <TextField
              required
              onChange={(event) => {
                setFirstname(event.target.value);
              }}
              id="filled"
              label="Förnamn"
              name="givenName"
              type="name"
              size="small"
              
              sx={{
                mr: 2,
                mb: 2,
                color: "black",
                backgroundColor: "#F4EAC6",
              }}
            />
          </FormControl>

          <FormControl>
            <TextField
              required
              onChange={(event) => {
                setLastname(event.target.value);
              }}
              id="outlined-required"
              label="Efternamn"
              size="small"
              name="familyName"
              sx={{ mb: 2, color: "black",
              backgroundColor: "#F4EAC6", }}
            />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <TextField
              required
              //value={email}
             onChange={(event) => {
                setEmail(event.target.value);
              }}
              id="outlined-required"
              name="email"
              type="email"
              label="E-post"
              size="small"
              sx={{ mr: 2, mb: 2, color: "black",
              backgroundColor: "#F4EAC6", }}
            />
          </FormControl>
          <FormControl>
            <TextField
              required
              onChange={(event) => {
                setPhoneNumber(event.target.value);
              }}
              //value={number}
              id="outlined-number"
              type="number"
              label="Telefonnummer"
              size="small"
              name="tel"
              sx={{ mb: 2, color: "black",
              backgroundColor: "#F4EAC6",}}
            />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <TextField
              required
              //value={address}
              name="streetAddress"
              onChange={(event) => {
                setAddress(event.target.value);
              }}
              id="outlined-required"
              label="Gatuadress"
              size="small"
              sx={{ mb: 2, color: "black",
              backgroundColor: "#F4EAC6", }}
            />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <TextField
              required
              onChange={(event) => {
                setCode(event.target.value);
              }}
              id="outlined-required"
              type="number"
              name="postalCode"
              label="Postnummer"
              size="small"
              sx={{ mr: 2, mb: 2, color: "black",
              backgroundColor: "#F4EAC6",}}
            />
          </FormControl>
          <FormControl>
            <TextField
              required
              onChange={(event) => {
                setCity(event.target.value);
              }}
              id="outlined-required"
              label="Ort"
              name="city"
              size="small"
              sx={{ color: "black",
              backgroundColor: "#F4EAC6",}}
            />
          </FormControl>
        </div>
        <Box>
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
            <SubmitButton/>
            {/* <Button
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
            </Button> */}
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default CheckOutContact;
