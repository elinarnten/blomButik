import React from "react";

import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import StartPage from "./StartPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckOutStepOne from "./CheckOutStepOne";
import CheckOutStepTwo from "./CheckOutStepTwo";

function App() {
  return (
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
  );
}

export default App;
