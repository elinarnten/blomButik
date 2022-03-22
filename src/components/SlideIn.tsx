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
import { Context } from "../Context";
import { CartContext } from "../CartContext";
import { createWriteStream } from "fs";

interface Props {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default function SlideIn(props: Props) {
  const { itemInCart, setItemInCart } = useContext(CartContext);

  const addItem = () => {
  
    console.log(addItem)
  };



  const slideFrame = (
    <Paper
      sx={{ m: 1, position: "fixed", top: 0, bottom: 0, right: 0, zIndex: 1 }}
      elevation={2}
    >
      <IconButton onClick={() => props.setMenuOpen(false)}>
        <CloseIcon sx={{ color: "black" }} />
      </IconButton>

      <Box sx={{ width: "auto", p: "1rem" }}>
        <Typography variant="h5">Varukorg</Typography>

        <Box sx={{ display: "flex", flexDirection: "column", mt: 1 }}>
          {itemInCart.map((cartItem) => (
            <Card key={cartItem.id} sx={{ display: "flex" }}>
              <CardMedia
                sx={{ width: "50%" }}
                component="img"
                height="100"
                image={cartItem.img}
              ></CardMedia>

              <Typography
                sx={{ m: 1, display: "flex", flexDirection: "column" }}
              >
                {cartItem.title}
                <p>{cartItem.price} kr</p>
                
                

                <Box>
                  <IconButton
                  //onClick = {() => {addItem(), cartItem.quantity}}
                  //onClick={addProductToCart}
                  >
                  <AddIcon />
                  </IconButton>
                  {cartItem.quantity}
                  <IconButton
                  >
                  <RemoveIcon />
                </IconButton>
                </Box>
              </Typography>
            </Card>
          ))}
        </Box>

        <Box sx={{ position: "absolute", bottom: 0 }}>
          Totalt pris: ?? kr
          <Link to="/kunduppgifter" style={{ textDecoration: "none" }}>
            <Button
              onClick={() => props.setMenuOpen(false)}
              sx={{
                height: "2rem",
                width: "auto",
                backgroundColor: "pink",
                color: "black",
                mb: "1rem",
                mt: "0.5rem",
              }}
            >
              Till kassan
            </Button>
          </Link>
        </Box>
      </Box>
    </Paper>
  );

  return (
    <Box>
      <Box>
        <Slide direction="left" in={props.menuOpen} mountOnEnter unmountOnExit>
          {slideFrame}
        </Slide>
      </Box>
    </Box>
  );
}
