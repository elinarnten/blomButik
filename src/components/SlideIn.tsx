import React, { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import {
  Paper,
  Box,
  Button,
  Slide,
  Card,
  Typography,
  IconButton,
} from "@mui/material";
import { ShopItem, shopItems } from "../data/ShopContent";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

interface Props {
  shopItems: ShopItem;
  setItem: ShopItem;
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default function SlideIn(props: Props) {
  const slideFrame = (
    <Paper
      sx={{ m: 1, position: "fixed", top: 0, bottom: 0, right: 0 }}
      elevation={2}
    >
      <IconButton onClick={() => props.setMenuOpen(false)}>
        <CloseIcon sx={{ color: "black" }} />
      </IconButton>

      <Box sx={{ width: "auto", p: "1rem" }}>
        <Typography variant="h5">Varukorg</Typography>

        <Box sx={{ display: "flex" }}>
          Här ska produkterna synas
          <div>{props.shopItems.id === 0 && <div>Varukorgen är tom </div>}</div>
          <Card>
            {/* {props.item.img},{props.item.title},{props.item.id} */}
          </Card>
          <IconButton>
            <AddIcon />
          </IconButton>
          {/* <IconButton onClick={() => onRemove(props.item,id)}>
            <RemoveIcon />
          </IconButton> */}
        </Box>

        <Box sx={{ position: "absolute", bottom: 0 }}>
          Totalt pris: räkna ut pris här
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
              Go to Checkout
            </Button>
          </Link>
        </Box>
      </Box>
    </Paper>
  );

  return (
    <Box>
      <Box>
        <Slide direction="left" in={props.menuOpen}>
          {slideFrame}
        </Slide>
      </Box>
    </Box>
  );
}
