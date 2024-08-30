import React, { useState } from "react";

const Settings = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [notifications, setNotifications] = useState(true);
  const [privacy, setPrivacy] = useState("public");

  const handleSaveChanges = () => {
    // Handle saving settings logic here
    console.log("Settings saved!");
  };

  return (
    <div className=" mx-auto p-4 min-h-screen bg-gray-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-600">
          Account Settings
        </h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Email</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Current Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md bg-amber-100"
            />
          </div>
        </div>

        <div className="mb-6 ">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Change Password
          </h3>
          <div className="mb-4">
            <label className="block text-gray-700 ">New Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md bg-amber-100"
            />
          </div>
          <div>
            <label className="block text-gray-700">Confirm New Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md bg-amber-100"
            />
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Notifications
          </h3>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-gray-700">
              Receive email notifications
            </span>
          </label>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Privacy Settings
          </h3>
          <div>
            <label className="block text-gray-700 mb-2">
              Profile Visibility
            </label>
            <select
              value={privacy}
              onChange={(e) => setPrivacy(e.target.value)}
              className="w-full p-2 border border-gray-600 rounded-md bg-amber-100"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="friends">Friends Only</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSaveChanges}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
