import CardView from "./Card";
import { ShopItem, shopItems } from "../data/ShopContent";
import { Grid, Typography } from "@mui/material";
import bg from "../images/bg.jpg";
import { Box } from "@mui/system";
import SortbuttonsDOM from "./Sortbuttons";
import { SortButton } from "../data/SortButtonsData";
import { useContext, useEffect, useState } from "react";
import AddProduct from "./AddProduct";
import DeleteButton from "./buttonDeleteItem";
import { ProductContext } from '../productContext'


interface Props {
  buttonItem: SortButton;
  item: ShopItem;
  
}

interface Adminprops{
hideShow: Boolean

}
export default function CardList(props:Adminprops) {

  const {removeProduct,addProduct,updateProduct,filterProduct,products} = useContext(ProductContext)
 
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
        {/* <SortbuttonsDOM settag={filterProduct}></SortbuttonsDOM> */}
        <Typography
          variant="h4"
          component="div"
          fontFamily="rouge script"
          style={{
            width: "100%",
            justifyContent: "center",
            fontFamily: "Pacifio, cursive",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              borderRadius: "2px",
              backgroundColor: "rgba(255, 226, 162, 0.852)",
              ml: "20%",
              mr: "20%",
            }}
          >
            <h3 style={{ color: "White", fontFamily: "Pacifico, cursive" }}>
              Plocka och välj utav vårt stora utbud av blommor!
            </h3>
          </Box>
        </Typography>

        <AddProduct hideShow={props.hideShow}></AddProduct>

        {products.map((item) => (
          <>
            <Grid
              container
              spacing={1}
              item
              md={4}
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
              <Box
              style={{
                display:"flex",
                flexDirection:"column",
                flexWrap:"nowrap"
              }}>
                <DeleteButton
                  hideShow={props.hideShow}
                  item={item} deleteThisItem={removeProduct} ></DeleteButton>
                <CardView key={item.tag} item={item} />
              </Box>
            </Grid>
          </>
        ))}
      </Grid>
    </>
  );
}
// setFilterShopItems(
// shopItems.filter((product) => deleteItem !== product.id) 
//     [deleteItem])

// useEffect(() => {
//   if (selectedTag === "") {
//       setFilterShopItems(shopItems);
//     } else {
//       setFilterShopItems(
//         shopItems.filter((product) => selectedTag === product.tag)
//       );
//     }
    
//   }, [selectedTag]);
