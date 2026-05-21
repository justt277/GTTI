import React from "react";
import SideBar from "../Components/SideBar.jsx";
import NavBar from "../Components/NavBar.jsx";
import { motion } from "framer-motion";
import { FaUsers, FaUserCircle, FaChartLine } from "react-icons/fa";

function Dashboard() {

    // 🎬 animation presets
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const card = {
        hidden: { opacity: 0, y: 25 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <div className="flex min-h-screen bg-linear-to-br from-gray-950 via-gray-900 to-black text-white">

            {/* 📌 SIDEBAR */}
            <SideBar />

            {/* 📌 MAIN CONTENT */}
            <div className="flex-1 flex flex-col">

                {/* 📌 NAVBAR */}
                <NavBar />

                {/* 📌 DASHBOARD CONTENT */}
                <div className="p-6 space-y-8">

                    {/* 🌟 HEADER */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl font-extrabold tracking-wide">
                            Welcome Back 👋
                        </h1>

                        <p className="text-gray-400 mt-2">
                            Here’s what’s happening in your system today.
                        </p>
                    </motion.div>

                    {/* 📦 CARDS */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
                    >

                        {/* 👥 USERS */}
                        <motion.div
                            variants={card}
                            whileHover={{ scale: 1.04 }}
                            className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 shadow-2xl"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-300">
                                        Total Users
                                    </p>

                                    <h2 className="text-5xl font-bold text-blue-400 mt-3">
                                        120
                                    </h2>
                                    <p className="text-gray-300 mt-3">Manage Them </p>
                                </div>

                                <FaUsers className="text-5xl text-blue-400" />
                            </div>
                        </motion.div>

                        {/* 📈 REPORTS */}
                        <motion.div
                            variants={card}
                            whileHover={{ scale: 1.04 }}
                            className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 shadow-2xl"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-300">
                                        Reports
                                    </p>

                                    <h2 className="text-5xl font-bold text-green-400 mt-3">
                                        35
                                    </h2>
                                </div>

                                <FaChartLine className="text-5xl text-green-400" />
                            </div>
                        </motion.div>

                    </motion.div>

                    {/* 🌈 HERO SECTION */}
                    <motion.div
                             initial={{ opacity: 0, y: 30 }}
                             animate={{ opacity: 1, y: 0 }}
                             transition={{ duration: 0.7 }}
                             className="bg-linear-to-r from-green-600 via-emerald-600 to-lime-600 rounded-3xl p-10 shadow-2xl h-screen"
                               >
                             <h2 className="text-4xl font-bold">
                                 GTTI Warehouse Management System 🚚
                             </h2>
                         
                             <p className="mt-4 text-white/90 text-lg max-w-3xl">
                                 Monitor imports, exports, and food stock records in real time.
                                 Manage beans, rice, cassava flour, and maize flour efficiently
                                 with a modern digital warehouse system.
                             </p>
                         
                             <div className="flex gap-4 mt-6 flex-wrap">
                         
                                 <button className="px-6 py-3 bg-white text-black font-bold rounded-2xl hover:scale-105 transition">
                                     Manage Foods
                                 </button>
                         
                                 <button className="px-6 py-3 border border-white text-white rounded-2xl hover:bg-white hover:text-black transition">
                                     Generate Reports
                                 </button>
                         
                             </div>
                    </motion.div>

                    {/* 🦶 FOOTER */}
                    <footer className="text-center text-gray-500 text-sm pt-6 border-t border-white/10">
                        <p>
                            © {new Date().getFullYear()} Dashboard System
                        </p>

                        <p className="mt-1 text-xs">
                            Built with React + TailwindCSS + Framer Motion 🚀
                        </p>
                    </footer>

                </div>
            </div>
        </div>
    );
}

export default Dashboard;