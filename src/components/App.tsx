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
import CheckOutStepOne from "./CheckOutStepOne";
import CheckOutStepTwo from "./CheckOutStepTwo";
import CheckOutStepThree from "./CheckOutStepThree";

function App() {
  return (
    <ContextProvider>
      <div>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/kunduppgifter" element={<CheckOutStepOne />} />
            <Route path="/betalning" element={<CheckOutStepThree />} />
            <Route path="/leverans" element={<CheckOutStepTwo />} />
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
