import { useState, useEffect } from "react";
import {
  createImport,
  gotImports,
  updateImport,
  deleteImport,
} from "../Api/ImportApi.js";

import NavBar from "../Components/NavBar.jsx";
import { FaPlus, FaEdit, FaTrash, FaBoxOpen } from "react-icons/fa";

function ImportPage() {
  const [form, setForm] = useState({
    Food: "",
    Quantity: "",
  });

  const [iport, setIport] = useState([]);

  const fetchData = async () => {
    const res = await gotImports();
    setIport(res.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createImport(form);
    fetchData();
    setForm({ Food: "", Quantity: "" });
  };

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleDelete = async (_id) => {
    if (!window.confirm("Delete this import?")) return;
    await deleteImport(_id);
    fetchData();
  };

  const handleUpdate = async (_id, data) => {
    await updateImport(_id, data);
    fetchData();
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black text-white">

      <NavBar />

      <div className="p-6 max-w-7xl mx-auto space-y-8">

        {/* HEADER */}
        <div>
          <h1 className="text-4xl font-bold flex items-center gap-3">
            <FaBoxOpen className="text-green-400" />
            Import Management
          </h1>
          <p className="text-gray-400 mt-2">
            Track incoming food stock into warehouse
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 grid md:grid-cols-2 gap-4"
        >
          <input
            placeholder="Food"
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

          <button className="md:col-span-2 bg-green-600 hover:bg-green-700 py-3 rounded-2xl flex items-center justify-center gap-2">
            <FaPlus /> Add Import
          </button>
        </form>

        {/* TABLE */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20">
          <table className="w-full text-left">
            <thead className="bg-white/10">
              <tr>
                <th className="p-4">Food</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Date</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {iport?.map((e) => (
                <tr key={e._id} className="border-t border-white/10 hover:bg-white/10">
                  <td className="p-4">{e.Food?.Food_Name}</td>
                  <td className="p-4 text-green-300">{e.Quantity}</td>
                  <td className="p-4">
                    {new Date(e.ImportDate).toLocaleDateString()}
                  </td>

                  <td className="p-4 flex gap-2 justify-center">

                    <button
                      onClick={() => {
                        const q = prompt("New Quantity", e.Quantity);
                        handleUpdate(e._id, { Quantity: q });
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

export default ImportPage;