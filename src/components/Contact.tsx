import React from "react";
import { Box, Card, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import FlowerBackground from "../Assets/flowerBackground.png";

function Contact() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${FlowerBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        m: "2rem",
        flex: 1,
      }}
    >
      <Typography variant="h4" component="div" sx={{ pt: 5, pl: 4, m: 3 }}>
        Kontakt
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          mb: "3rem",
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
    </Box>
  );
}
export default Contact;
