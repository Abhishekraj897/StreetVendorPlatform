import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FiHome,
  FiPlusCircle,
  FiHeart,
  FiGrid,
  FiUser,
  FiLogOut,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { FaRobot } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <div className="w-11 h-11 rounded-xl bg-orange-500 text-white flex items-center justify-center text-xl shadow-md">
            🍜
          </div>

          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-orange-500">
              StreetVendor
            </h1>

            <p className="text-xs text-gray-500">
              Discover Local Food
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <ul className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 transition ${isActive
                  ? "text-orange-500 font-semibold"
                  : "hover:text-orange-500"
                }`
              }
            >
              <FiHome />
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/add-vendor"
              className={({ isActive }) =>
                `flex items-center gap-2 transition ${isActive
                  ? "text-orange-500 font-semibold"
                  : "hover:text-orange-500"
                }`
              }
            >
              <FiPlusCircle />
              Add Vendor
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/my-vendors"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold"
                  : "hover:text-orange-500"
              }
            >
              My Vendors
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `flex items-center gap-2 transition ${isActive
                  ? "text-orange-500 font-semibold"
                  : "hover:text-orange-500"
                }`
              }
            >
              <FiHeart />
              Favorites
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-2 transition ${isActive
                  ? "text-orange-500 font-semibold"
                  : "hover:text-orange-500"
                }`
              }
            >
              <FiGrid />
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/ai-assistant"
              className={({ isActive }) =>
                `flex items-center gap-2 transition ${isActive
                  ? "text-orange-500 font-semibold"
                  : "hover:text-orange-500"
                }`
              }
            >
              <FaRobot />
              AI Assistant
            </NavLink>
          </li>

        </ul>

        {/* User Section */}
        <div className="hidden lg:flex items-center gap-4">
          {user ? (
            <>
              <div className="flex items-center gap-3 bg-orange-50 px-4 py-2 rounded-xl">

                <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center">
                  <FiUser />
                </div>

                <div>
                  <p className="font-semibold">
                    {user.name}
                  </p>

                  <p className="text-xs text-gray-500">
                    Welcome Back
                  </p>
                </div>

              </div>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl"
              >
                <FiLogOut />
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-xl">
                Login
              </button>
            </Link>
          )}
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl text-orange-500"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-white border-t shadow-xl">
          <div className="flex flex-col p-6">

            {/* User Info */}
            {user && (
              <div className="flex items-center gap-3 border-b pb-5 mb-5">
                <div className="w-11 h-11 rounded-full bg-orange-500 text-white flex items-center justify-center text-lg">
                  <FiUser />
                </div>

                <div>
                  <p className="font-semibold text-gray-800">{user.name}</p>
                  <p className="text-sm text-gray-500">
                    Welcome Back 👋
                  </p>
                </div>
              </div>
            )}

            {/* Home */}
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition ${isActive
                  ? "bg-orange-100 text-orange-500 font-semibold"
                  : "hover:bg-orange-50"
                }`
              }
            >
              <FiHome />
              Home
            </NavLink>

            {/* Add Vendor */}
            <NavLink
              to="/add-vendor"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition ${isActive
                  ? "bg-orange-100 text-orange-500 font-semibold"
                  : "hover:bg-orange-50"
                }`
              }
            >
              <FiPlusCircle />
              Add Vendor
            </NavLink>

            {/* My Vendors */}
            <NavLink
              to="/my-vendors"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition ${isActive
                  ? "bg-orange-100 text-orange-500 font-semibold"
                  : "hover:bg-orange-50"
                }`
              }
            >
              <FiGrid />
              My Vendors
            </NavLink>

            {/* Favorites */}
            <NavLink
              to="/favorites"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition ${isActive
                  ? "bg-orange-100 text-orange-500 font-semibold"
                  : "hover:bg-orange-50"
                }`
              }
            >
              <FiHeart />
              Favorites
            </NavLink>

            {/* Dashboard */}
            <NavLink
              to="/dashboard"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition ${isActive
                  ? "bg-orange-100 text-orange-500 font-semibold"
                  : "hover:bg-orange-50"
                }`
              }
            >
              <FiGrid />
              Dashboard
            </NavLink>

            {/* AI Assistant */}
            <NavLink
              to="/ai-assistant"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition ${isActive
                  ? "bg-orange-100 text-orange-500 font-semibold"
                  : "hover:bg-orange-50"
                }`
              }
            >
              <FaRobot />
              AI Assistant
            </NavLink>

            {/* Login / Register / Logout */}
            <div className="border-t mt-5 pt-5">

              {user ? (
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    handleLogout();
                  }}
                  className="w-full bg-red-500 hover:bg-red-600 text-white rounded-xl py-3 flex items-center justify-center gap-2"
                >
                  <FiLogOut />
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                  >
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-3">
                      Login
                    </button>
                  </Link>

                  <Link
                    to="/register"
                    onClick={() => setMenuOpen(false)}
                  >
                    <button className="w-full mt-3 border border-orange-500 text-orange-500 rounded-xl py-3 hover:bg-orange-50">
                      Register
                    </button>
                  </Link>
                </>
              )}

            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;