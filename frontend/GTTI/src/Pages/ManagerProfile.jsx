import NavBar from "../Components/NavBar.jsx";
import { FaUserShield, FaEnvelope, FaPhone, FaMapMarkerAlt, FaUsersCog } from "react-icons/fa";

function ManagerProfile() {

  const manager = JSON.parse(localStorage.getItem("manager")) || {};

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black text-white">

      <NavBar />

      <div className="p-8 max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl">

          <div className="flex items-center gap-6">

            <img
              src="https://i.pravatar.cc/150?img=12"
              className="w-28 h-28 rounded-full border-4 border-green-400 shadow-lg"
            />

            <div>
              <h1 className="text-3xl font-bold flex items-center gap-2">
                <FaUserShield className="text-green-400" />
                {manager.username}
              </h1>

              <p className="text-gray-300 mt-1">{manager.role}</p>
            </div>

          </div>

        </div>

        {/* DETAILS GRID */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <FaEnvelope /> Email
            </h2>
            <p className="text-gray-300 mt-2">emmadi750@gmail.com</p>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <FaPhone /> Phone
            </h2>
            <p className="text-gray-300 mt-2">0792724949</p>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <FaMapMarkerAlt /> Address
            </h2>
            <p className="text-gray-300 mt-2">Kigali,Rwanda</p>
          </div>

          <div className="bg-linear-to-r from-green-600 via-emerald-600 to-lime-600 p-6 rounded-2xl shadow-xl">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <FaUsersCog /> Admin Controls
            </h2>

            <p className="text-white/90 mt-2 text-sm">
              As administrator, you can manage foods, imports, exports,
              users and system reports.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ManagerProfile;