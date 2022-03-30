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
        //width: "auto",
        //heigth: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
        <Typography
          variant="h6"
          style={{
            display: "flex",
            justifyContent: "center",
            //alignItems: "center",
            fontFamily: "Pacifico, cursive",
            marginTop: 40,
            marginBottom: 15
          
          }}
        >
        Överraska någon du tycker om
        </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          width: "100%"
          //mt: "1rem",
        }}
      >
       
        {startPageProducts.map((item) => (
          <Card
            key={item.id}
            sx={{
              width: "8rem",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              m: 1,
              mb: 3
            }}
            style={{
              textAlign: "center",
              justifyContent: "center",
              alignContent: "center",
              alignSelf: "center",
              border: "solid black 2px"
            }}
            className="Quicksand"
          >
            <CardMedia
              component="img"
              alt="shopItem"
              //height= "120rem"
              image={item.img}
              sx={{height: 120}}
            ></CardMedia>
            <CardContent sx={{ height: 12 }}>
              <Typography
                variant="h5"
                component="div"
                className="Quicksand"
                fontFamily="Quicksand"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontFamily: "Quicksand, cursive",
                  color: "black",
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
                {item.price} kr/st
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
                variant="contained"
                size="small"
                style={{
                  position: "static",
                  borderRadius: 5,
                  padding: "4px 3px ",
                  backgroundColor: "black",
                  alignSelf: "center",
                }}
                
              onClick={ () => addItem(item)}
              >
                <ShoppingCartIcon sx={{ fontSize: "1rem" }} />
              </Button>
            </CardActions>
          </Card>
        ))}
      
      </Box>
     
    </Box>
  );
}
