import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { ShopItem } from "../data/ShopContent";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import { CartContext } from "../CartContext";

interface Props {
  item: ShopItem;
}

export default function ProductDescription(props: Props) {
  const { addItem } = useContext(CartContext);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOnClick = () => {
    addItem(props.item);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <IconButton onClick={handleClose}>
        <CloseIcon />
      </IconButton>
      <Card>
        <CardMedia image={`${props.item.img}`}></CardMedia>
      </Card>
      <Box>
        <Typography> {props.item.title}</Typography>
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
    </Box>
  );
}
