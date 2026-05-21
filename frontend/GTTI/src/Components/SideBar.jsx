import { Link } from "react-router-dom";
import { FaChartBar, FaHamburger, FaSignOutAlt } from "react-icons/fa";

function SideBar () {
    return(
        <div>
        <div className="h-screen w-64 bg-gray-900 text-white flex flex-col  p-5">
            <h2 className="text-amber-500 font-bold mb-4 flex justify-center">GTTI</h2>
            <nav className="flex flex-col gap-3 ">
                <Link to="/Food" className="flex items-center gap-4 rounded-xl hover:bg-white/10 transition-all duration-300 p-3">Foods</Link>
                <Link to="/Import" className="flex items-center  gap-4 rounded-xl hover:bg-white/10 transition-all duration-300 p-3">Imports</Link>
                <Link to="/Export" className="flex items-center gap-4 rounded-xl hover:bg-white/10 transition-all duration-300 p-3">Export</Link>
                <Link to="/Report" className="flex items-center gap-4 rounded-xl hover:bg-white/10 transition-all duration-300 p-3">Report</Link>
                <Link to="/" className="flex items-center gap-4 rounded-xl hover:bg-white/10 transition-all duration-300 p-3"><FaSignOutAlt/>Logout</Link>
            </nav>
        </div>
        <div className="border-t border-white/10 p-5">
            <div className="flex items-center gap-4 mb-5">
                <img
                 src="https://i.pravatar.cc/50000"
                  alt="profile" 
                  className="w-12 h-12 rounded-full object-cover" />
            </div>
            <div>
                <h2 className="font-semibold">Justice</h2>
                <p className="text-sm text-gray-400">Administrator</p>
            </div>
        </div>
        </div>
    )
}
export default SideBar;