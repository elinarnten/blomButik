import React from "react";
import { Box, Card, CardMedia, Typography, Paper } from "@mui/material";
import { spacing } from "@mui/system";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Image from "../assets/flowerBackground.png";

function Contact() {
  return (
    <div
      style={{
        backgroundImage:
          "url(../assets/flowerBackground.png) no-repeat center center fixed",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          my: "3rem",
          background:
            "url(../assets/flowerBackground.png) no-repeat center center fixed",
          //height: "100vh",
        }}
      >
        <Card style={{ backgroundColor: "#F4EAC6", height: 180, width: 180 }}>
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              padding: 15,
            }}
          >
            <LocationOnIcon style={{ color: "#84A86F", fontSize: "4rem" }} />
          </div>

          <Typography sx={{ mx: "auto", textAlign: "center" }}>
            Anders Personsgatan 18 <br></br> 416 64 Göteborg
          </Typography>
        </Card>

        <Card style={{ backgroundColor: "#F4EAC6", height: 180, width: 180 }}>
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              padding: 15,
            }}
          >
            <AlternateEmailIcon
              style={{ color: "#84A86F", fontSize: "4rem" }}
            />
          </div>
          <Typography sx={{ mx: "auto", textAlign: "center" }}>
            info@bb.se
          </Typography>
        </Card>

        <Card
          sx={{
            backgroundColor: "rgba(244, 234, 198, 0.7 )",
            height: 180,
            width: 180,
          }}
        >
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              padding: 15,
            }}
          >
            <PhoneIcon style={{ color: "#84A86F", fontSize: "4rem" }} />
          </div>
          <Typography sx={{ mx: "auto", textAlign: "center" }}>
            0712345678
          </Typography>
        </Card>

        <Card style={{ backgroundColor: "#F4EAC6", height: 180, width: 180 }}>
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              padding: 15,
            }}
          >
            <InstagramIcon style={{ color: "#84A86F", fontSize: "4rem" }} />
          </div>

          <Typography sx={{ mx: "auto", textAlign: "center" }}></Typography>
        </Card>
      </Box>
    </div>
  );
}
export default Contact;
