import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ShopItem } from "../../data/ShopContent";
import { useParams } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

interface ProductModalProps {
  product: ShopItem[];
}

function ProductModal({ product }: ProductModalProps) {
  const { addItem } = useContext(CartContext);

  let { title } = useParams();
  console.log(title);

  const item = product.find((matchingId) => matchingId.title === title);

  const handleOnClick = () => {
    if (item) {
      addItem(item);
    }
  };
  console.log(title, item);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          display: "flex",
          height: "100%",
          width: "70%",
        }}
      >
        <CardMedia
          component="img"
          image={item?.img}
          sx={{ width: "40%", height: "100%", m: "none" }}
        ></CardMedia>
        <Box
          sx={{
            px: "1rem",
            pt: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            m: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Quicksand, cursive",
              color: "black",
              mb: 1,
            }}
          >
            {item?.title}
          </Typography>
          <Typography sx={{ mb: 1 }}> {item?.price} KR/ st</Typography>
          <Typography sx={{ mb: 1 }}> {item?.description} </Typography>
          <Button
            size="small"
            variant="contained"
            style={{
              position: "static",
              borderRadius: 5,
              backgroundColor: "black",
              padding: "5px 35px",
              fontSize: "8px",
              alignSelf: "center",
            }}
            onClick={handleOnClick}
          >
            <ShoppingCartIcon />
          </Button>
        </Box>
      </Card>
    </Box>
  );
}

export default ProductModal;
