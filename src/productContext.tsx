import { createContext, ReactNode, useState } from "react";
import { ShopItem, shopItems } from "./data/ShopContent";
import { useLocalStorageState } from "./LocalStorage";
export interface ProductContextValue {
  add: ShopItem[];
  products: ShopItem[];
  startPageProducts: ShopItem[];
  removeProduct: (shopItem: ShopItem) => void;
  addProduct: (shopItem: ShopItem) => void;
  updateProduct: (shopItem: ShopItem) => void;
}

export const ProductContext = createContext<ProductContextValue>({
  products: [],
  startPageProducts: [],
  add: shopItems,
  removeProduct: () => undefined,
  addProduct: () => undefined,
  updateProduct: () => undefined,
});

const ProductContextProvider: React.FC<ReactNode> = ({ children }) => {
  const [add, setAdd] = useState<ShopItem[]>(shopItems);
  let [products, setProducts] = useLocalStorageState<ShopItem[]>(
    shopItems,
    "items"
  );

  //removes product from Admin UI
  const removeProduct = (shopItem: ShopItem) => {
    let updatedlist = products.filter(
      (deletingshopItem) => shopItem.id !== deletingshopItem.id
    );
    setProducts(updatedlist);
  };

  //Adds product from Admin UI
  const addProduct = (shopItem: ShopItem) => {
    console.log(shopItem);
    let copyProducts = [...products];
    let matchingIndex = copyProducts.findIndex(
      (item) => item.id == shopItem.id
    );
    if (matchingIndex == -1) {
      copyProducts.push(shopItem);
    }
    setProducts(copyProducts);
  };

  const generateRandomProductList = (fullList: ShopItem[]) => {
    let listCopy = [...fullList];
    let currentIndex = listCopy.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [listCopy[currentIndex], listCopy[randomIndex]] = [
        listCopy[randomIndex],
        listCopy[currentIndex],
      ];
    }
    return listCopy.splice(0, 3);
  };

  let [startPageProducts, setStartPageProducts] = useState<ShopItem[]>(
    generateRandomProductList(products)
  );

  const updateProduct = (shopItem: ShopItem) => {
    let update = [...products];
    let matchingIndex = update.findIndex((item) => item.id == shopItem.id);
    if (matchingIndex != -1) {
      update.splice(matchingIndex, 1, shopItem);
    }
    console.log(update);
    setProducts(update);
  };

  return (
    <ProductContext.Provider
      value={{
        add,
        products,
        startPageProducts,
        removeProduct,
        addProduct,
        updateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
