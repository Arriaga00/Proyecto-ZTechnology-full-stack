import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Order from "../pages/Order";
import Clients from "../pages/Clients";
import User from "../pages/User";
import Settings from "../pages/Settings";

const RouterMain = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/order" element={<Order />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/users" element={<User />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default RouterMain;
