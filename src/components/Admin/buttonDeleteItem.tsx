import { Button } from "@mui/material";
import { useContext } from "react";
import { Dispatch, SetStateAction } from "react";
import { ShopItem } from "../../data/ShopContent";
import { ProductContext } from "../../contexts/productContext";
interface Props {
  hideShow: Boolean;
  item: ShopItem;
  deleteThisItem: Dispatch<SetStateAction<any>>;
}

export default function DeleteButton(Props: Props) {
  const { removeProduct } = useContext(ProductContext);

  //from admin, deletes product
  const handleDeleteItem = () => {
    removeProduct(Props.item);
  };

  if (Props.hideShow === true) {
    {
      return (
        <Button
          variant="contained"
          style={{
            backgroundColor: "red",
            alignSelf: "center",
            width: "6rem",
            height: "2rem",
            margin: 5,
          }}
          onClick={handleDeleteItem}
        >
          Ta bort
        </Button>
      );
    }
  }
  return <></>;
}
