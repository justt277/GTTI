import { useState, useEffect } from "react";
import { getExports } from "../Api/ExportApi.js";
import { gotImports } from "../Api/ImportApi.js";
import { gotFoods } from "../Api/FoodApi.js";


function ReportPage () {
    const [eport, setEport ] = useState([]);
    const [iport, setIport ] = useState([]);
    const [food, setFood ] = useState([]);

    const fetchData = async () => {
        try {
        const exportRes = await getExports();
        const importRes = await gotImports();
        const foodRes = await gotFoods();

        setEport(exportRes.data.data || []);
        setIport(importRes.data.data || []);
        setFood(foodRes.data.data || []);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>FoodId</th>
                        <th>Food_Name</th>
                        <th>Food_OwnerName</th>
                        <th>ImportDate</th>
                        <th>Import Quantity</th>
                        <th>ExportDate</th>
                        <th>Export Quantity</th>
                        
                    </tr>
                </thead>

                <tbody>
                    {food?.map((f) => {
                        const importData = iport.find(
                            (i) => i.Food?._id === f._id
                        );

                        const exportData = eport.find(
                            (o) => o.Food._id === f._id
                        )
                        return(
                            <tr key={f._id}>
                                <td>{f._id}</td>
                                <td>{f.Food_Name}</td>
                                <td>{f.OwnerName}</td>
                                <td>{
                                    importData
                                    ? new Date(importData.ImportDate).toLocaleDateString()
                                    : "No Import"
                                    }
                                    </td>
                                    <td>{importData?.Quantity || "No Import"}</td>
                                <td>{
                                    exportData
                                    ? new Date(exportData.ExportDate).toLocaleDateString()
                                    : "No Exports"
                                    }
                                    </td>
                                    <td>{exportData?.Quantity || "No Exports"}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ReportPage