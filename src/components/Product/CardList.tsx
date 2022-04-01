import CardView from "./Card";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import AddProduct from "../Admin/AddProduct";
import DeleteButton from "../Admin/buttonDeleteItem";
import { ProductContext } from "../../contexts/productContext";
import EditButton from "../Admin/EditButton";
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
