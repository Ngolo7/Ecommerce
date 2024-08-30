import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import HomePage from "./pages/home";
import MensProductList from "./components/mensProductList";
import WomensProductList from "./components/womensProductList";
import AboutPage from "./pages/aboutPage";
import ContactPage from "./pages/contact";
import NotFoundPage from "./pages/notFoundPage";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import NavBar from "./components/navBar";
import Profile from "./pages/profile";
import Settings from "./pages/setting";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // Load authentication state from localStorage when the app loads
  useEffect(() => {
    const authState = localStorage.getItem("isAuthenticated");
    if (authState === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleRemoveFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };

  const handleSignIn = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
    navigate("/home"); // Navigate to the home page after sign-in
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    navigate("/signin"); // Navigate to the SignIn page after logout
  };

  return (
    <>
      {isAuthenticated && (
        <NavBar
          isAuthenticated={isAuthenticated}
          cartCount={cart.length}
          cart={cart}
          onRemoveFromCart={handleRemoveFromCart}
          onLogout={handleLogout}
        />
      )}
      <Routes>
        <Route
          path="/home"
          element={<HomePage onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/men"
          element={<MensProductList onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/women"
          element={<WomensProductList onAddToCart={handleAddToCart} />}
        />
        <Route path="/signin" element={<SignIn onSignIn={handleSignIn} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
