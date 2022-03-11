import React from "react";

import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import StartPage from "./StartPage";
import About from "./About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import CardList from "./CardList";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
