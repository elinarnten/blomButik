import React from "react";
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
import { ShopItem } from "../data/ShopContent";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import ShoppingBasket from "@mui/icons-material/ShoppingBasket";

export interface Props {
  menuOpen: boolean;
}

export default function SlideIn(props: Props) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const slideFrame = (
    <Paper
      sx={{ m: 1, position: "fixed", top: 0, bottom: 0, right: 0 }}
      elevation={2}
    >
      <IconButton
        onClick={() => {
          handleChange();
        }}
      >
        <CloseIcon sx={{ color: "black" }} />
      </IconButton>

      <Box sx={{ width: "auto", p: "1rem" }}>
        <Typography variant="h5">Varukorg</Typography>

        <Box sx={{ display: "flex" }}>
          Här ska produkterna synas
          <Card>
            {/* {props.item.img},{props.item.title},{props.item.id}  */}
          </Card>
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <RemoveIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Box>

        <Box sx={{ position: "absolute", bottom: 0 }}>
          Totalt pris: räkna ut pris här
          <Link to="/kunduppgifter" style={{ textDecoration: "none" }}>
            <Button
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
        {/* <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show"
        /> */}
        {/* <IconButton
          onClick={() => {
            handleChange();
          }}
        >
          <ShoppingBasket></ShoppingBasket>
        </IconButton> */}
        <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
          {slideFrame}
        </Slide>
      </Box>
    </Box>
  );
}
