import React, { useState } from "react";
import { Link } from "react-router-dom";
import bookthecourt from "../assets/book_the_court.png";
import { useAuthStore } from "../store/authUser";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuthStore();

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(email, password);
    login({ email, password });
    navigate("/");
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
            Sign In
          </h1>
          <form className="space-y-4" onSubmit={handleLogin}>
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
              Sign In
            </button>
          </form>
          <div className="text-center text-white">
            Don't you have an account?{" "}
            <Link to={"/signup"} className="text-green-500 hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
