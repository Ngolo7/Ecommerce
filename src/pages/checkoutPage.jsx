import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cart, setCart] = useState(location.state?.cart || []);

  const handleRemove = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const handleCheckout = () => {
    // Handle the checkout process here
    alert("Proceeding to checkout...");
    navigate("/");
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="border p-4 mb-4 rounded-lg">
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">{item.price}</p>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="ml-auto bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-400"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button
            onClick={handleCheckout}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-400"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
