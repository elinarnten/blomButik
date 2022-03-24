import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { CardRandomContext } from "../CardRandomContext";
import CardView from "./Card";
import { ShopItem, shopItems } from "../data/ShopContent";

interface Props {
  item: ShopItem;
}

export default function StartPageContent(props: Props) {
  const { cardList, setCardList } = useContext(CardRandomContext);

  return (
    <Box sx={{ display: "flex" }}>
      <Box>
        {cardList.map((item) => (
          <CardView item={props.item} />
        ))}
        ;
      </Box>
    </Box>
  );
}
