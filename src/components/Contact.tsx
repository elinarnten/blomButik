import { Box, Card, CardMedia } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

function Contact() {
  return (
    <Box sx={{ display: "flex" }}>
      <Card>
        <LocationOnIcon style={{ color: "#84A86F" }} />
      </Card>
      <Card>
        <AlternateEmailIcon style={{ color: "#84A86F" }} />
      </Card>
      <Card>
        <PhoneIcon style={{ color: "#84A86F" }} />
      </Card>
      <Card>
        <InstagramIcon style={{ color: "#84A86F" }} />
      </Card>
    </Box>
  );
}

export default Contact;
