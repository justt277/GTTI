import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaArrowLeft, FaSignOutAlt, FaWarehouse, FaChevronDown } from "react-icons/fa";

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  // 👤 GET USER FROM LOCALSTORAGE
  const manager = JSON.parse(localStorage.getItem("manager")) || {};

  const getTitle = () => {
    switch (location.pathname) {
      case "/dashboard":
        return "Dashboard";
      case "/Food":
        return "Food Management";
      case "/Import":
        return "Import System";
      case "/Export":
        return "Export System";
      case "/Report":
        return "Reports";
      case "/manager":
        return "Manager Profile";
      default:
        return "GTTI System";
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("manager"); 
    navigate("/", { replace: true });
  };

  return (
    <nav className="w-full sticky top-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/10 text-white px-6 py-3 flex items-center justify-between">

      {/* TITLE */}
      <div className="flex items-center gap-3">
        <FaWarehouse className="text-green-400" />
        <h1 className="text-xl font-bold">{getTitle()}</h1>
      </div>

      {/* PROFILE */}
      <div className="relative">

        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full"
        >
          <img
            src="https://i.pravatar.cc/150?img=12"
            className="w-9 h-9 rounded-full border-2 border-green-400"
          />

          <div className="hidden md:block text-left">
            <p className="text-sm font-semibold">
              {manager?.username || "Guest"}
            </p>
            <p className="text-xs text-gray-300">
              {manager?.role || "No Role"}
            </p>
          </div>

          <FaChevronDown />
        </button>

        {/* DROPDOWN */}
        {open && (
          <div className="absolute right-0 mt-3 w-72 bg-gray-900 border border-white/10 rounded-2xl shadow-xl">

            <div className="p-4 border-b border-white/10">
              <p className="font-bold">{manager?.username}</p>
              <p className="text-xs text-gray-400">emmadi750@gmail.com</p>
              <p className="text-xs text-gray-400">0792724949</p>
              <p className="text-green-400 text-xs mt-1">{manager?.role}</p>
            </div>

            <button
              onClick={() => navigate("/manager")}
              className="w-full text-left px-4 py-3 hover:bg-white/10"
            >
              View Manager Profile
            </button>

            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-3 hover:bg-red-600/30 text-red-400"
            >
              <FaSignOutAlt className="inline mr-2" />
              Sign Out
            </button>

          </div>
        )}

      </div>
    </nav>
  );
}

export default NavBar;