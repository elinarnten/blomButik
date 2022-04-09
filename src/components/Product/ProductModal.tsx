import { Button, Card, CardMedia, Popover, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import { ShopItem } from "../../data/ShopContent";

interface Props {
    item: ShopItem;
  }

function ProductModal (props: Props) {
    const { addItem } = useContext(CartContext);

    const handleOnClick = () => {
        addItem(props.item);
      };

    return (
        <Box>
       
        <Card
          sx={{
            display: "flex",
            height: "100%",
            width: "40rem",
            border: "solid black 2px",
          }}
        >
          <CardMedia
            component="img"
            image={props.item.img}
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
              {props.item.title}
            </Typography>
            <Typography sx={{ mb: 1 }}> {props.item.price} KR/ st</Typography>
            <Typography sx={{ mb: 1 }}> {props.item.description} </Typography>
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
    )
}

export default ProductModal;