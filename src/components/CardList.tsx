import CardView from './Card'
import {shopItems} from '../data/ShopContent'
import {Grid } from '@mui/material'
import bg from "../images/bg.jpg";

export default function CardList() {
return (
  <>
    
      <Grid
        container
        rowSpacing={1.5}
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
        }}
      >
        {shopItems.map((item) => (
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
            }}
          >
            <CardView key={item.id} item={item} />
          </Grid>
        ))}
      </Grid>
  </>
);
}