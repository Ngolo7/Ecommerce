import React from "react";
import { useGetSneakerByIdQuery } from "../api/sneakerAllApi";

const SneakerDetail = ({ sneakerId }) => {
  const { data: sneaker, error, isLoading } = useGetSneakerByIdQuery(sneakerId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading sneaker: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{sneaker.name}</h2>
      <img
        src={sneaker.image_url}
        alt={sneaker.name}
        className="w-full h-64 object-cover mb-4"
      />
      <p>
        <strong>Brand:</strong> {sneaker.brand}
      </p>
      <p>
        <strong>Release Date:</strong> {sneaker.release_date}
      </p>
      <p>
        <strong>Price:</strong> {sneaker.price}
      </p>
      <p>
        <strong>Description:</strong> {sneaker.description}
      </p>
    </div>
  );
};

export default SneakerDetail;
