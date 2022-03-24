import React, { createContext, ReactNode, useState } from "react";
import { ShopItem } from "./data/ShopContent";

export interface ContextInterface {
  cardList: ShopItem[];
  setCardList: React.Dispatch<React.SetStateAction<ShopItem[]>>;
}

export const CardRandomContext = createContext<ContextInterface>({
  cardList: [],
  setCardList: () => undefined,
});

const CardRandomContextProvider: React.FC<ReactNode> = ({ children }) => {
  const [cardList, setCardList] = useState<ShopItem[]>([]);

  return (
    <CardRandomContext.Provider
      value={{
        cardList,
        setCardList,
      }}
    >
      {children}
    </CardRandomContext.Provider>
  );
};
export default CardRandomContextProvider;
