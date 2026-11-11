import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/Services";
import Contact from "./pages/contact";
import ContactList from "./pages/ContactList";

function App() {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  });

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((item, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <Router>
      <Navbar cart={cart} removeFromCart={removeFromCart} />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/services"
            element={<Services addToCart={addToCart} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-list" element={<ContactList />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
