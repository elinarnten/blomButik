import { useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" sx={{ mt: 10 }}>
          Tack för ditt köp!
        </Typography>
        <Typography sx={{ m: 2 }}>
          Ditt ordernummer är: <strong> {orderNumber} </strong>
        </Typography>
        <Typography>
          <strong>Frågor?</strong> Tveka inte att höra av dig.
        </Typography>
        <Typography sx={{ m: 2, textAlign: "center" }}>
          Vi på Blombutiken hoppas du blir nöjd med <br></br>dina varor och att
          vi ses snart igen.
        </Typography>

        <Link to={"/sortiment"} style={{ textDecoration: "none" }}>
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
