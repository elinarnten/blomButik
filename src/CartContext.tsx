import { createContext, ReactNode, useState } from "react";
import { ShopItem, shopItems } from "./data/ShopContent";

export interface ContextInterface {
  itemInCart: ShopItem[], 
  setItemInCart: React.Dispatch<React.SetStateAction<ShopItem[]>> 
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
    const [itemInCart, setItemInCart] = useState(shopItems)
   
  const addItem = (shopItem: ShopItem) => {
    const clonedItems: ShopItem[] = Object.assign([], itemInCart);
    for (const item of clonedItems) {
      if (item.id == shopItem.id) {
        item.quantity += 1;
        setItemInCart(clonedItems)
        return;
      }
    }
    clonedItems.push({quantity: 1})
    setItemInCart(clonedItems) 
  }


  const removeItem = (shopItem: ShopItem) => {
    const clonedItems: ShopItem[] = Object.assign([], itemInCart)
    for (const item of clonedItems){
      if (item.id === shopItem.id) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
          clonedItems.splice(clonedItems.indexOf(item), 1);
        }
        setItemInCart(clonedItems)
        return;
      }
    }
    setItemInCart(clonedItems)
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