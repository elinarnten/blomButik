import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import AddProduct from "./components/AddProduct";
import Sortbuttons from "./components/Sortbuttons";
import SortbuttonsDOM from "./components/Sortbuttons";
import { ShopItem, shopItems } from "./data/ShopContent";
import { SortButton, sortButtonsData } from './data/SortButtonsData'
interface ProductContextValue {
  products: ShopItem[];
  removeProduct: (shopItem: ShopItem) => void;
  addProduct: (shopItem: ShopItem) => void;
  updateProduct: (shopItem: ShopItem) => void;
  filterProduct: (ShopItem: ShopItem) => void;
}

export const ProductContext = createContext<ProductContextValue>({
  products: [],
  removeProduct: () => undefined,
  addProduct: () => undefined,
  updateProduct: () => undefined,
  filterProduct: () => undefined
  
 
  
});

const ProductContextProvider: React.FC<ReactNode> = (props) => {
  let [products, setProducts] = useState(
      shopItems /* Antingen LS eller ShopItems */
  );

  const removeProduct = (shopItem: ShopItem) => {
    console.log(shopItem)
   let updatedlist = products.filter(deletingshopItem => shopItem.id !== deletingshopItem.id)
   setProducts(updatedlist)
   
  };
  const addProduct = (shopItem: ShopItem) => {
    
  };
  const updateProduct = (shopItem: ShopItem) => {


  };

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
