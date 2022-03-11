import React from "react";
import { Context } from "../Context";
import { useState } from "react";
import ContextProvider from "../Context";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import StartPage from "./StartPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckOutStepOne from "./CheckOutStepOne";
import CheckOutStepTwo from "./CheckOutStepTwo";

function App() {
  return (
    <ContextProvider>
      <div>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/kunduppgifter" element={<CheckOutStepOne />} />
            <Route path="/betalning" element={<CheckOutStepTwo />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </ContextProvider>
  );
}

export default App;
