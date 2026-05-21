import { useState, useEffect } from "react";
import { getExports } from "../Api/ExportApi.js";
import { gotImports } from "../Api/ImportApi.js";
import { gotFoods } from "../Api/FoodApi.js";

import NavBar from "../Components/NavBar.jsx";

function ReportPage() {
  const [eport, setEport] = useState([]);
  const [iport, setIport] = useState([]);
  const [food, setFood] = useState([]);

  const fetchData = async () => {
    const exportRes = await getExports();
    const importRes = await gotImports();
    const foodRes = await gotFoods();

    setEport(exportRes.data.data || []);
    setIport(importRes.data.data || []);
    setFood(foodRes.data.data || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black text-white">

      <NavBar />

      <div className="p-6 max-w-7xl mx-auto space-y-6">

        <h1 className="text-4xl font-bold">
          📊 Company Report Overview
        </h1>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20">

          <table className="w-full text-sm">
            <thead className="bg-white/10">
              <tr>
                <th className="p-3">Food</th>
                <th className="p-3">Owner</th>
                <th className="p-3">Import Date</th>
                <th className="p-3">Import Qty</th>
                <th className="p-3">Export Date</th>
                <th className="p-3">Export Qty</th>
              </tr>
            </thead>

            <tbody>
              {food?.map((f) => {
                const importData = iport.find(
                  (i) => i.Food?._id === f._id
                );

                const exportData = eport.find(
                  (o) => o.Food?._id === f._id
                );

                return (
                  <tr key={f._id} className="border-t border-white/10 hover:bg-white/10">
                    <td className="p-3 text-green-300">{f.Food_Name}</td>
                    <td className="p-3">{f.OwnerName}</td>

                    <td className="p-3">
                      {importData
                        ? new Date(importData.ImportDate).toLocaleDateString()
                        : "No Import"}
                    </td>

                    <td className="p-3">
                      {importData?.Quantity || "-"}
                    </td>

                    <td className="p-3">
                      {exportData
                        ? new Date(exportData.ExportDate).toLocaleDateString()
                        : "No Export"}
                    </td>

                    <td className="p-3">
                      {exportData?.Quantity || "-"}
                    </td>
                  </tr>
                );
              })}
            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
}

export default ReportPage;