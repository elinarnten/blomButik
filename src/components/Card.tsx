import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ShopItem } from "../data/ShopContent";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../App.css";
import { useState } from "react";
import { CartContext } from "../CartContext";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Menu, Modal, Popover } from "@mui/material";

interface Props {
  item: ShopItem;
}

export default function CardView(props: Props) {
  const { addItem } = useContext(CartContext);

  const [anchorCardEl, setAnchorCardEl] = React.useState<null | HTMLElement>(
    null
  );
  const openCard = Boolean(anchorCardEl);
  const handleCardClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorCardEl(event.currentTarget);
  };
  const handleCardClose = () => {
    setAnchorCardEl(null);
  };

  const handleOnClick = () => {
    addItem(props.item);
  };

  //console.log(itemInCart)
  /* 
  const handleOnClick = (product: ShopItem, cartArray: CartItem[]) => {
    //addItem(product, cartArray)
   setItemInCart([...cartArray, product])
   
    console.log(cartArray)
  }; */

  const [toggle, setToggle] = useState(true);
  const [name, setName] = useState("test");

  return (
    <Card
      sx={{ maxWidth: 350, minWidth: 220 }}
      style={{
        textAlign: "center",
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "center",
      }}
      className="Quicksand"
    >
      <Button
        aria-controls={openCard ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openCard ? "true" : undefined}
        onClick={handleCardClick}
        sx={{ position: "static" }}
      >
        <CardMedia
          component="img"
          alt="shopItem"
          height="270"
          image={`${props.item.img}`}
        ></CardMedia>
      </Button>

      <Popover
        anchorEl={anchorCardEl}
        open={openCard}
        onClose={handleCardClose}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 350, left: 600 }}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
      >
        <Card sx={{ display: "flex", height: "100%", width: "40rem" }}>
          <CardMedia
            component="img"
            image={props.item.img}
            sx={{ width: "40%", height: "100%", m: "none" }}
          ></CardMedia>
          <Box
            sx={{
              px: "1rem",
              pt: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Quicksand, cursive",
                color: "rgb(250, 218, 112)",
              }}
            >
              {props.item.title}
            </Typography>
            <Typography> {props.item.price} KR/ st</Typography>
            <Typography> {props.item.description} </Typography>
            <Button
              size="small"
              variant="contained"
              style={{
                position: "static",
                borderRadius: 5,
                backgroundColor: "#ffcc80",
                padding: "5px 35px",
                fontSize: "8px",
                alignSelf: "center",
              }}
              onClick={handleOnClick}
              //   onClick={() => addItem(props.item)}
            >
              <ShoppingCartIcon />
            </Button>
          </Box>
        </Card>
      </Popover>
      <CardContent sx={{ height: 45 }}>
        <Typography
          variant="h5"
          component="div"
          className="Quicksand"
          fontFamily="Quicksand"
          style={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "Quicksand, cursive",
            color: "rgb(250, 218, 112)",
          }}
        >
          {props.item.title}
        </Typography>
        <Typography
          className="Quicksand"
          variant="body2"
          color="text.secondary"
        >
          {props.item.price} KR/ st
        </Typography>
      </CardContent>
      <CardActions
        style={{
          justifyContent: "center",
          paddingTop: "15px",
          marginTop: "10px",
        }}
      >

        <Button
          sx={{
            color: "pink",
          }}
          size="small"
          color="secondary"
          variant="text"
          style={{
            position: "static",
            borderRadius: 5,
            padding: "5px 15px",
            fontSize: "5px",
            alignSelf: "center",
          }}
        >
          <FavoriteIcon />
        </Button>


        <Button
          size="small"
          variant="contained"
          style={{
            position: "static",
            borderRadius: 5,
            backgroundColor: "#ffcc80",
            padding: "5px 35px",
            fontSize: "8px",
            alignSelf: "center",
          }}
          //onClick={ (e) => handleOnClick(e, setItemInCart)}
          onClick={handleOnClick}
        >
          <ShoppingCartIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
