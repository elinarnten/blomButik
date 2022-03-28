import { createContext, ReactNode, useState } from "react";
import { ShopItem } from "./data/ShopContent";

/* export interface ConsumerInterface {
  firstname: string,
  lastname: string,
  phoneNumber: string,
  deliveryOption: object,
  deliveryDate: string, 
    
} */

export const ConsumerContext = createContext<any>(null);

const ConsumerContextProvider: React.FC<ReactNode> = ({ children }) => {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [deliveryOption, setDeliveryOption] = useState([{}]);
  const [deliveryDate, setDeliveryDate] = useState<string>("");

  console.log(firstname, lastname, phoneNumber, email, address, code, city, deliveryDate, deliveryOption)

  return (
    <ConsumerContext.Provider
      value={{
        firstname,
        setFirstname,
        lastname,
        setLastname,
        phoneNumber,
        setPhoneNumber,
        email,
        setEmail,
        address,
        setAddress,
        code,
        setCode,
        city,
        setCity,
        deliveryOption,
        setDeliveryOption,
        deliveryDate,
        setDeliveryDate,
      }}
    >
      {children}
    </ConsumerContext.Provider>
  );
};

export default ConsumerContextProvider;