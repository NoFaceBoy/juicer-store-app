import "./App.css";
import Header from "./elements/components/Header/Header.js";
import Main from "./elements/components/Main/Main.js";
import Catalog from "./elements/components/Catalog/Catalog.js";
import Footer from "./elements/components/Footer/Footer.js";
import ItemPage from "./elements/components/Item/ItemPage.js";
import Cart from "./elements/components/Cart/Cart.js";
import Checkout from "./elements/components/Checkout/Checkout.js";
import CheckoutSuccess from "./elements/components/Checkout/CheckoutSuccess/CheckoutSuccess.js";
import Login from "./elements/components/Login/Login.js";
import SignUp from "./elements/components/SignUp/SignUp.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const loggedUser = localStorage.getItem('loggedUser');
  return (
    <BrowserRouter>
    {loggedUser !== 'null' ? <Header/> : null}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/" element={loggedUser !== 'null' ? <Main /> : <Login />} />
          <Route path="/catalog" element={loggedUser !== 'null' ? <Catalog /> : null} />
          <Route path="/catalog/:id" element={loggedUser !== 'null' ? <ItemPage /> : null} />
          <Route path="/cart" element={loggedUser !== 'null' ? <Cart /> : null} />
          <Route path="/cart/checkout" element={loggedUser !== 'null' ? <Checkout /> : null} />
          <Route path="/cart/checkout/success" element={loggedUser !== 'null' ? <CheckoutSuccess /> : null} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
