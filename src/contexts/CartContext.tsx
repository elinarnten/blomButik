import { createContext, ReactNode, useState } from "react";
import { ShopItem, shopItems } from "../data/ShopContent";
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
  getOrderNumber: () => number;
}

export const CartContext = createContext<ContextInterface>({
  itemInCart: [],
  addItem: () => undefined,
  getTotalPrice: () => 0,
  getTotalQuantity: () => 0,
  removeItem: () => undefined,
  setItemInCart: () => undefined,
  getOrderNumber: () => 0,
});

const CartContextProvider: React.FC<ReactNode> = (props) => {
  const [itemInCart, setItemInCart] = useState<CartItem[]>([]);

  //looks for matching index, if found the
  //quantity changes while added to cart
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
      setItemInCart(cartListCopy);
    } else {
      cartListCopy[foundIndex].quantity--;
      setItemInCart(cartListCopy);
    }
    setItemInCart(cartListCopy);
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

  //gets random ordernumber
  const getOrderNumber = (): number => {
    let orderNumber = Math.floor(Math.random() * 100000) + 600000;
    return orderNumber;
  };

  //logs the products in cart
  console.log("orderspecifikation:", itemInCart);

  return (
    <CartContext.Provider
      value={{
        itemInCart,
        addItem,
        getTotalPrice,
        getTotalQuantity,
        removeItem,
        setItemInCart,
        getOrderNumber,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
