import { Box, Typography } from "@mui/material";
import Avatar from "../Assets/avatar.png";
import FlowerBackground from "../Assets/flowerBackground.png";

function About() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${FlowerBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100%",
        m: "2rem",
      }}
    >
      <Typography
        variant="h4"
        sx={{ pl: "6rem", pt: "1rem", display: "inline-flex" }}
      >
        Om oss
      </Typography>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            width: "40rem",
            height: "5rem",
            mr: "2rem",
          }}
        >
          <Typography
            sx={{ backgroundColor: "rgba(244, 234, 198, 0.4)", p: "1rem" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            vel similique delectus suscipit animi eius sed cumque adipisci
            mollitia dicta obcaecati autem cum, facilis assumenda voluptas
            impedit ipsam in possimus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Beatae sapiente sed voluptate. Ducimus dicta nisi
            facilis nemo quo pariatur, deleniti ipsum unde dolores culpa
            delectus aperiam, saepe nam distinctio. Numquam?
          </Typography>
        </Box>
        <Box
          sx={{
            height: "20rem",
            width: "20rem",
            backgroundImage: `url(${Avatar})`,
            backgroundSize: "cover",
            mb: "2rem",
          }}
        ></Box>
      </Box>
    </Box>
  );
}

export default About;
