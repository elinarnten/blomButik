import React from "react";
import { Box, Card, CardMedia, Typography, Paper } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Image from "../assets/flowerBackground.png";

function Contact() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        background: "url(../assets/flowerBackground.png)",
        marginBottom: "3rem",
        marginTop: "3rem",
      }}
    >
      <Card style={{ backgroundColor: "#F4EAC6", height: 160, width: 160 }}>
        <LocationOnIcon
          style={{
            color: "#84A86F",
            fontSize: "4rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
        <Typography></Typography>
      </Card>

      <Card style={{ backgroundColor: "#F4EAC6", height: 160, width: 160 }}>
        <AlternateEmailIcon style={{ color: "#84A86F", fontSize: "4rem" }} />
        <Typography>info@bb.se</Typography>
      </Card>

      <Card style={{ backgroundColor: "#F4EAC6", height: 160, width: 160 }}>
        <PhoneIcon style={{ color: "#84A86F", fontSize: "4rem" }} />
        <Typography>0712345678</Typography>
      </Card>

      <Card style={{ backgroundColor: "#F4EAC6", height: 160, width: 160 }}>
        <InstagramIcon style={{ color: "#84A86F", fontSize: "4rem" }} />
      </Card>
    </Box>
  );
}
export default Contact;
