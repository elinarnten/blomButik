import React from "react";
import { Box, Card, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import FlowerBackground from "../Assets/flowerBackground.png";

function Contact() {
  return (
  // <Box  sx={{height: "100%"}} >
    <Box
      sx={{
       //backgroundImage: `url(${FlowerBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        
        minHeight: "100vh" ,
        width: "100%",
        /* height: "100%",
        width: "100%", */
        //m: "2rem",
        //flex: 1,
        display: "flex",
        //justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mt: 10
      }}
      
    >
      <Typography variant="h4" component="div" sx={{ mb: 1 }}>
        Kontakt
      </Typography>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Card
          sx={{
            //backgroundColor: "rgba(244, 234, 198, 0.7 )",
            height: 180,
            width: 180,
            m: 1,
            border: "solid black 2px"
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
            <LocationOnIcon style={{ color: "black", fontSize: "4rem" }} />
          </div>

          <Typography sx={{ mx: "auto", textAlign: "center" }}>
            Blomstergatan 18 <br></br> 416 64 Göteborg
          </Typography>
        </Card>

        <Card
          sx={{
            //backgroundColor: "rgba(244, 234, 198, 0.7 )",
            height: 180,
            width: 180,
            m: 1,
            border: "solid black 2px"
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
              style={{ color: "black", fontSize: "4rem" }}
            />
          </div>
          <Typography sx={{ mx: "auto", textAlign: "center" }}>
            info@bb.se
          </Typography>
        </Card>

        <Card
          sx={{
            //backgroundColor: "rgba(244, 234, 198, 0.7 )",
            height: 180,
            width: 180,
            m: 1,
            border: "solid black 2px"
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
            <PhoneIcon style={{ color: "black", fontSize: "4rem" }} />
          </div>
          <Typography sx={{ mx: "auto", textAlign: "center" }}>
            0712345678
          </Typography>
        </Card>

        <Card
          sx={{
            //backgroundColor: "rgba(244, 234, 198, 0.7 )",
            height: 180,
            width: 180,
            m: 1,
            border: "solid black 2px"
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
            <InstagramIcon style={{ color: "black", fontSize: "4rem" }} />
          </div>

          <Typography sx={{ mx: "auto", textAlign: "center" }}>
            @blombutiken
          </Typography>
        </Card>
      </Box>
    </Box>
    //</Box>
  
  );
}
export default Contact;
