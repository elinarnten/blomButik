import { createContext, ReactNode, useState } from "react";

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
  const [cardnumber, setCardnumber] = useState<string>("");
  const [validity, setValidity] = useState<string>("");
  const [cvc, setCvc] = useState<string>("");
  const [personalId, setPersonalId] = useState<string>("");

  //logs all consumer info and chosen delivery
  console.log(
    "consumer and delivery:",
    "förnamn:",
    firstname,
    "efternamn:",
    lastname,
    "telefon:",
    phoneNumber,
    "e-post:",
    email,
    "adress:",
    address,
    code,
    city,
    "leveransdatum:",
    deliveryDate,
    "leverantör:",
    deliveryOption
  );

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
        cardnumber,
        setCardnumber,
        validity,
        setValidity,
        cvc,
        setCvc,
        personalId,
        setPersonalId,
      }}
    >
      {children}
    </ConsumerContext.Provider>
  );
};

export default ConsumerContextProvider;
