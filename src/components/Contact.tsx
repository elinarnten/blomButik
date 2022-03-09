import React from "react";
import { Box, Card, Typography, Paper } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import FlowerBackground from "../assets/flowerBackground.png";

function Contact() {
  return (
    <Paper
      elevation={0}
      style={{
        width: "100%",
        height: "100%",
        backgroundImage: `url(${FlowerBackground})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Typography variant="h4" sx={{ pt: 10, pl: 4, m: 3 }}>
        Kontakt
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          mb: "3rem",
          // backgroundImage: `url(${FlowerBackground})`,
          // backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
          // backgroundPosition: "center",
          height: "100vh",
        }}
      >
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
            <LocationOnIcon style={{ color: "#84A86F", fontSize: "4rem" }} />
          </div>

          <Typography sx={{ mx: "auto", textAlign: "center" }}>
            Blomstergatan 18 <br></br> 416 64 Göteborg
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
            <InstagramIcon style={{ color: "#84A86F", fontSize: "4rem" }} />
          </div>

          <Typography sx={{ mx: "auto", textAlign: "center" }}>
            @blombutiken
          </Typography>
        </Card>
      </Box>
    </Paper>
  );
}
export default Contact;
