import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import AddProduct from "./components/AddProduct";
import Sortbuttons from "./components/Sortbuttons";
import SortbuttonsDOM from "./components/Sortbuttons";
import { ShopItem, shopItems } from "./data/ShopContent";
import { SortButton, sortButtonsData } from "./data/SortButtonsData";

interface ProductContextValue {
  products: ShopItem[];
  startPageProducts: ShopItem[];
  removeProduct: (shopItem: ShopItem) => void;
  addProduct: (shopItem: ShopItem) => void;
  updateProduct: (shopItem: ShopItem) => void;
  filterProduct: (ShopItem: ShopItem) => void;
}

export const ProductContext = createContext<ProductContextValue>({
  products: [],
  startPageProducts: [],
  removeProduct: () => undefined,
  addProduct: () => undefined,
  updateProduct: () => undefined,
  filterProduct: () => undefined,
});

const ProductContextProvider: React.FC<ReactNode> = (props) => {
  let [products, setProducts] = useState(
    shopItems /* Antingen LS eller ShopItems */
  );

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

  console.log(startPageProducts);
  // const randomProduct = ShopItem[Math.floor(Math.random() * ShopItem.length)];
  // shopItems.filter(shopItem => shopItem.id).map(filteredProducts =>));

  const removeProduct = (shopItem: ShopItem) => {
    console.log(shopItem);
    let updatedlist = products.filter(
      (deletingshopItem) => shopItem.id !== deletingshopItem.id
    );
    setProducts(updatedlist);
  };
  const addProduct = (shopItem: ShopItem) => {};
  const updateProduct = (shopItem: ShopItem) => {};

  const filterProduct = (shopItem: ShopItem) => {
    // if (sortButton.value === "") {
    //   setProducts(products);
    // } else {
    //   setProducts(
    //     shopItems.filter((product) => sortButton.value === product.tag)
    //   ),[selectedTag];
    // }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        startPageProducts,
        removeProduct,
        addProduct,
        updateProduct,
        filterProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
