import React, { useEffect } from "react";
import { useSearchSneakersQuery } from "../api/sneakerAllApi";

const ProductList = ({ gender, title, onAddToCart }) => {
  const { data, error, isLoading } = useSearchSneakersQuery("all");

  // Filter products based on gender
  const filteredProducts =
    data?.hits?.filter((product) => {
      if (gender === "all") {
        return true;
      } else if (gender === "men") {
        return product.gender === "men" || product.gender === "unisex";
      } else if (gender === "women") {
        return product.gender === "women" || product.gender === "unisex";
      }
      return false;
    }) || [];

  // Log the filtered products for debugging
  useEffect(() => {
    console.log(`${title} Products:`, filteredProducts);
  }, [filteredProducts, title]);

  const handleAddToCart = (product) => {
    console.log(`${product.title} added to cart`);
    // Implement your cart logic here
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (filteredProducts.length === 0) {
    return <div className="container mx-auto p-4">No products found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden shadow-lg bg-white"
          >
            <img
              src={product.image || "https://via.placeholder.com/150"} // Use a default image if `image` is undefined
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-black">
                {product.title}
              </h3>
              <p className="text-gray-600">${product.base_price}</p>
              <div className="flex justify-center items-center mt-2">
                <button
                  onClick={() => {
                    console.log(`${product.title} added to cart`);
                    onAddToCart(product);
                  }}
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

export default ProductList;
