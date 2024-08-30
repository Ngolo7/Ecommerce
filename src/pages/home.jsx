import React from "react";
import { useSearchSneakersQuery } from "../api/sneakerAllApi";

const HomePage = ({ onAddToCart }) => {
  const { data, error, isLoading } = useSearchSneakersQuery("all");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const filteredProducts = data?.hits || [];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">All Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={product.image || "default-image-url-here"}
              alt={product.title}
              className="w-full h-48 object-cover "
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-black">
                {product.title}
              </h3>
              <p className="text-gray-600">${product.base_price}</p>
              <div className="flex justify-center items-center mt-2">
                <button
                  onClick={() => onAddToCart(product)}
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
