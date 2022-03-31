import CardView from "./Card";
import { ShopItem } from "../data/ShopContent";
import { Grid, Typography } from "@mui/material";
import bg from "../images/bg.jpg";
import { Box, display, width } from "@mui/system";
import { SortButton } from "../data/SortButtonsData";
import { useContext, useState } from "react";
import AddProduct from "./AddProduct";
import DeleteButton from "./buttonDeleteItem";
import { ProductContext } from "../productContext";
import EditButton from "./EditButton";

interface Props {
  buttonItem: SortButton;
  item: ShopItem;
}

interface Adminprops {
  hideShow: Boolean;
}
export default function CardList(props: Adminprops) {
  const { removeProduct, addProduct, updateProduct, products } =
    useContext(ProductContext);

  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            m: 6,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >

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
            }}
          >
            Plocka och välj ur vårt stora utbud av blommor!
          </Typography>
        </Box>
        <AddProduct
          hideShow={props.hideShow}
          HandleSubmitProducts={addProduct}
        ></AddProduct>

        {products.map((item) => (
          <Grid
            key={item.id}
            container
            item
            md={4}
            sm={5}
            sx={{
              mt: "0.1%",
              mb: "3%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "nowrap",
              }}
            >
              <Box>
                <DeleteButton
                  hideShow={props.hideShow}
                  item={item}
                  deleteThisItem={removeProduct}
                ></DeleteButton>
                <EditButton
                  hideShow={props.hideShow}
                  item={item}
                  handleUpdateProduct={updateProduct}
                ></EditButton>
              </Box>
              <CardView key={item.tag} item={item} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}


