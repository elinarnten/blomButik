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
import SlideIn from "./SlideIn";
import CartContextProvider from "../CartContext";

function App() {
  const [item, setItem] = useState(shopItems);
  let [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <ContextProvider>
      <CartContextProvider>
      <div>
        <Header setMenuOpen={setMenuOpen} />
        <BrowserRouter>
          <SlideIn menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/kunduppgifter" element={<CheckOutContact />} />
            <Route path="/betalning" element={<CheckOutPayment />} />
            <Route path="/leverans" element={<CheckOutDelivery />} />
            <Route path="/om" element={<About />} />
            <Route path="/sortiment" element={<CardList />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
      </CartContextProvider>
    </ContextProvider>
  );
}

export default App;
