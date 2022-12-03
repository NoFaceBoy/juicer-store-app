import "./App.css";
import Header from "./elements/components/Header/Header.js";
import Main from "./elements/components/Main/Main.js";
import Catalog from "./elements/components/Catalog/Catalog.js";
import Footer from "./elements/components/Footer/Footer.js";
import ItemPage from "./elements/components/Item/ItemPage.js";
import Cart from "./elements/components/Cart/Cart.js";
import Checkout from "./elements/components/Checkout/Checkout.js";
import CheckoutSuccess from "./elements/components/Checkout/CheckoutSuccess/CheckoutSuccess.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<ItemPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/checkout" element={<Checkout />} />
          <Route path="/cart/checkout/success" element={<CheckoutSuccess />}/>
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
