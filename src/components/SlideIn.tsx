import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Paper,
  Box,
  Button,
  Slide,
  FormControlLabel,
  Switch,
  Card,
} from "@mui/material";
import { ShopItem } from "../data/ShopContent";

interface Props {}

export default function SlideIn(props: Props) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const slideFrame = (
    <Paper sx={{ m: 1 }} elevation={4}>
      <Box component="svg" sx={{ height: "200", width: "400" }}>
        <Box>
          Här ska produkterna synas
          <Card>
            {/* {props.item.img},{props.item.title},{props.item.id} */}
          </Card>
        </Box>

        <Link to="/kunduppgifter">
          <Button>Go to Checkout</Button>
        </Link>
      </Box>
    </Paper>
  );

  return (
    <Box>
      <Box sx={{ width: `calc(100px + 16px)` }}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show"
        />
        <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
          {slideFrame}
        </Slide>
      </Box>
    </Box>
  );
}
