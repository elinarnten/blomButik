import { Box, Button, FormControl, TextField, Typography } from "@mui/material";

import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { ConsumerContext } from "../../contexts/ConsumerContext";

function CheckOutContact() {

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

  //const [text, setText] = React.useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
/* 
  function handleError (){
    if (firstname === ""){
      setErrorMessage(true)
    }
  } */

  //console.log(errorMessage)
 
 /*  function handleError () {
    if (firstname){
      setErrorMessage(false)
    
      console.log(errorMessage, firstname)
    }
    }  */
     /*  return (
       else {
        setErrorMessage('')
      } */
   
/* function handleError()  {
  if (firstname /* && lastname &&
    phoneNumber &&
    email &&
    address &&
    code &&
    city */ /* ) { */
   /* setErrorMessage(false)
  } else {
    setErrorMessage(true)
//  return (errorMessage(''))
}
  console.log('button clicked', errorMessage)
} */
 
 function handleError () {
  //const navigate = useNavigate();
  const allInputs = firstname && lastname && email && phoneNumber && address && code && city;
  if (allInputs === ""){
  //if (firstname === "" && lastname === "" && email === "" && phoneNumber === "" && address === "" && code === "" && city === "") {
setErrorMessage('Fyll i fältet')
  }  
  if (allInputs !== ("")){
    setErrorMessage("")
  } 
 }  
 console.log(errorMessage)



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
              required
              onChange={(event) => {
                setFirstname(event.target.value)
              }}
              id="filled"
              label="Förnamn"
              name="given-name"
              autoComplete="given-name"
              type="name"
              size="small"
              value={firstname}
              //error={errorMessage}
              //error={errorMessage? true : false}
              //error={firstname.length >= 0}
              //helperText={errorMessage}
              //error={errorMessage? false : true}
              //error={errorMessage? true : false}
              /*helperText={
                firstname === "" errorMessage? true : "Vänligen fyll i ditt förnamn"
              } */
              //error={firstname === ""}
              helperText={firstname === ""? errorMessage : ""}
              
              //helperText={firstname === ""? 'Förnamn' : ""}
              
              sx={{
                mr: 2,
                mb: 2,
                color: "black",
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
              name="family-name"
              autoComplete="family-name"
              value={lastname}
              /* error={lastname === ""}
              helperText={
                lastname === "" ? "Vänligen fyll i ditt efternamn" : " "
              } */
              //error={errorMessage === true }
              helperText={lastname === ""? errorMessage : ""}
              sx={{ mb: 2, color: "black" }}
            />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <TextField
              required
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              id="outlined-required"
              name="email"
              type="email"
              label="E-post"
              size="small"
              value={email}
             /*  error={email === ""}
              helperText={email === "" ? "Vänligen fyll i din e-post" : " "} */
             // error={errorMessage === true }
             helperText={email === ""? errorMessage : ""}
            
              sx={{ mr: 2, mb: 2, color: "black" }}
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
              name="tel"
              autoComplete="tel"
              value={phoneNumber}
              /* error={phoneNumber === ""}
              helperText={
                phoneNumber === "" ? "Vänligen fyll i ditt telefonnummer" : " "
              } */
              //error={errorMessage === true }
              helperText={phoneNumber === ""? errorMessage : ""}
              //helperText={phoneNumber === ""? 'Telefonnummer' : ""}
              sx={{ mb: 2, color: "black" }}
            />
          </FormControl>
        </div>
        <div>
          <FormControl>
            <TextField
              required
              name="street-address"
              autoComplete="street-address"
              value={address}
              /* error={address === ""}
              helperText={address === "" ? "Vänligen fyll i din adress" : " "} */
              //error={errorMessage === true }
              helperText={address === ""? errorMessage : ""}
              //helperText={address === ""? 'Adress' : ""}
              onChange={(event) => {
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
              required
              onChange={(event) => {
                setCode(event.target.value);
              }}
              id="outlined-required"
              type="number"
              name="postal-code"
              autoComplete="postal-code"
              label="Postnummer"
              size="small"
              value={code}
              /* error={code === ""}
              helperText={code === "" ? "Vänligen fyll i ditt postnummer" : " "} */
              //error={errorMessage === true }
              helperText={code === ""? errorMessage : ""}
              //helperText={code === ""? 'Postnummer' : ""}
              sx={{ mr: 2, mb: 2, color: "black" }}
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
              name="address-level2"
              size="small"
              value={city}
              /* error={city === ""}
              helperText={city === "" ? "Vänligen fyll i din stad" : " "} */
              //error={errorMessage === true }
              helperText={city === ""? errorMessage : ""}
              //helperText={city === ""? 'Ort' : ""}
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
          {/* <Link to={"/leverans"}> */}
          {errorMessage === ("")?
          <>
           
        <Button
          size="small"
          variant="contained"
       onClick={handleError}
          //onClick={ () => setErrorMessage ("")}
          sx={{
            backgroundColor: "pink",
            boxShadow: "none",
            color: "black",
            mt: 3,
          }}
        >
          Gå vidare
        </Button> 
        
        </>
        :
        <>
        <Link to={"/leverans"}>
        <Button
          size="small"
          variant="contained"
       onClick={handleError}
          //onClick={ () => setErrorMessage ("")}
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
        </>
}
         {/* <HandleError />  */}
           {/*  <SubmitButton /> */}
          {/* </Link> */}
        </Box>
      </Box>
    </Box>
  );
}

export default CheckOutContact;
