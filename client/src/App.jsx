import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import VendorDetails from "./pages/VendorDetails";
import Home from "./pages/Home";
import AddVendor from "./pages/AddVendor";
import MyVendors from "./pages/MyVendors";
import EditVendor from "./pages/EditVendor";
import ProtectedRoute from "./components/ProtectedRoute";
import Favorites from "./pages/Favorites";
import Dashboard from "./pages/Dashboard";
import AIAssistant from "./pages/AIAssistant";
import ScrollToTop from "./components/ScrollToTop";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const hideFooter = [
  "/login",
  "/register",
  "/forgot-password",
];

const shouldHideFooter =
  hideFooter.includes(location.pathname) ||
  location.pathname.startsWith("/reset-password");
  return (
  <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white transition-colors duration-300">
    <ScrollToTop />
    <Navbar />

    <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/add-vendor"
          element={
            <ProtectedRoute>
              <AddVendor />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-vendors"
          element={
            <ProtectedRoute>
              <MyVendors />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit-vendor/:id"
          element={
            <ProtectedRoute>
              <EditVendor />
            </ProtectedRoute>
          }
        />
        <Route path="/vendor/:id" element={<VendorDetails />} />
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route
          path="/reset-password/:token"
          element={<ResetPassword />}
        />

        <Route path="/favorites" element={<Favorites />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/ai-assistant" element={<AIAssistant />} />

      </Routes>

    {!shouldHideFooter && <Footer />}

    <ToastContainer
      position="top-right"
      autoClose={3000}
      theme="colored"
    />
  </div>
);
}

export default App;