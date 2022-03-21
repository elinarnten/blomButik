import React from "react";
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

function App() {
  const [item, setItem] = useState(shopItems);

  //SlideIn checker
  let [menuOpen, setMenuOpen] = useState<boolean>(false);

  //To remove item
  // const onRemove = (item) => {
  //   const exist = item.find;
  // };

  //To add item
  // const onAdd = (item) => {
  //   const exist = item.find;
  // };
  return (
    <ContextProvider>
      <div>
        <Header setMenuOpen={setMenuOpen} />
        <BrowserRouter>
          <SlideIn
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            // shopItems={shopItems}
            item={item}
            setItem={setItem}
          />
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
    </ContextProvider>
  );
}

export default App;
