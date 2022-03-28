import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { EndOfLineState, updateInterfaceDeclaration } from "typescript";
import AddProduct from "./components/AddProduct";
import Sortbuttons from "./components/Sortbuttons";
import SortbuttonsDOM from "./components/Sortbuttons";
import { ShopItem, shopItems } from "./data/ShopContent";
import { SortButton, sortButtonsData } from './data/SortButtonsData'
import { useLocalStorageState } from "./LocalStorage";

export interface ProductContextValue {
  add: ShopItem[];
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
  add: shopItems,
  removeProduct: () => undefined,
  addProduct: () => undefined,
  updateProduct: () => undefined,
  filterProduct: () => undefined,
});

const ProductContextProvider: React.FC<ReactNode> = ({children}) => {
   const [add, setAdd] = useState<ShopItem[]>(shopItems);
  let [products, setProducts] = useLocalStorageState<ShopItem[]>(shopItems,"items");
 


  const removeProduct = (shopItem: ShopItem) => {
    console.log(shopItem)
   let updatedlist = products.filter(deletingshopItem => shopItem.id !== deletingshopItem.id)
   setProducts(updatedlist)
  };


  const addProduct = (shopItem: ShopItem) => {
    console.log(shopItem)
    let copyProducts = [...products]
    let matchingIndex = copyProducts.findIndex(
      (item) => item.id == shopItem.id
      );
      if (matchingIndex == -1){
        copyProducts.push(shopItem)
      }
   setProducts(copyProducts)
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
    }
  
      let [startPageProducts, setStartPageProducts] = useState<ShopItem[]>(
      generateRandomProductList(products)
    );
    

  const updateProduct = (shopItem: ShopItem) => {
    console.log(shopItem)
    
    let update = [...products];
    let matchingIndex = update.findIndex(
      (item) => item == shopItem
    );
    if (matchingIndex == -1) {
     update.fill({...shopItem})
    }
   setProducts([...update,shopItem])
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
        add,
        products,
        startPageProducts,
        removeProduct,
        addProduct,
        updateProduct,
        filterProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
