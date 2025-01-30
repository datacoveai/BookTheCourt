// import { Navbar, Footer } from "./components";
import Business from "./Pages/Business";
import LandingPage from "./Pages/LandingPage";
import { Route, Routes, useLocation } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/business" element={<Business />} />
      </Routes>
    </div>
  );
};

export default App;
