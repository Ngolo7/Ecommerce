import React from "react";

const Profile = () => {
  // Dummy data for demonstration purposes
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    address: "123 Main St, San Francisco, CA",
  };

  return (
    <div className=" mx-auto p-4 min-h-screen bg-gray-400">
      <div className="bg-gray-300 p-8 rounded-lg shadow-lg max-w-2xl mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          My Profile
        </h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700">
            Personal Information
          </h3>
          <p className="text-gray-600">Name: {user.name}</p>
          <p className="text-gray-600">Email: {user.email}</p>
          <p className="text-gray-600">Address: {user.address}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
