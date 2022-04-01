import { Box, Typography } from "@mui/material";
import Avatar from "../Assets/avatar.png";

function About() {
  return (
    <Box
      sx={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        mt: 10,
      }}
    >
      <Typography
        variant="h4"
        sx={{ display: "flex", justifyContent: "center", mb: 2 }}
      >
        Om oss
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap-reverse",
        }}
      >
        <Box
          sx={{
            width: "50%",
            height: "100%",
            borderRadius: 3,
            border: "solid black 2px",
          }}
        >
          <Typography
            sx={{
              p: "1rem",
            }}
          >
            Kul att just DU hittat till oss!
            <br></br>
            <br></br>
            Blombutiken är en svensk butik som drivs av tre växtälskande tjejer.
            Vi har ett brett sortiment av buketter och arrangemang till vardag
            och fest. Vår butik har generösa öppettider men strålande personal.
            Dessutom är vår e-handel öppen dygnet runt.
            <br></br>
            <br></br>
            Genom en kombination av kunskap, service, inspiration och högt
            engagemang erbjuder Blombutiken ett prisvärt utbud med hög kvalitet
            där endast fantasin sätter gränserna. Vi värnar om miljön och köper
            direkt från lokala odlare.
          </Typography>
        </Box>
        <Box
          sx={{
            height: "20rem",
            width: "20rem",
            backgroundImage: `url(${Avatar})`,
            backgroundSize: "contain",
          }}
        ></Box>
      </Box>
    </Box>
  );
}

export default About;
