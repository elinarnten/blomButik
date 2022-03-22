import { createContext, ReactNode, useState } from "react";
import { ShopItem } from "./data/ShopContent";

/* export interface ContextInterface {
  firstname: string,
  lastname: string,
  phoneNumber: string,
  deliveryOption: object,
  deliveryDate: string, 
  itemInCart: ShopItem[],  
} */

export const Context = createContext<any>(null);

const ContextProvider: React.FC<ReactNode> = ({ children }) => {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [deliveryOption, setDeliveryOption] = useState([{}]);
  const [deliveryDate, setDeliveryDate] = useState<string>("");
  const [itemInCart, setItemInCart] = useState<ShopItem[]>()

  return (
    <Context.Provider
      value={{
        firstname,
        setFirstname,
        lastname,
        setLastname,
        phoneNumber,
        setPhoneNumber,
        deliveryOption,
        setDeliveryOption,
        deliveryDate,
        setDeliveryDate,
        itemInCart,
        setItemInCart
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
