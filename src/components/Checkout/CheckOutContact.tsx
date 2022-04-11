import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import e from "express";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { ConsumerContext } from "../../contexts/ConsumerContext";

function CheckOutContact() {
  const navigate = useNavigate();
  const { itemInCart} = useContext(CartContext);

  window.addEventListener('click', () => { 
    if (itemInCart.length <= 0){
      window.location.assign("/")
  }})


  const {
    firstname,
    setFirstname,
    lastname,
    setLastname,
    phoneNumber,
    setPhoneNumber,
    email,
    setEmail,
    address,
    setAddress,
    code,
    setCode,
    city,
    setCity,
  } = useContext(ConsumerContext);

  const [firstnameError, setFirstnameError] = useState("");
  const [firstnameTouched, setFirstnameTouched] = useState(true);

  const [lastnameError, setLastnameError] = useState("");
  const [lastnameTouched, setLastnameTouched] = useState(true);
  
  const [emailError, setEmailError] = useState("");
  const [emailTouched, setEmailTouched] = useState(true);

  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [phoneNumberTouched, setPhoneNumberTouched] = useState(true);

  const [addressError, setAddressError] = useState("");
  const [addressTouched, setAddressTouched] = useState(true);

  const [codeError, setCodeError] = useState("");
  const [codeTouched, setCodeTouched] = useState(true);

  const [cityError, setCityError] = useState("");
  const [cityTouched, setCityTouched] = useState(true);

  function validateFirstname() {
    if (!firstname) {
      setFirstnameError('Vänligen fyll i ditt förnamn')
      return true;
    }
    setFirstnameError('')
    return false;
  }

  function validateLastname() {
    if (!lastname) {
      setLastnameError('Vänligen fyll i ditt efternamn')
      return true;
    }
    setLastnameError('')
    return false;
  }
 
  function validateEmail() {
    
    if (!email) {
      setEmailError('Vänligen fyll i din e-post')
      return true;
    }
    setEmailError('')
    return false;
  }

  function validatePhoneNumber() {
    if (!phoneNumber) {
      setPhoneNumberError('Vänligen fyll i ditt telefonnummer')
      return true;
    }
    setPhoneNumberError('')
    return false;
  }

  function validateAddress() {
    if (!address) {
      setAddressError('Vänligen fyll i din adress')
      return true;
    }
    setAddressError('')
    return false;
  }

  function validateCode() {
    if (!code) {
      setCodeError('Vänligen fyll i ditt postnummer')
      return true;
    }
    setCodeError('')
    return false;
  }

  function validateCity() {
    if (!city) {
      setCityError('Vänligen fyll i din stad')
      return true;
    }
    setCityError('')
    return false;
  }

  function handleSubmitForm() {
    let formHasErrors = false;
    formHasErrors = validateLastname() || formHasErrors;
    formHasErrors = validateFirstname() || formHasErrors;
    formHasErrors = validateEmail() || formHasErrors;
    formHasErrors = validatePhoneNumber() || formHasErrors;
    formHasErrors = validateAddress() || formHasErrors;
    formHasErrors = validateCode()|| formHasErrors;
    formHasErrors = validateCity() || formHasErrors;
    
    setFirstnameTouched(true)
    setLastnameTouched(true)
    setEmailTouched(true)
    setAddressTouched(true)
    setCodeTouched(true)
    setCityTouched(true)

    if (!formHasErrors){
      navigate('/leverans');
    }
  }
  

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
          
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ mb: 3 }} variant="h6">
          Vänligen fyll i dina uppgifter:
        </Typography>
        <div>
          <FormControl>
            <TextField
            onFocus={() => setFirstnameTouched(true)}
              required
              onChange={(event) => {
                validateFirstname()
                setFirstname(event.target.value)
              }}
              id="filled"
              label="Förnamn"
              name="given-name"
              autoComplete="given-name"
              type="name"
              size="small"
              value={firstname}
              helperText={firstnameTouched && firstnameError}
              sx={{
                mr: 2,
                mb: 2,
                color: "black",
              }}
            />
          </FormControl>
          <FormControl>
            <TextField
            onFocus={() => setLastnameTouched(true)}
              required
              onChange={(event) => {
                validateLastname()
                setLastname(event.target.value);
              }}
              id="outlined-required"
              label="Efternamn"
              size="small"
              name="family-name"
              autoComplete="family-name"
              value={lastname}
              helperText={lastnameTouched && lastnameError}
              sx={{ mb: 2, color: "black" }}
            />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <TextField
              onFocus={() => setEmailTouched(true)}
              required
              onChange={(event) => {
                validateEmail()
                setEmail(event.target.value);
              }} 
              id="outlined-required"
              name="email"
              type="email"
              label="E-post"
              size="small"
              value={email}
              helperText={emailTouched && emailError}
            
              sx={{ mr: 2, mb: 2, color: "black" }}
            />
          </FormControl>
          <FormControl>
            <TextField
            onFocus={() => setPhoneNumberTouched(true)}
              required
              onChange={(event) => {
                validatePhoneNumber()
                setPhoneNumber(event.target.value = Math.max(0, parseInt(event.target.value) ).toString().slice(0,12));
              }}
              id="outlined-number"
              type="number"
              label="Telefonnummer"
              size="small"
              name="tel"
              autoComplete="tel"
              value={phoneNumber}
              helperText={phoneNumberTouched && phoneNumberError}
              sx={{ mb: 2, color: "black" }}
            />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <TextField
            onFocus={() => setAddressTouched(true)}
              required
              name="street-address"
              autoComplete="street-address"
              value={address}
              helperText={addressTouched && addressError}
              onChange={(event) => {
                validateAddress()
                setAddress(event.target.value);
              }}
              id="outlined-required"
              label="Gatuadress"
              size="small"
              sx={{ mb: 2, color: "black" }}
            />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <TextField
            onFocus={() => setCodeTouched(true)}
              required
              onChange={(event) => {
                validateCode()
                setCode(event.target.value = Math.max(0, parseInt(event.target.value) ).toString().slice(0,5));
                
              }}
              id="outlined-required"
              type="number"
              name="postal-code"
              autoComplete="postal-code"
              label="Postnummer"
              size="small"
              value={code}
              helperText={codeTouched && codeError}
              sx={{ mr: 2, mb: 2, color: "black" }}
            />
          </FormControl>
          <FormControl>
            <TextField
            onFocus={() => setCityTouched(true)}
              required
              onChange={(event) => {
                validateCity()
                setCity(event.target.value);
              }}
              id="outlined-required"
              label="Ort"
              name="address-level2"
              size="small"
              value={city}
              helperText={cityTouched && cityError}
              sx={{ color: "black" }}
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
        <Button
          size="small"
          variant="contained"
          onClick={handleSubmitForm}
          sx={{
            backgroundColor: "pink",
            boxShadow: "none",
            color: "black",
            mt: 3,
          }}
        >
          Gå vidare
        </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default CheckOutContact;
