import { useState, useEffect } from "react";
import { createExport, getExports, updateExport, deleteExport } from "../Api/ExportApi.js";
import { FaEdit, FaTrash , FaPlus} from "react-icons/fa";

function    ExportPage() {
    const [form, setForm ] = useState({
        Food: "",
        Quantity: ""
    })
    const [eport, setEport ] = useState([]);

    const fetchExport = async () => {
       const response =  await getExports();
       setEport(response.data.gotExports)
    };

    useEffect(() => {
        fetchExport();
    }, []);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            await createExport(form)
            fetchExport()
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = async (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleDelete = async (_id) => {
        try {
            await deleteExport(_id);
            alert("Export Deleted Successfully🍎->🗑️")
            fetchExport();
        } catch (error) {
            console.log(error);
            alert("Try Again🔃")
        }
    }

    const handleUpdate = async (_id, data) => {
        try {
            await updateExport(_id, data)
            alert("Export Updated Successfully🍓🍓-->🍎🍎😁😏")
            fetchExport();
        } catch (error) {
            console.log(error);
            alert("Try Again☠️🔃")
        }
    }

    return(
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <h2>Export</h2>
                    <input type="text" name="Food" placeholder="Enter Food-Name🍎" onChange={handleChange}/>
                    <input type="text" name="Quantity" placeholder="Enter Owner-Name🍎" onChange={handleChange} />
                    <button><FaPlus />Export</button>
                </form>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Food_Id</th>
                            <th>Food_Name</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {eport?.map((e) => (
                            <tr key={e._id}>
                                <td>{e._id}</td>
                                <td>{e.Food?.Food_Name}</td>
                                <td>{e.ExportDate}</td>
                                <td>{e.Quantity}</td>
                                <td>
                                    <button onClick={async () => {
                                        const newName = prompt(
                                            "Enter New Name🍎",
                                            e.Food_Name
                                        );
                                        const newQuantity = prompt(
                                            "Enter New Quantity(Kg)",
                                            e.Quantity
                                        )
                                        handleUpdate(
                                            e._id, {
                                                Food_Name: newName,
                                                Quantity: newQuantity
                                            }
                                        )
                                    }}>
                                        <FaEdit/>Update
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(e._id)}>
                                        <FaTrash/>Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ExportPage;