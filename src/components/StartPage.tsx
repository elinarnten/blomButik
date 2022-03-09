import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import startpageBackground from "../Assets/startPageBackground.jpg";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";

function StartPage() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundImage: `url(${startpageBackground})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        display: "flex",

        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "50%",
          height: "20%",
          mt: "15%",
          backgroundColor: "rgba(244, 234, 198, 0.4)",
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">Välkommen till din blombutik!</Typography>
        <Button
          size="small"
          variant="contained"
          endIcon={<LocalFloristIcon />}
          sx={{ backgroundColor: "#F4EAC6", boxShadow: "none", color: "black" }}
        >
          Till butiken
        </Button>
      </Box>
    </Box>
  );
}

export default StartPage;
