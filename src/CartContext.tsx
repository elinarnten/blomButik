import { createContext, ReactNode, useState } from "react";
import { ShopItem, shopItems } from "./data/ShopContent";

interface CartItem {
  quantity: number
  product: ShopItem
}
export interface CartContextInterface {
  itemInCart: ShopItem[], 
  setItemInCart: React.Dispatch<React.SetStateAction<ShopItem[]>>, 
 
}

export const CartContext = createContext<CartContextInterface>({
  itemInCart: [],
  setItemInCart: () => undefined,

});

const CartContextProvider: React.FC<ReactNode> = ({ children }) => {
    const [itemInCart, setItemInCart] = useState<ShopItem[]>([])


/*     addProductToCart = (product: ShopItem) => {
      const clonedItems: ShopItem[] = Object.assign([], itemInCart);
      for (const item of clonedItems) {
        if (item.product.id == product.id) {
          item.quantity += 1;
        setItemInCart({ items: clonedItems });
          return;
        }
      }
      clonedItems.push({ quantity: 1, product: product });
      setItemInCart({ items: clonedItems });
    }; */

  
    return (
      <CartContext.Provider
        value={{
          itemInCart,
          setItemInCart,
        }}
      >
        {children}
      </CartContext.Provider>
    );
  };
  
  export default CartContextProvider;