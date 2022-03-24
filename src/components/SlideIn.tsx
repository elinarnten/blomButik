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

interface Props {
  //item: ShopItem
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default function SlideIn(props: Props) {
  const { itemInCart, setItemInCart, addItem, removeItem } =
    useContext(CartContext);

  //console.log(itemInCart.id)

  const handleAddItem = () => {
    //addItem()
  };

  const handleRemoveItem = () => {
    //removeItem()
  };

  const slideFrame = (
    <Box
      sx={{ m: 1, position: "fixed", top: 0, bottom: 0, right: 0, zIndex: 1 }}
    >
      <IconButton onClick={() => props.setMenuOpen(false)}>
        <CloseIcon sx={{ color: "black" }} />
      </IconButton>

      <Box sx={{ width: "auto", p: "1rem" }}>
        <Typography variant="h5">Varukorg</Typography>

        <Box sx={{ display: "flex", flexDirection: "column", mt: 1 }}>
          {itemInCart.map((cartItem) => (
            <Card
              key={cartItem.shopItem.id}
              sx={{ display: "flex", m: 1, height: "100%", width: "100%" }}
            >
              <CardMedia
                sx={{ width: "40%", height: "100%" }}
                component="img"
                image={cartItem.shopItem.img}
              ></CardMedia>

              <Typography
                sx={{ display: "flex", flexDirection: "column", m: 1 }}
              >
                <p style={{ fontSize: "80%", fontWeight: "bold" }}>
                  {cartItem.shopItem.title}
                </p>

                <p style={{ fontSize: "60%" }}>{cartItem.shopItem.price} kr</p>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <IconButton onClick={handleAddItem}>
                    <AddIcon sx={{ fontSize: "50%" }} />
                  </IconButton>

                  <p style={{ fontSize: "50%" }}>{cartItem.quantity}</p>

                  <IconButton onClick={handleRemoveItem}>
                    <RemoveIcon sx={{ fontSize: "50%" }} />
                  </IconButton>
                </Box>
              </Typography>
            </Card>
          ))}
        </Box>

        <Box>
          Totalt pris: ?? kr
          <Link to="/kunduppgifter" style={{ textDecoration: "none" }}>
            <Button
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
          </Link>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box>
      <Slide
        style={{
          width: "30%",
          height: "80%",
          backgroundColor: "rgba(244, 234, 198, 0.4)",
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
