import { createContext, useState } from "react";

export const Context = createContext<any>(null);

const ContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  return (
    <Context.Provider
      value={{
        firstname,
        setFirstname,
        lastname,
        setLastname,
        phoneNumber,
        setPhoneNumber,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
