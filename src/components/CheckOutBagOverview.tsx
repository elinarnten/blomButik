import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { Context } from "../Context";

function CheckOutBagOverview() {
  const { selectedDelivery } = useContext(Context);

  return (
    <Box
      sx={{
        ml: 2,
        mr: 3,
        mt: 7,
        backgroundColor: "rgba(244, 234, 198, 0.4)",
        borderRadius: 2,
        //padding: 2,
        width: "40%",
        height: 400,
      }}
    >
      <Typography
        sx={{
          display: "flex",
          flexDirection: "column",

          m: 1.5,
        }}
      >
        Din varukorg
      </Typography>

      <Box
        sx={{
          width: "83%",
          height: 250,
          border: ".2rem solid #F4EAC6",
          borderRadius: 2,
          m: 1,
          overflow: "hidden",
          overflowY: "scroll",
          p: 1,
        }}
      >
        Här listas produkterna i varukorgen, har lagt till scroll.
      </Box>

      <Typography
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          fontSize: "0.6rem",
          m: 1.5,
        }}
      >
        <p>Pris: SEK</p>
        <p>Frakt: {selectedDelivery} SEK</p>
        <p>Moms: SEK</p>
        <p style={{ fontSize: ".9rem", fontWeight: "bold" }}>Total: SEK</p>
      </Typography>
    </Box>
  );
}

export default CheckOutBagOverview;
