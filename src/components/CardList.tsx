import CardView from "./Card";
import { ShopItem, shopItems } from "../data/ShopContent";
import { Grid, Typography } from "@mui/material";
import bg from "../images/bg.jpg";
import { Box } from "@mui/system";
import SortbuttonsDOM from "./Sortbuttons";
import { SortButton, sortButtonsData, } from "../data/SortButtonsData";
import  { useEffect, useState } from "react";


interface Props {
  buttonItem: SortButton;
  item: ShopItem;
}

export default function CardList() {
  const [filter, setFilter] = useState('')



  return (
    <>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          mt: "0.1%",
          mb: "0.1%",
          justifyContent: "center",
          alignContent: "center",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          //backgroundColor: "lightGreen",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          alignItems: "center",
        }}
      >
        <SortbuttonsDOM></SortbuttonsDOM>
        <Typography
          variant="h5"
          component="div"
          className="Quicksand"
          fontFamily="Quicksand"
          style={{
            width: "100%",
            justifyContent: "center",
            fontFamily: "Quicksand, cursive",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              borderRadius: "20px",
              backgroundColor: "rgba(255, 226, 162, 0.852)",
              ml: "20%",
              mr: "20%",
            }}
          >
            <h2 style={{ color: "White" }}>
              Plocka och välj utav vårt stora utbud av blommor!
            </h2>
          </Box>
        </Typography>

       
        {shopItems.map((item) => (
          
          <>
            <Grid
              container
              spacing={1}
              item
              md={3}
              sm={4}
              xs={10}
              sx={{
                mt: "0.1%",
                mb: "0.1%",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
            >

              <CardView key={item.id} item={item}/>
            </Grid>
          </>
        ))}
      </Grid>
    </>
  );
}
