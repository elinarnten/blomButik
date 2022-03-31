import { Box, Typography } from "@mui/material";
import Avatar from "../Assets/avatar.png";
import FlowerBackground from "../Assets/flowerBackground.png";

function About() {
  return (
    <Box
      sx={{
        //backgroundImage: `url(${FlowerBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: "100vh",
        //flex: 1,
        display: "flex",
        flexDirection: "column",
        //justifyContent: "center",
        mt: 10
      }}
    >
      <Typography
        variant="h4"
        sx={{ display: "flex", justifyContent: "center", mb: 2}}
      >
        Om oss
      </Typography>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap-reverse" }}
      >
        <Box
          sx={{
            width: "50%",
            height: "100%",
            //m: 1,
            //backgroundColor: "rgba(244, 234, 198, 0.4)",
            borderRadius: 3,
            border: "solid black 2px"
          }}
        >
          <Typography
            sx={{
              p: "1rem",
        
            }}
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
            backgroundSize: "contain",
          }}
        ></Box>
      </Box>
    </Box>
  );
}

export default About;
