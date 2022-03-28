import { Button } from "@mui/material";
import { createElement, useContext } from "react";
import { Dispatch, SetStateAction } from "react";
import { ShopItem } from "../data/ShopContent";
import { ProductContext } from "../productContext";

interface Props {
  hideShow: Boolean;
  item: ShopItem
  deleteThisItem: Dispatch<SetStateAction<any>>;
}





export default function DeleteButton(Props: Props) {

const { removeProduct } =
  useContext(ProductContext);

const handleDeleteItem = () => {
 removeProduct(Props.item)
    

};

  if (Props.hideShow === true) {
    {
      return (
        <Button
          variant="contained"
          style={{
            backgroundColor: "#fdab90",
            alignSelf: "center",
            width:"50%"
          }}
        //   onClick={() => console.log(Props.item)}
    //   onClick={() => {Props.deleteThisItem(Props.item.id)}}
    
    onClick={handleDeleteItem} 
        >
          
          delete
        </Button>
      );
    }
  } 
      return (
        <>
        </>
      );
}
//deleteThisItem={Props.deleteThisItem}