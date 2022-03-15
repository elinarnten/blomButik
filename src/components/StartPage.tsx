import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
//import startpageBackground from "../Assets/startPageBackground.jpg";
import temporary from "../Assets/temporaryBackground.jpg";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import { Link } from "react-router-dom";

function StartPage() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        //backgroundImage: `url(${startpageBackground})`,
        backgroundImage: `url(${temporary})`,
        backgroundSize: "cover",
        //backgroundColor: "lightGreen",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
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
        <Link to={"/sortiment"}>
          <Button
            size="small"
            variant="contained"
            endIcon={<LocalFloristIcon />}
            sx={{
              backgroundColor: "#F4EAC6",
              boxShadow: "none",
              color: "black",
            }}
          >
            Till butiken
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default StartPage;
