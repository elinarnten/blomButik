import React, { useState } from "react";
import {
  Paper,
  Box,
  Button,
  Link,
  Slide,
  FormControlLabel,
  Switch,
} from "@mui/material";

const frame = (
  <Paper sx={{ height: "100%", width: "40rem" }}>
    <Box>Här ska produkterna synas</Box>
    <Link>
      <Button>Go to Checkout</Button>
    </Link>
  </Paper>
);

function SlideIn() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
        {frame}
      </Slide>
    </Box>
  );
}
export default SlideIn;
