import React from "react";
import { Context } from "../Context";
import { useState } from "react";
import ContextProvider from "../Context";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";
import CardList from "./CardList";
import StartPage from "./StartPage";
import About from "./About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckOutContact from "./CheckOutContact";
import CheckOutDelivery from "./CheckOutDelivery";
import CheckOutPayment from "./CheckOutPayment";
import { shopItems } from "../data/ShopContent";
import Admin from "./Admin";
import DeleteButton from "./buttonDeleteItem";
import SlideIn from "./SlideIn";
import ProductContextProvider from "../productContext";
import CartContextProvider from "../CartContext";


function App() {
  const [item, setItem] = useState(shopItems);

  //Menuopen checker (cart menu slideIn)
  let [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <ProductContextProvider>
      <CartContextProvider>
      <ContextProvider>
        <div>
          <Header setMenuOpen={setMenuOpen} />
          <BrowserRouter>
            <SlideIn menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Routes>
              <Route path="/" element={<StartPage />} />
              <Route path="/kunduppgifter" element={<CheckOutContact />} />
              <Route path="/Admin" element={<Admin hideShow={true} />} />
              <Route path="/betalning" element={<CheckOutPayment />} />
              <Route path="/leverans" element={<CheckOutDelivery />} />
              <Route path="/om" element={<About />} />
              <Route
                path="/sortiment"
                element={<CardList hideShow={false} />}
              />
              <Route path="/kontakt" element={<Contact />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </div>
      </ContextProvider>
        </CartContextProvider>
    </ProductContextProvider>
    )
}
export default App;
