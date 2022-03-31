import { useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";

function OrderConfirmation() {
  const { getOrderNumber } = useContext(CartContext);

  let orderNumber = getOrderNumber();

  window.addEventListener("popstate", (e) => {
    window.location.assign("/");
  });

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: "100%",
          //height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{m: 3, fontSize: 20}}>Tack för ditt köp!</Typography>
        <Typography>Ditt ordernummer är: <strong>{orderNumber}</strong></Typography>
        <Typography sx={{m: 1}}><strong>Frågor?</strong> Tveka inte att höra av dig.</Typography>
        <Typography>Vi på Blombutiken hoppas att du blir nöjd med ditt köp!</Typography>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Button
            size="small"
            variant="contained"
            endIcon={<LocalFloristIcon />}
            sx={{
              backgroundColor: "rgba(214, 186, 227)",
              boxShadow: "none",
              color: "black",
              position: "static",
              mt: 3,
            }}
          >
            Till startsidan
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
export default OrderConfirmation;
