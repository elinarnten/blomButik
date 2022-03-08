import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Favorite from "@mui/icons-material/Favorite";
import ShoppingBasket from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#84A86F",
          color: "#F4EAC6",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            fontFamily="rouge script"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Blombutiken
          </Typography>

          <div>
            <IconButton
              size="large"
              aria-label="Favoriter"
              color="inherit"
              sx={{ flexGrow: 1 }}
            >
              <Favorite sx={{ pr: 2 }} />
              <ShoppingBasket />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
