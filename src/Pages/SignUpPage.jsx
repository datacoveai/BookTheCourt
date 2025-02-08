import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import bookthecourt from "../assets/book_the_court.png";
import { useAuthStore } from "../store/authUser";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { signup } = useAuthStore();

  const handleSignUp = (e) => {
    e.preventDefault();
    // console.log(email, username, password);
    signup({ email, username, password });
    navigate("/login");
  };

  return (
    <div className="h-screen w-full bg-black">
      <header className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link to={"/"}>
          <img src={bookthecourt} alt="logo" className="w-52" />
        </Link>
      </header>
      <div className="flex justify-center items-center mt-20 mx-3 ">
        <div className="w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md border-green-600 border border-opacity-25">
          <h1 className="text-center text-white text-2xl font-bold mb-4">
            Sign Up
          </h1>
          <form className="space-y-4" onSubmit={handleSignUp}>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-300 block"
              >
                Email
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 mt-2 border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                placeholder="you@example.com"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="username"
                className="text-sm font-medium text-gray-300 block"
              >
                Username
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 mt-2 border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                placeholder="johndoe"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-300 block"
              >
                Password
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 mt-2 border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring"
                placeholder="*********"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="w-full py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700">
              Sign Up
            </button>
          </form>
          <div className="text-center text-white">
            Already a member?{" "}
            <Link to={"/login"} className="text-green-500 hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
