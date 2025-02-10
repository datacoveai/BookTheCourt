// import { Navbar, Footer } from "./components";
import Business from "./Pages/Business";
import LandingPage from "./Pages/LandingPage";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authUser";
import { useEffect } from "react";
import { Loader } from "lucide-react";

const App = () => {
  const { user, isCheckingAuth, authCheck } = useAuthStore();

  // console.log("auth user is here : ", user);
  useEffect(() => {
    authCheck();
  }, [authCheck]);

  if (isCheckingAuth) {
    return (
      <div className="h-screen">
        <div className="flex justify-center items-center bg-black h-full">
          <Loader className="animate-spin text-red-600 w-10 h-10" />
        </div>
      </div>
    );
  }
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={user ? <LandingPage /> : <Navigate to="/signup" />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <SignUpPage />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route
          path="/business"
          element={user ? <Business /> : <Navigate to="/signup" />}
        />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
