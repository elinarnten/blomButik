import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { ProductContext } from "../productContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function StartPageContent() {
  const { startPageProducts } = useContext(ProductContext);

  return (
    <Box
      sx={{
        width: "auto",
        heigth: "3rem",
        alignItems: "center",
        justifyContent: "center",
        mt: "1rem",
        mx: "5rem",
        // backgroundColor: "rgba(132, 168, 111, 0.6)",
        borderRadius: 3,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          pt: "1rem",
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
                variant="contained"
                style={{
                  position: "static",
                  borderRadius: 5,
                  padding: "3px 25px",
                  backgroundColor: "#ffcc80",
                  alignSelf: "center",
                }}
                //onClick={ (e) => handleOnClick(e, setItemInCart)}
                // onClick={handleOnClick}
              >
                <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
