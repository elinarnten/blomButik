import{ useContext } from "react";
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
import { IconButton } from "@mui/material";
import { ConsumerContext } from "../ConsumerContext";
import { CartContext, CartItem } from "../CartContext";
import { CloseOutlined } from "@mui/icons-material";




interface Props {
  item: ShopItem;

  
}


 

export default function CardView( props: Props) {

  const {itemInCart, setItemInCart, addItem} = useContext(CartContext)

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
      <CardMedia
        component="img"
        alt="shopItem"
        height="270"
        image={`${props.item.img}`}
      ></CardMedia>
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
