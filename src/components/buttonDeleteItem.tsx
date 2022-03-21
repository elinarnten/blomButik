import { Button } from "@mui/material";
import React from "react";
import { Dispatch, SetStateAction, useCallback } from "react";
import { ShopItem } from "../data/ShopContent";

interface Props {
  hideShow: Boolean;
  item: ShopItem
  deleteThisItem: Dispatch<SetStateAction<any>>;
}


export default function DeleteButton(Props: Props) {
  if (Props.hideShow === true) {
    {
      return (
        <Button
          variant="contained"
          style={{
            backgroundColor: "#fdab90",
            alignSelf: "center",
            width:"100%"
          }}
        //   onClick={() => console.log(Props.item)}
      onClick={() => {Props.deleteThisItem(Props.item.id)}}
        >
          
          delete item
        </Button>
      );
    }
  } else if (Props.hideShow === false) {
    {
      return (
        <>
        </>
      );
    }
  }
  return <DeleteButton hideShow={Props.hideShow} item={Props.item} deleteThisItem={Props.deleteThisItem}></DeleteButton>;
}
