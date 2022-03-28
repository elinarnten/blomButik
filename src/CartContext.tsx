import { createWriteStream } from "fs";
import { createContext, Key, ReactNode, useState } from "react";
import { createEmitAndSemanticDiagnosticsBuilderProgram } from "typescript";
import { ShopItem, shopItems } from "./data/ShopContent";

export interface CartItem {
  shopItem: ShopItem;
  quantity: number;
}
export interface ContextInterface {
  itemInCart: CartItem[];
  setItemInCart: React.Dispatch<React.SetStateAction<any[]>>;
  addItem: (shopItem: ShopItem) => void;
  getTotalPrice: () => number;
  getTotalQuantity: () => number;
  removeItem: (shopItem: ShopItem) => void;
}

export const CartContext = createContext<ContextInterface>({
  itemInCart: [],
  addItem: () => undefined,
  getTotalPrice: () => 0,
  getTotalQuantity: () => 0,
  removeItem: () => undefined,
  setItemInCart: () => undefined,
});

const CartContextProvider: React.FC<ReactNode> = (props) => {
  const [itemInCart, setItemInCart] = useState<CartItem[]>([]);

  const addItem = (shopItem: ShopItem) => {
    let cartListCopy = [...itemInCart];

    const foundIndex = cartListCopy.findIndex(
      (cartItem) => cartItem.shopItem.id === shopItem.id
    );
    if (foundIndex === -1) {
      cartListCopy.push({ shopItem, quantity: 1 });
    } else {
      cartListCopy[foundIndex].quantity++;
    }
    setItemInCart(cartListCopy);
  };

  const removeItem = (shopItem: ShopItem) => {
    let cartListCopy = [...itemInCart];

    const foundIndex = cartListCopy.findIndex(
      (cartItem) => cartItem.shopItem.id === shopItem.id
    );
    if (cartListCopy[foundIndex].quantity === 1) {
      cartListCopy.splice(foundIndex, 1);
      setItemInCart(cartListCopy) 
  }
     else {
      cartListCopy[foundIndex].quantity--;
      setItemInCart(cartListCopy);
    } 
    setItemInCart(cartListCopy)
    console.log(foundIndex)
  };

  const getTotalPrice = (): number => {
    let sum = 0;
    for (const item of itemInCart) {
      sum += item.shopItem.price * item.quantity;
    }
    return sum;
  };

  const getTotalQuantity = (): number => {
    let totalQuantity = 0;
    for (const item of itemInCart) {
      totalQuantity += item.quantity;
    }
    return totalQuantity;
  };

  return (
    <CartContext.Provider
      value={{
        itemInCart,
        addItem,
        getTotalPrice,
        getTotalQuantity,
        removeItem,
        setItemInCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
