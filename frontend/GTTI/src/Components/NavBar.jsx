import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft, FaSignOutAlt, FaWarehouse } from "react-icons/fa";

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const user = {
    name: "JustIce",
    role: "Food Manager",
    avatar: "https://i.pravatar.cc/150?img=12",
  };

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
      default:
        return "GTTI System";
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  return (
    <nav className="w-full sticky top-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/10 text-white px-6 py-3 flex items-center justify-between shadow-xl">

      {/* 🏷️ LEFT TITLE */}
      <div className="flex items-center gap-3">
        <FaWarehouse className="text-green-400 text-xl" />

        <h1 className="text-xl md:text-2xl font-bold tracking-wide">
          {getTitle()}
        </h1>
      </div>

      {/* 👤 CENTER PROFILE */}
      <div className="hidden md:flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full border border-white/10">
        <img
          src={user.avatar}
          alt="profile"
          className="w-9 h-9 rounded-full border-2 border-green-400"
        />

        <div className="leading-tight">
          <p className="text-sm font-semibold">{user.name}</p>
          <p className="text-xs text-gray-300">{user.role}</p>
        </div>
      </div>

      {/* 🎮 ACTIONS */}
      <div className="flex items-center gap-3">

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition"
        >
          <FaArrowLeft />
          Back
        </button>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 transition shadow-lg"
        >
          <FaSignOutAlt />
          Sign Out
        </button>

      </div>
    </nav>
  );
}

export default NavBar;