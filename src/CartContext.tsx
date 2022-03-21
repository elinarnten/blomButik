import { createContext, ReactNode, useState } from "react";
import { ShopItem } from "./data/ShopContent";

/* export interface ContextInterface {
  firstname: string,
  lastname: string,
  phoneNumber: string,
  deliveryOption: object,
  deliveryDate: string, 
  itemInCart: ShopItem{[]},  
} */

export const CartContext = createContext<any>(null);


const CartContextProvider: React.FC<ReactNode> = ({ children }) => {
    const [itemInCart, setItemInCart] = useState([{}])
  
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