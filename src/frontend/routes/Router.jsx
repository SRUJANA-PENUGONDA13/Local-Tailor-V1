import { Routes, Route } from "react-router-dom";
import { Home, Signin, Signup, Products, Wishlist, Cart } from "../pages/index";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route exact path="/signin" element={<Signin />}></Route>
      <Route exact path="/signup" element={<Signup />}></Route>
      <Route exact path="/products" element={<Products />}></Route>
      <Route exact path="/wishlist" element={<Wishlist />}></Route>
      <Route exact path="/cart" element={<Cart />}></Route>
    </Routes>
  );
};

export { Router };
