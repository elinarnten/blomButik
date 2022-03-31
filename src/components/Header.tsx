import React, { Dispatch, SetStateAction, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBasket from "@mui/icons-material/ShoppingBasket";
import Badge from "@mui/material/Badge";
import { Menu, MenuItem } from "@mui/material";
import { pink } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CartContext } from "../contexts/CartContext";

interface Props {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const theme = createTheme({
  palette: {
    primary: {
      main: pink[100],
    },
  },
});
function Header(props: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { getTotalQuantity } = useContext(CartContext);
  let totalQuantity = getTotalQuantity();

  return (
    <Box
      style={{
        overflow: "hidden",
        position: "fixed",
        top: 0,
        width: "100%",
      }}
    >
      <AppBar
        position="static"
        style={{
          //backgroundColor: "#84A86F",
          backgroundColor: "rgba(214, 186, 227, 0.4)",
          //color: "#F4EAC6",
          color: "black",

          borderBottom: "solid black 2px",
          height: "4rem",
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
            <a
              href={"/sortiment"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem onClick={handleClose}>Sortiment</MenuItem>
            </a>
            <a href={"/om"} style={{ textDecoration: "none", color: "black" }}>
              <MenuItem onClick={handleClose}>Om oss</MenuItem>
            </a>
            <a
              href={"/kontakt"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem onClick={handleClose}>Kontakt</MenuItem>
            </a>
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
            <a href={"/"} style={{ textDecoration: "none", color: "black" }}>
              Blombutiken
            </a>
          </Typography>

          <div>
            <ThemeProvider theme={theme}>
              <IconButton
                size="large"
                aria-label="Favoriter"
                color="inherit"
                sx={{ flexGrow: 1 }}
                onClick={() => props.setMenuOpen(true)}
              >
                <Badge badgeContent={totalQuantity} color="primary">
                  <ShoppingBasket />
                </Badge>
              </IconButton>
            </ThemeProvider>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
