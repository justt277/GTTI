import { useState } from "react";
import { login } from "../Api/ManagerApi.js";
import { useNavigate, Link } from "react-router-dom";
import { FaUserGraduate, FaKey } from "react-icons/fa";

function Login() {
  const [form, setForm] = useState({
    UserName: "",
    Password: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("manager", JSON.stringify(res.data.manager));
      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-black text-white">

      {/* LOGIN CARD */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl p-8 space-y-6"
      >
        <h2 className="typing-text text-3xl font-bold text-center">
          🔐 Login Portal
        </h2>

        {/* USERNAME */}
        <div className="relative">
          <FaUserGraduate className="absolute top-3 left-3 text-gray-300" />
          <input
            type="text"
            name="UserName"
            placeholder="Enter Username"
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 outline-none focus:border-green-400 transition"
          />
        </div>

        {/* PASSWORD */}
        <div className="relative">
          <FaKey className="absolute top-3 left-3 text-gray-300" />
          <input
            type="password"
            name="Password"
            placeholder="Enter Password"
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 outline-none focus:border-green-400 transition"
            required
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 transition py-3 rounded-xl font-semibold shadow-lg"
        >
          Login 🚀
        </button>

        {/* FOOTER */}
        <div className="text-center text-sm text-gray-300 space-y-2">
          <p>Don’t have an account yet?</p>

          <Link
            to="/register"
            className="text-blue-400 hover:text-blue-600 font-semibold"
          >
            Create Account →
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;