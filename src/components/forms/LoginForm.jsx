import React, { useState } from "react";

function LoginForm() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  console.log(formData);
  const handleChange = (e) =>
    setFormData((currentData) => ({
      ...currentData,
      [e.target.name]: e.target.value,
    }));
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
      console.log(`Logged in as ${user.username}`);
    } else {
      // Authentication failed, display error message
      console.log("Invalid username or password");
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 w-screen flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  value={formData.username}
                  onChange={handleChange}
                  id="username"
                  name="username"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  value={formData.username}
                  onChange={handleChange}
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={(e) => handleLogin(e)}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
