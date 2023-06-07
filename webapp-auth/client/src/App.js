import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { Container } from "reactstrap";
import Home from "./components/Home";
import CustomNav from "./components/CustomNav";
import Registration from "./components/Registration";
import Logout from "./components/Logout";
import { ToastContainer } from "react-toastify";
import ProductView from "./components/ProductView";
import { InventoryProvider } from "./components/InventoryContext";

function App() {
  return (
      <Container>
        <CustomNav />
        <InventoryProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/product-details/:id" element={<ProductView />} />
          </Routes>
          <ToastContainer />
        </BrowserRouter>
        </InventoryProvider>
        <ToastContainer />
      </Container>
  );
}

export default App;
