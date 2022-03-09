import React from "react";

import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import StartPage from "./StartPage";
import CheckOut from "./CheckOut";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/varukorg" element={<CheckOut />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
