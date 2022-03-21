import { createContext, ReactNode, useState } from "react";
import { ShopItem } from "./data/ShopContent";

export interface ContextInterface {
  itemInCart: ShopItem[], 
  setItemInCart: React.Dispatch<React.SetStateAction<ShopItem[]>> 
}

export const CartContext = createContext<ContextInterface>({
  itemInCart: [],
  setItemInCart: () => undefined
});


const CartContextProvider: React.FC<ReactNode> = ({ children }) => {
    const [itemInCart, setItemInCart] = useState<ShopItem[]>([])
  
    return (
      <CartContext.Provider
        value={{
          itemInCart,
          setItemInCart
        }}
      >
        {children}
      </CartContext.Provider>
    );
  };
  
  export default CartContextProvider;