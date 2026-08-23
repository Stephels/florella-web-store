import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import LandingPage from "./Components/LandingPage";
import Products from "./Components/Products"; // Fixed case-sensitive import
import Cart from "./Components/Cart"; // Fixed case-sensitive import
import About from "./Components/About";
import Contact from "./Components/Contact";
import Register from "./Components/Register";
import Login from "./Components/Login";

function App() {
  return (
    <>
      <Header /> {/* Render the header component here */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
