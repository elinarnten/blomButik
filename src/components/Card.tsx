import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ShopItem } from "../data/ShopContent";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import '../App.css'

interface Props {
  item: ShopItem;
}

export default function CardView(props: Props) {
  return (
    <Card
      sx={{ maxWidth: 355, minWidth: 225
      
      }}
      style={{
        textAlign:"center",
        justifyContent:"center",
        alignContent:"center",
      }}
      className="Quicksand"
    >
      <CardMedia
        component="img"
        alt="shopItem"
        height="270"
        image={`${props.item.img}`}
      ></CardMedia>
      <CardContent sx={{height:40}}>
        <Typography
          variant="h5"
          component="div"
          className="Quicksand"
        >
          {props.item.title}
        </Typography>
        <Typography className="Quicksand" variant="body2" color="text.secondary">
          {props.item.price} KR/st
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          style={{
            borderRadius: 15,
            backgroundColor: "#ffcc80",
            padding: "5px 55px",
            fontSize: "10px",
            alignSelf:"center"
          }}
        >
          add to cart <ShoppingCartIcon></ShoppingCartIcon>
        </Button>
      </CardActions>
    </Card>
  );
}
