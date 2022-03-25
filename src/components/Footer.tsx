import { CSSProperties } from "react";
import Edit from "@mui/icons-material/Edit";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Box sx={{ color: "black" }}>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Kontakt" />

        <BottomNavigationAction label="Om oss" />

        <BottomNavigationAction
          label="Redigera"
          icon={<EditIcon fontSize="small" />}
        />
      </BottomNavigation>
    </Box>
  );
}

export default Footer;
