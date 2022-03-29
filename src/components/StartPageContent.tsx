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
import { CartContext } from "../CartContext";

export default function StartPageContent() {
  const { startPageProducts } = useContext(ProductContext);
  const { addItem } = useContext(CartContext)

 

  return (
    <Box
      sx={{
        width: "auto",
        heigth: "3rem",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "3rem",
        }}
      >
        {startPageProducts.map((item) => (
          <Card
            key={item.id}
            sx={{
              maxWidth: 200,
              minWidth: 150,
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
              height="130"
              image={item.img}
            ></CardMedia>
            <CardContent sx={{ height: 5 }}>
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
                  fontSize: "small",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                className="Quicksand"
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: "small" }}
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
                size="small"
                style={{
                  position: "static",
                  borderRadius: 5,
                  padding: "6px 5px ",
                  backgroundColor: "#ffcc80",
                  alignSelf: "center",
                }}
                
              onClick={ () => addItem(item)}
              >
                <ShoppingCartIcon sx={{ fontSize: "1rem" }} />
              </Button>
            </CardActions>
          </Card>
        ))}
        <Typography
          variant="h6"
          style={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "Pacifico, cursive",
          }}
        >
          Överraska någon <br></br>du tycker om
        </Typography>
      </Box>
    </Box>
  );
}
