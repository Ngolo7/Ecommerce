import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";

const ShoppingCart = ({
  cart,
  onRemoveFromCart,
  onChangeQuantity,
  onClose,
}) => {
  const [totalItems, setTotalItems] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [updatedCart, setUpdatedCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Group items by their ID and aggregate quantities
    const groupedCart = cart.reduce((acc, item) => {
      const existingItem = acc.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity || 1;
      } else {
        acc.push({ ...item, quantity: item.quantity || 1 });
      }
      return acc;
    }, []);

    setUpdatedCart(groupedCart);
  }, [cart]);

  useEffect(() => {
    calculateTotals(updatedCart);
  }, [updatedCart]);

  const calculateTotals = (cart) => {
    const uniqueItems = cart.reduce((acc, item) => {
      const existingItem = acc.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity || 1;
      } else {
        acc.push({ ...item, quantity: item.quantity || 1 });
      }
      return acc;
    }, []);

    const itemsCount = uniqueItems.length; // Counts unique items in the cart
    const quantityCount = uniqueItems.reduce(
      (total, item) => total + item.quantity,
      0
    ); // Sums up the total quantity of all items

    setTotalItems(itemsCount);
    setTotalQuantity(quantityCount);
  };
  const handleCheckout = () => {
    const trackingCode = Math.random()
      .toString(36)
      .substring(2, 15)
      .toUpperCase(); // Generate a random tracking code
    alert(`Checkout successful!!!!!
      Your tracking code is: ${trackingCode}`);
    // Clear cart or redirect after successful checkout
    navigate("/");
  };

  const handleQuantityChange = (item, change) => {
    const updatedCartCopy = updatedCart
      .map((cartItem) => {
        if (cartItem.id === item.id) {
          const updatedQuantity =
            change === "increase"
              ? (cartItem.quantity || 1) + 1
              : (cartItem.quantity || 1) - 1;

          return updatedQuantity > 0
            ? { ...cartItem, quantity: updatedQuantity }
            : null; // Return null to indicate item removal
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem !== null); // Filter out any null values (i.e., removed items)

    setUpdatedCart(updatedCartCopy);
    onChangeQuantity(
      item,
      updatedCartCopy.find((cartItem) => cartItem.id === item.id)?.quantity || 0
    );
  };

  // Calculate the total price for an item
  const getItemTotalPrice = (item) => {
    const price = parseFloat(item.base_price); // Use base_price field
    if (isNaN(price)) {
      console.error(`Invalid price for item ${item.title}: ${item.base_price}`);
      return "0.00";
    }
    return (price * (item.quantity || 1)).toFixed(2);
  };

  // Calculate the total price of all items in the cart
  const getTotalPrice = () => {
    const total = updatedCart
      .reduce((total, item) => {
        const itemPrice = parseFloat(item.base_price);
        if (isNaN(itemPrice)) {
          console.error(
            `Invalid price for item ${item.title}: ${item.base_price}`
          );
          return total;
        }
        return total + itemPrice * (item.quantity || 1);
      }, 0)
      .toFixed(2);

    return total;
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-4xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-md text-xl"
        >
          Close
        </button>
        <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
        {updatedCart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="max-h-[60vh] overflow-y-auto">
            {" "}
            {updatedCart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b py-4"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-md mr-6"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-600 ">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Quantity: {item.quantity || 1}
                    </p>
                    <p className="text-gray-600 text-lg">
                      Price: ${getItemTotalPrice(item)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleQuantityChange(item, "decrease")}
                    className="text-gray-600 hover:text-gray-400 text-xl"
                  >
                    <FaMinus />
                  </button>
                  <span className="mx-4 text-xl">{item.quantity || 1}</span>
                  <button
                    onClick={() => handleQuantityChange(item, "increase")}
                    className="text-gray-600 hover:text-gray-400 text-xl"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-6">
              <p className="text-xl text-gray-600">Total Items: {totalItems}</p>
              <p className="text-xl text-gray-600">
                Total Quantity: {totalQuantity}
              </p>
            </div>
            <div className="mt-6">
              <p className="text-2xl font-semibold text-gray-600">
                Total Amount: ${getTotalPrice()}
              </p>
            </div>
            <div className="mt-6 flex justify-center">
              <button
                onClick={handleCheckout}
                className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-400 text-xl"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
