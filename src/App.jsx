// import { Navbar, Footer } from "./components";
import Business from "./Pages/Business";
import LandingPage from "./Pages/LandingPage";
import { Route, Routes, useLocation } from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/business" element={<Business />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
