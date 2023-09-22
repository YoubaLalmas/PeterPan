import React, { useState } from "react";
import { users } from "../account/UserProfile";

const LoginModal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const enteredUsername = formData.username;
    const enteredPassword = formData.password;

    const user = users.find(
      (user) =>
        user.username === enteredUsername && user.password === enteredPassword
    );

    if (user) {
      // User is authenticated, perform login action (e.g., set a logged-in state)
      localStorage.setItem("user", JSON.stringify(formData));
      onSubmit(formData);
      onClose();
    } else {
      // Authentication failed, display error message
      alert("Invalid username or password");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md shadow-lg">
        <h2 className="text-2xl mb-4 font-bold">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2 text-gray-700">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Login
            </button>
          </div>
        </form>
        <button onClick={onClose} className="mt-4 text-sm text-gray-600">
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
