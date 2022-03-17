import React, { Dispatch, SetStateAction } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Favorite from "@mui/icons-material/Favorite";
import ShoppingBasket from "@mui/icons-material/ShoppingBasket";
import { Menu, MenuItem } from "@mui/material";

interface Props {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

function Header(props: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log(props.setMenuOpen);
  return (
    <Box>
      <AppBar
        position="static"
        style={{
          //backgroundColor: "#84A86F",
          backgroundColor: "white",
          //color: "#F4EAC6",
          color: "black",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Sortiment</MenuItem>
            <MenuItem onClick={handleClose}>Om oss</MenuItem>
            <MenuItem onClick={handleClose}>Kontakt</MenuItem>
            <MenuItem onClick={handleClose}>Leverans</MenuItem>
          </Menu>

          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1 }}
            fontFamily="rouge script"
            style={{
              display: "flex",
              justifyContent: "center",
              fontFamily: "Pacifico, cursive",
            }}
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
              <Favorite />
            </IconButton>

            <IconButton
              size="large"
              aria-label="Favoriter"
              color="inherit"
              sx={{ flexGrow: 1 }}
              onClick={() => props.setMenuOpen(true)}
            >
              <ShoppingBasket />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
