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

interface Props {
  item: ShopItem;
}

export default function CardView(props: Props) {
  const { addItem } = useContext(CartContext);

  //handle the popover with product information
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
        <Card
          sx={{
            display: "flex",
            height: "100%",
            width: "40rem",
            border: "solid black 2px",
          }}
        >
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
              m: 2,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Quicksand, cursive",
                color: "black",
                mb: 1,
              }}
            >
              {props.item.title}
            </Typography>
            <Typography sx={{ mb: 1 }}> {props.item.price} KR/ st</Typography>
            <Typography sx={{ mb: 1 }}> {props.item.description} </Typography>
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
