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
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import BgCheckOut from "../Assets/backgroundCheckOut.jpg";

function CheckOutStepOne() {
  /* const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm")); */

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
        <div>
          <FormControl>
            <TextField
              required
              onChange={(event) => {
                setFirstname(event.target.value);
              }}
              id="outlined-required"
              label="Förnamn"
              size="small"
              sx={{
                mr: 2,
                mb: 2,
                bgcolor: "rgba(244, 234, 198, 0.4)",
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
              sx={{ mb: 2, bgcolor: "rgba(244, 234, 198, 0.4)" }}
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
              sx={{ mr: 2, mb: 2, bgcolor: "rgba(244, 234, 198, 0.4)" }}
            />
          </FormControl>
          <FormControl>
            <TextField
              required
              onChange={(event) => {
                setPhoneNumber(event.target.value);
              }}
              id="outlined-number"
              type="number"
              label="Telefonnummer"
              size="small"
              sx={{ mb: 2, bgcolor: "rgba(244, 234, 198, 0.4)" }}
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
              sx={{ mb: 2, bgcolor: "rgba(244, 234, 198, 0.4)" }}
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
              sx={{ mr: 2, mb: 2, bgcolor: "rgba(244, 234, 198, 0.4)" }}
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
              sx={{ bgcolor: "rgba(244, 234, 198, 0.4)" }}
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

export default CheckOutStepOne;
