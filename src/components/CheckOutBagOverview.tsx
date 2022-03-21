import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { Context } from "../Context";

/* interface CheckOutBagOverviewProps {
  deliveryDate?: string;
} */

/* const CheckOutBagOverview: React.FC<CheckOutBagOverviewProps> = ({
  deliveryDate,
}) => { */
function CheckOutBagOverview() {
  const { deliveryOption, deliveryDate } = useContext(Context);
  console.log(deliveryDate);
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
        height: 420,
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

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          ml: 1.5,
        }}
      >
        <Typography sx={{ fontSize: 11 }}>Pris: SEK</Typography>
        <Typography sx={{ fontSize: 11 }}>
          Frakt: {deliveryOption.price} SEK
        </Typography>
        <Typography sx={{ fontSize: 9, fontWeight: "bold" }}>
          Levereras {deliveryDate}
        </Typography>
        <Typography sx={{ fontSize: 11 }}>Moms: SEK</Typography>
        <Typography sx={{ fontSize: 14, fontWeight: "bold" }}>
          Total: SEK
        </Typography>
      </Box>
    </Box>
  );
}

export default CheckOutBagOverview;
