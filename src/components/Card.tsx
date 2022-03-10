import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ShopItem } from "../data/ShopContent";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import '../App.css'

interface Props {
  item: ShopItem;
}

export default function CardView(props: Props) {
  return (
    <Card
      sx={{ maxWidth: 355, minWidth: 225 }}
      style={{
        textAlign: "center",
        justifyContent: "center",
        alignContent: "center",
        alignSelf:"center"
      }}
      className="Quicksand"
    >
      <CardMedia
        component="img"
        alt="shopItem"
        height="270"
        image={`${props.item.img}`}
      ></CardMedia>
      <CardContent sx={{ height: 40 }}>
        <Typography
          variant="h5"
          component="div"
          className="Quicksand"
          fontFamily="rouge script"
          style={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "Quicksand, cursive",
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
      <CardActions style={{ justifyContent: "center" }}>
        <Button
          sx={{
            width: 300,
            color: "pink",
          }}
          size="small"
          color="secondary"
          variant="text"
          style={{
            borderRadius: 10,
            padding: "5px 30px",
            fontSize: "10px",
            alignSelf: "center",
          }}
        >
          <FavoriteIcon />
        </Button>
        <Button
          size="small"
          variant="contained"
          style={{
            borderRadius: 10,
            backgroundColor: "#ffcc80",
            padding: "5px 55px",
            fontSize: "10px",
            alignSelf: "center",
          }}
        >
          <ShoppingCartIcon></ShoppingCartIcon>
        </Button>
      </CardActions>
    </Card>
  );
}
