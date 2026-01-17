import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DonorLogin from "./pages/DonorLogin";
import NgoLogin from "./pages/NgoLogin";
import DonorDashboard from "./pages/DonorDashboard";
import NgoDashboard from "./pages/NgoDashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/donor-login" element={<DonorLogin />} />
      <Route path="/ngo-login" element={<NgoLogin />} />

      <Route path="/donor-dashboard" element={<DonorDashboard />} />
      <Route path="/ngo-dashboard" element={<NgoDashboard />} />
    </Routes>
  );
}
