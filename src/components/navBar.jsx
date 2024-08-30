import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import ShoppingCart from "./shopppingCart";
import { useLogout } from "../utils/authUtils";

const NavBar = ({ cartCount, cart, onRemoveFromCart, onLogout }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleToggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Early
          </h1>
          <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
            Gurung7 Footwear
          </p>
        </div>

        <div className="flex items-center space-x-6">
          <form
            className="flex items-center space-x-2 border border-gray-600 rounded-md p-1"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-900 text-white outline-none px-2 py-1 rounded-md"
            />
            <button
              type="submit"
              className="bg-gray-600 text-white p-2 rounded-md hover:bg-gray-500"
            >
              <FaSearch size="1.2em" />
            </button>
          </form>
          <div className="relative">
            <button
              onClick={handleToggleCart}
              className="flex items-center space-x-2 hover:text-gray-400"
            >
              <GrCart size="1.5em" />
              <span className="bg-red-600 text-white text-xs font-bold px-2 rounded-full">
                {cartCount}
              </span>
            </button>

            {isCartOpen && (
              <ShoppingCart
                cart={cart}
                onRemoveFromCart={onRemoveFromCart}
                onClose={handleCloseCart}
              />
            )}
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-64 p-3 shadow-lg"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/settings">Settings</Link>
              </li>
              <li>
                <button
                  onClick={onLogout}
                  className="text-red-600 hover:text-red-400"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <nav className="bg-gray-800 text-white p-2 mt-2">
        <div className="container mx-auto flex justify-start space-x-6">
          <Link to="/home" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/men" className="hover:text-gray-400">
            Men
          </Link>
          <Link to="/women" className="hover:text-gray-400">
            Women
          </Link>
          <Link to="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
