import { useState } from "react";
import { register } from "../Api/ManagerApi.js";
import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

function SignUp() {
  const [form, setForm] = useState({
    UserName: "",
    Password: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form);
      navigate("/login");
      alert("Manager Created Successfully 🚀");
    } catch (error) {
      console.log(error);
      alert("Error Creating Manager ❌");
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

      {/* SIGNUP CARD */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl p-8 space-y-6"
      >
        <h2 className="typing-text text-3xl font-bold text-center">
          🧬Register Portal
        </h2>

        {/* USERNAME */}
        <div className="relative">
          <FaUser className="absolute top-3 left-3 text-gray-300" />
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
          <FaLock className="absolute top-3 left-3 text-gray-300" />
          <input
            type="password"
            name="Password"
            placeholder="Enter Password"
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 outline-none focus:border-green-400 transition"
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-xl font-semibold shadow-lg"
        >
          Sign Up ✨
        </button>

        {/* FOOTER */}
        <div className="text-center text-sm text-gray-300 space-y-2">
          <p>Already have an account?</p>

          <Link
            to="/login"
            className="text-green-400 hover:text-green-600 font-semibold"
          >
            Login →
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;