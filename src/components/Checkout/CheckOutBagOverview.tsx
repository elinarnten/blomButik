import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ConsumerContext } from "../../contexts/ConsumerContext";

function CheckOutBagOverview() {
  const { deliveryOption, deliveryDate } = useContext(ConsumerContext);
  const { getTotalPrice } = useContext(CartContext);

  //function from CartContext
  //calculates each item price * quantity
  let totalPrice = getTotalPrice();

  return (
    <Box
      sx={{
        m: 1,
        p: 3,
        backgroundColor: "pink",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography sx={{ fontSize: "100%", mb: 1 }}>Specifikation</Typography>
      <Typography sx={{ fontSize: 15 }}>Pris: {totalPrice} SEK</Typography>
      <Typography sx={{ fontSize: 15 }}>
        Frakt: {deliveryOption.price} SEK
      </Typography>
      <Typography sx={{ fontSize: 15 }}>Levereras {deliveryDate}</Typography>
      <Typography sx={{ fontSize: 15 }}>
        Moms: {totalPrice * 0.25} SEK
      </Typography>
      <Typography sx={{ fontSize: 20, fontWeight: "bold", mt: 2 }}>
        Total: {totalPrice + deliveryOption.price} SEK
      </Typography>
    </Box>
  );
}

export default CheckOutBagOverview;
