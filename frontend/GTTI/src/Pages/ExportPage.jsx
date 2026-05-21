import { useState, useEffect } from "react";
import {
  createExport,
  getExports,
  updateExport,
  deleteExport,
} from "../Api/ExportApi.js";

import NavBar from "../Components/NavBar.jsx";
import { FaEdit, FaTrash, FaPlus, FaTruck } from "react-icons/fa";

function ExportPage() {
  const [form, setForm] = useState({
    Food: "",
    Quantity: "",
  });

  const [eport, setEport] = useState([]);

  const fetchExport = async () => {
    const response = await getExports();
    setEport(response.data.data);
  };

  useEffect(() => {
    fetchExport();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createExport(form);
    fetchExport();
    setForm({ Food: "", Quantity: "" });
  };

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleDelete = async (_id) => {
    const confirm = window.confirm("Delete this export?");
    if (!confirm) return;

    await deleteExport(_id);
    fetchExport();
  };

  const handleUpdate = async (_id, data) => {
    await updateExport(_id, data);
    fetchExport();
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black text-white">

      <NavBar />

      <div className="p-6 max-w-7xl mx-auto space-y-8">

        {/* HEADER */}
        <div>
          <h1 className="text-4xl font-bold flex items-center gap-3">
            <FaTruck className="text-purple-400" />
            Export Management
          </h1>
          <p className="text-gray-400 mt-2">
            Track all outgoing food exports from warehouse
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 grid md:grid-cols-2 gap-4"
        >
          <input
            placeholder="Food ID / Name"
            value={form.Food}
            onChange={handleChange("Food")}
            className="input"
          />

          <input
            placeholder="Quantity"
            value={form.Quantity}
            onChange={handleChange("Quantity")}
            className="input"
          />

          <button className="md:col-span-2 bg-purple-600 hover:bg-purple-700 py-3 rounded-2xl flex items-center justify-center gap-2">
            <FaPlus /> Add Export
          </button>
        </form>

        {/* TABLE */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20">
          <table className="w-full text-left">
            <thead className="bg-white/10">
              <tr>
                <th className="p-4">Food</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Export Date</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {eport?.map((e) => (
                <tr key={e._id} className="border-t border-white/10 hover:bg-white/10">
                  <td className="p-4">{e.Food?.Food_Name}</td>
                  <td className="p-4 text-purple-300">{e.Quantity}</td>
                  <td className="p-4">
                    {new Date(e.ExportDate).toLocaleDateString()}
                  </td>

                  <td className="p-4 flex gap-2 justify-center">

                    <button
                      onClick={() => {
                        const newQty = prompt("New Quantity", e.Quantity);
                        handleUpdate(e._id, { Quantity: newQty });
                      }}
                      className="bg-blue-600 px-3 py-1 rounded-lg"
                    >
                      <FaEdit />
                    </button>

                    <button
                      onClick={() => handleDelete(e._id)}
                      className="bg-red-600 px-3 py-1 rounded-lg"
                    >
                      <FaTrash />
                    </button>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

export default ExportPage;