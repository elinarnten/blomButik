import { createWriteStream } from "fs";
import { createContext, Key, ReactNode, useState } from "react";
import { createEmitAndSemanticDiagnosticsBuilderProgram } from "typescript";
import { ShopItem, shopItems } from "./data/ShopContent";

export interface CartItem {
  shopItem: ShopItem,
  quantity: number
}
export interface ContextInterface {
  itemInCart: CartItem[], 
  setItemInCart: React.Dispatch<React.SetStateAction<any[]>> 
  addItem: (shopItem: ShopItem) => void,
  removeItem: (shopItem: ShopItem) => void,
}

export const CartContext = createContext<ContextInterface>({
  itemInCart: [],
  addItem: () => undefined,
  removeItem: () => undefined,
  setItemInCart: () => undefined
});


const CartContextProvider: React.FC<ReactNode> = ( props ) => {
    const [itemInCart, setItemInCart] = useState<CartItem[]>([])


const addItem = (shopItem: ShopItem) => {

  let cartListCopy = [...itemInCart]

  let foundIndex = cartListCopy.findIndex((cartItem) => cartItem.shopItem.id == shopItem.id)
  if (foundIndex == -1) {
    cartListCopy.push({shopItem, quantity: 1})
  } else {
    cartListCopy[foundIndex].quantity++
  }
  
    setItemInCart(cartListCopy)
  }




  const removeItem = (shopItem: ShopItem) => {
  
    }
  


    return (
      <CartContext.Provider
        value={{
          itemInCart,
          addItem,
          removeItem,
          setItemInCart
        }}
      >
        {props.children}
      </CartContext.Provider>
    );
  };
  
  export default CartContextProvider;