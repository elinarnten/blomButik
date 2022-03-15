import React from "react";
import { Link } from "react-router-dom";
import {
  Paper,
  Box,
  Button,
  Slide,
  FormControlLabel,
  Switch,
  Card,
  Typography,
} from "@mui/material";
import { ShopItem } from "../data/ShopContent";

interface Props {}

export default function SlideIn(props: Props) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const slideFrame = (
    <Paper sx={{ m: 1, position: "fixed", top: 0, bottom: 0 }} elevation={4}>
      <Box sx={{ width: "auto", p: "2rem" }}>
        <Typography variant="h5">Varukorg</Typography>
        <Box>
          Här ska produkterna synas
          <Card>
            {/* {props.item.img},{props.item.title},{props.item.id} */}
          </Card>
        </Box>

        <Link
          to="/kunduppgifter"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Button
            sx={{
              height: "2rem",
              width: "auto",
              backgroundColor: "pink",
              display: "flex",
            }}
          >
            Go to Checkout
          </Button>
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
