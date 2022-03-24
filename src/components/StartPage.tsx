import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import React, { useContext } from "react";
//import startpageBackground from "../Assets/startPageBackground.jpg";
import temporary from "../Assets/temporaryBackground.jpg";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import { Link } from "react-router-dom";
import StartPageContent from "./StartPageContent";
import CardView from "./Card";
import { ShopItem, shopItems } from "../data/ShopContent";
import { ProductContext } from "../productContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

// interface Props {
//   item: ShopItem;
// }

function StartPage() {
  const { startPageProducts } = useContext(ProductContext);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        //backgroundImage: `url(${startpageBackground})`,
        backgroundImage: `url(${temporary})`,
        backgroundSize: "cover",
        //backgroundColor: "lightGreen",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "50%",
            height: "20%",
            mt: "15%",
            backgroundColor: "rgba(244, 234, 198, 0.4)",
            borderRadius: 3,
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Välkommen till din blombutik!</Typography>
          <Link to={"/sortiment"} style={{ textDecoration: "none" }}>
            <Button
              size="small"
              variant="contained"
              endIcon={<LocalFloristIcon />}
              sx={{
                backgroundColor: "#F4EAC6",
                boxShadow: "none",
                color: "black",
              }}
            >
              Till butiken
            </Button>
          </Link>
        </Box>
      </Box>
      {/* <StartPageContent /> */}
      <Box
        sx={{
          width: "auto",
          heigth: "3rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            color: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Överraska någon du tycker om
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 1,
          }}
        >
          {startPageProducts.map((item) => (
            <Card
              key={item.id}
              sx={{
                maxWidth: 250,
                minWidth: 200,
                display: "flex",
                flexDirection: "column",
                m: "2rem",
              }}
              style={{
                textAlign: "center",
                justifyContent: "center",
                alignContent: "center",
                alignSelf: "center",
              }}
              className="Quicksand"
            >
              <CardMedia
                component="img"
                alt="shopItem"
                height="200"
                image={item.img}
              ></CardMedia>
              <CardContent sx={{ height: 15 }}>
                <Typography
                  variant="h5"
                  component="div"
                  className="Quicksand"
                  fontFamily="Quicksand"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    fontFamily: "Quicksand, cursive",
                    color: "rgb(250, 218, 112)",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  className="Quicksand"
                  variant="body2"
                  color="text.secondary"
                >
                  {" "}
                  {item.price} KR/ st
                </Typography>
              </CardContent>
              <CardActions
                style={{
                  justifyContent: "center",
                  paddingTop: "15px",
                  marginTop: "10px",
                }}
              >
                <Button
                  sx={{
                    color: "pink",
                  }}
                  size="small"
                  color="secondary"
                  variant="text"
                  style={{
                    position: "static",
                    borderRadius: 5,
                    padding: "5px 15px",
                    fontSize: "5px",
                    alignSelf: "center",
                  }}
                >
                  <FavoriteIcon />
                </Button>

                <Button
                  size="small"
                  variant="contained"
                  style={{
                    position: "static",
                    borderRadius: 5,
                    backgroundColor: "#ffcc80",
                    padding: "5px 35px",
                    fontSize: "8px",
                    alignSelf: "center",
                  }}
                  //onClick={ (e) => handleOnClick(e, setItemInCart)}
                  // onClick={handleOnClick}
                >
                  <ShoppingCartIcon />
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default StartPage;
