import React, { Dispatch, SetStateAction, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Paper,
  Box,
  Button,
  Slide,
  Card,
  Typography,
  IconButton,
  CardMedia,
} from "@mui/material";
import { ShopItem } from "../data/ShopContent";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { ConsumerContext } from "../ConsumerContext";
import { CartContext } from "../CartContext";

interface Props {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

function SlideIn(props: Props) {
  const { itemInCart, setItemInCart, addItem, removeItem, getTotalPrice } =
    useContext(CartContext);

  let totalPrice = getTotalPrice();

function CheckOutButton() {
  if (itemInCart.length >= 1){
    return <Button
    onClick={() => props.setMenuOpen(false)}
    sx={{
      height: "2rem",
      width: "auto",
      backgroundColor: "pink",
      color: "black",
      mb: 1,
      mt: 1,
      ml: 2,
    }}
  >
    Till kassan
  </Button>
  }
   else {
    return <Typography sx={{ml: 4, color: "red"}}>Oups! <br></br>Varukorgen är tom.</Typography>
  } 
}
  


  const slideFrame = (
    <Box
      sx={{ m: 1, position: "fixed", top: 0, bottom: 0, right: 0, zIndex: 1 }}
    >
      {/* Close the slidein cart */}
      <IconButton onClick={() => props.setMenuOpen(false)}>
        <CloseIcon sx={{ color: "white", backgroundColor: "black", borderRadius: "100%" }} />
      </IconButton>

      <Box sx={{ width: "auto", p: "1rem" }}>
        <Typography variant="h5">Varukorg</Typography>

        <Box sx={{ display: "flex", flexDirection: "column", mt: 1, alignItems: "center" }}>
          {itemInCart.map((cartItem) => (
            <Card
              key={cartItem.shopItem.id}
              sx={{ display: "flex", m: 1, height: 180, width: "100%", border: "solid black 2px"}}
            >
              <CardMedia
                sx={{ width: "40%", height: "100%" }}
                component="img"
                image={cartItem.shopItem.img}
              ></CardMedia>

              <Box sx={{display: "flex", flexDirection: "column"}}>
                <Typography
                sx={{ m: 1, fontSize: "80%"}}
              >
                {cartItem.shopItem.title}
                </Typography>
                {/* <br></br> */}
                <Typography
                sx={{ m: 1, fontSize: "80%"}}
              >
                {cartItem.shopItem.price} kr
              </Typography>
              
                <Box sx={{display: "flex", mt: 2, alignItems: "center", }}>
                <IconButton onClick={() => addItem(cartItem.shopItem)}>
                  <AddIcon sx={{ fontSize: "80%" }} />
                </IconButton>
                {cartItem.quantity}
                <IconButton onClick={() => removeItem(cartItem.shopItem)}>
                  <RemoveIcon sx={{ fontSize: "80%" }} />
                </IconButton>
                </Box>
                </Box>
            </Card>
          ))}
        </Box>

        <Box sx={{display: "flex"}}>
          <Box>
          <Typography>
          Totalpris: {totalPrice} kr
          </Typography>
          <Typography sx={{fontSize: 12}}>
          Frakt tillkommer
          </Typography>
          </Box>
          <Link to="/kunduppgifter" style={{ textDecoration: "none" }}>
           <CheckOutButton />
          </Link>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box>
      <Slide className="cartSlide"
        style={{
          width: "50%",
          height: "80%",
          backgroundColor: "white",
          border: "solid black 2px",
          borderRadius: 5,
          overflow: "hidden",
          overflowY: "scroll",
        }}
        direction="left"
        in={props.menuOpen}
        mountOnEnter
        unmountOnExit
      >
        {slideFrame}
      </Slide>
    </Box>
  );
}

export default SlideIn;
