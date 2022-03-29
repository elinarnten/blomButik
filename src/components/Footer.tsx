import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <Box>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          component={Link}
          to="/kontakt"
          label="Kontakt"
        />
        <BottomNavigationAction component={Link} to="/om" label="Om oss" />
        <BottomNavigationAction component={Link} to="/admin" label="Admin" />
      </BottomNavigation>
    </Box>
  );
}

export default Footer;
