import { createContext, ReactNode, useState } from "react";

export const Context = createContext<any>(null);

const ContextProvider: React.FC<ReactNode> = ({ children }) => {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [deliveryOption, setDeliveryOption] = useState([{}]);

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
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
