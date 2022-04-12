import { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ShopItem } from "../../data/ShopContent";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../../App.css";
import { CartContext } from "../../contexts/CartContext";
import { Box, Popover } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";


interface Props {
  item: ShopItem;
}

export default function CardView(props: Props) {
  const { addItem } = useContext(CartContext);

  const handleOnClick = () => {
    addItem(props.item);
  };

  return (
    <Card
      sx={{ width: 220 }}
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        flexWrap: "wrap",
        border: "solid black 2px",
      }}
      className="Quicksand"
    >
      <Link to={{ pathname: '/sortiment/' + props.item.title}} > 
        <CardMedia
          component="img"
          alt="shopItem"
          height="270"
          image={`${props.item.img}`}
        ></CardMedia>
      </Link>
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
            color: "black",
          }}
        >
          {props.item.title}
        </Typography>
        <Typography
          className="Quicksand"
          variant="body2"
          color="text.secondary"
        >
          {props.item.price} kr/st
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
          size="small"
          variant="contained"
          style={{
            position: "static",
            borderRadius: 5,
            backgroundColor: "black",
            padding: "5px 35px",
            fontSize: "8px",
            alignSelf: "center",
          }}
          onClick={handleOnClick}
        >
          <ShoppingCartIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
