import { useState } from "react";
import ConsumerContextProvider from "../contexts/ConsumerContext";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";
import CardList from "./Product/CardList";
import StartPage from "./StartPage";
import About from "./About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckOutContact from "./Checkout/CheckOutContact";
import CheckOutDelivery from "./Checkout/CheckOutDelivery";
import CheckOutPayment from "./Checkout/CheckOutPayment";
import OrderConfirmation from "./Checkout/OrderConfirmation";
import Admin from "./Admin/Admin";
import SlideIn from "./Product/SlideIn";
import ProductContextProvider from "../contexts/productContext";
import CartContextProvider from "../contexts/CartContext";
import ProductModal from "./Product/ProductModal";
import { shopItems } from '../data/ShopContent'


function App() {
  //Menuopen checker (cart menu slideIn)
  let [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <ProductContextProvider>
      <CartContextProvider>
        <ConsumerContextProvider>
          <Header setMenuOpen={setMenuOpen} />
          <BrowserRouter>
            <SlideIn menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="App">
              <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/kontakt" element={<Contact />} />
                <Route path="/kunduppgifter" element={<CheckOutContact />} />
                <Route path="/Admin" element={<Admin hideShow={true} />} />
                <Route path="/betalning" element={<CheckOutPayment />} />
                <Route path="/leverans" element={<CheckOutDelivery />} />
                <Route path="/om" element={<About />} />
                <Route
                  path="/orderbekraftelse"
                  element={<OrderConfirmation />}
                />
                <Route
                  path="/sortiment"
                  element={<CardList hideShow={false} />}
                />
               <Route path="/sortiment/:title" element={<ProductModal product={shopItems}/> } />
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </ConsumerContextProvider>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
