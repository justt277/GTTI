import { useState, useEffect } from "react";
import {
  createFood,
  gotFoods,
  updateFood,
  deleteFood,
} from "../Api/FoodApi.js";

import NavBar from "../Components/NavBar.jsx";
import { FaEdit, FaTrash, FaPlus, FaAppleAlt } from "react-icons/fa";

function FoodPage() {
  const [food, setFood] = useState([]);

  const [form, setForm] = useState({
    Food_Name: "",
    OwnerName: "",
  });

  // 📦 FETCH DATA
  const fetchFood = async () => {
    try {
      const response = await gotFoods();
      setFood(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFood();
  }, []);

  // ➕ CREATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createFood(form);

      alert("Food Added Successfully 🍎🚀");

      setForm({
        Food_Name: "",
        OwnerName: "",
      });

      fetchFood();
    } catch (error) {
      console.log(error);
    }
  };

  // 📝 HANDLE CHANGE
  const handleChange = (field) => (e) => {
    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  // ❌ DELETE
  const handleDelete = async (_id) => {
    try {
      const confirmDelete = window.confirm(
        "Delete this food record?"
      );

      if (!confirmDelete) return;

      await deleteFood(_id);

      alert("Food Deleted Successfully 🗑️");

      fetchFood();
    } catch (error) {
      console.log(error);
    }
  };

  // ✏️ UPDATE
  const handleUpdate = async (_id, updatedData) => {
    try {
      await updateFood(_id, updatedData);

      alert("Food Updated Successfully ✨");

      fetchFood();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black text-white">

      {/* 🌐 NAVBAR */}
      <NavBar />

      <div className="p-6 max-w-7xl mx-auto space-y-8">

        {/* 🏷️ PAGE HEADER */}
        <div>
          <h1 className="text-4xl font-bold flex items-center gap-3">
            <FaAppleAlt className="text-green-400" />
            Food Management
          </h1>

          <p className="text-gray-400 mt-2">
            Manage food inventory records for GTTI COMPANY Ltd
          </p>
        </div>

        {/* 🧾 FORM CARD */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <h2 className="md:col-span-2 text-2xl font-bold text-center">
            ➕ Add New Food
          </h2>

          {/* 🍎 FOOD NAME */}
          <input
            type="text"
            placeholder="Enter Food Name"
            value={form.Food_Name}
            onChange={handleChange("Food_Name")}
            className="bg-white/10 border border-white/20 rounded-xl p-3 outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* 👤 OWNER NAME */}
          <input
            type="text"
            placeholder="Enter Owner Name"
            value={form.OwnerName}
            onChange={handleChange("OwnerName")}
            className="bg-white/10 border border-white/20 rounded-xl p-3 outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* 🚀 BUTTON */}
          <button
            type="submit"
            className="md:col-span-2 bg-green-600 hover:bg-green-700 transition py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-lg"
          >
            <FaPlus />
            Add Food
          </button>
        </form>

        {/* 📊 TABLE CARD */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl overflow-hidden">

          {/* 📌 TABLE TITLE */}
          <div className="p-5 border-b border-white/10">
            <h2 className="text-2xl font-bold">
              📦 Food Records
            </h2>
          </div>

          {/* 📋 TABLE */}
          <div className="overflow-x-auto">
            <table className="w-full text-left">

              {/* 🧠 TABLE HEAD */}
              <thead className="bg-white/10 text-gray-200">
                <tr>
                  <th className="p-4">Food ID</th>
                  <th className="p-4">Food Name</th>
                  <th className="p-4">Owner Name</th>
                  <th className="p-4 text-center">Actions</th>
                </tr>
              </thead>

              {/* 📦 TABLE BODY */}
              <tbody>
                {food?.map((f, index) => (
                  <tr
                    key={f._id}
                    className={`border-t border-white/10 hover:bg-white/10 transition ${
                      index % 2 === 0 ? "bg-white/5" : ""
                    }`}
                  >
                    <td className="p-4">{f._id}</td>

                    <td className="p-4 font-medium text-green-300">
                      {f.Food_Name}
                    </td>

                    <td className="p-4">
                      {f.OwnerName}
                    </td>

                    {/* 🎮 ACTION BUTTONS */}
                    <td className="p-4 flex items-center justify-center gap-3">

                      {/* ✏️ UPDATE */}
                      <button
                        onClick={async () => {
                          const newFoodName = prompt(
                            "Enter New Food Name:",
                            f.Food_Name
                          );

                          const newOwnerName = prompt(
                            "Enter New Owner Name:",
                            f.OwnerName
                          );

                          if (!newFoodName || !newOwnerName) return;

                          handleUpdate(f._id, {
                            Food_Name: newFoodName,
                            OwnerName: newOwnerName,
                          });
                        }}
                        className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-xl flex items-center gap-2 text-sm"
                      >
                        <FaEdit />
                        Update
                      </button>

                      {/* ❌ DELETE */}
                      <button
                        onClick={() => handleDelete(f._id)}
                        className="bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-xl flex items-center gap-2 text-sm"
                      >
                        <FaTrash />
                        Delete
                      </button>

                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        {/* 🦶 FOOTER */}
        <footer className="text-center text-gray-500 text-sm pt-4">
          © {new Date().getFullYear()} GTTI COMPANY Ltd
        </footer>

      </div>
    </div>
  );
}

export default FoodPage;