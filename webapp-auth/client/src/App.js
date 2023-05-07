import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { Container } from "reactstrap";
import Home from "./components/Home";
import Registration from "./components/Registration";
import Logout from "./components/Logout";
import { ToastContainer } from "react-toastify";
import ProductView from "./components/ProductView";

function App() {
  return (
    <Container>
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
    </Container>
  );
}

export default App;