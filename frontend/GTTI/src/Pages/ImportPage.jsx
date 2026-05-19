import { useState, useEffect } from "react";
import { createImport, gotImports, updateImport, deleteImport } from "../Api/ImportApi.js";
import { FaEdit, FaTrash , FaPlus} from "react-icons/fa";

function    ImportPage() {
    const [form, setForm ] = useState({
        Food: "",
        Quantity: ""
    })
    const [iport, setIport ] = useState([]);

    const fetchExport = async () => {
        try {
       const response =  await gotImports();
       setIport(response.data.gotImports);
       } catch (error) {
        console.log(error);

       }
    };

    useEffect(() => {
        fetchExport();
    }, []);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            await createImport(form)
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
            await deleteImport(_id);
            alert("Import Deleted Successfully🍎->🗑️")
            fetchExport();
        } catch (error) {
            console.log(error);
            alert("Try Again🔃")
        }
    }

    const handleUpdate = async (_id, data) => {
        try {
            await updateImport(_id, data)
            alert("Import Updated Successfully🍓🍓-->🍎🍎😁😏")
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
                    <h2>Import🍎</h2>
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
                            <th>ImportDate</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {iport?.map((e) => (
                            <tr key={e._id}>
                                <td>{e._id}</td>
                                <td>{e.Food?.Food_Name}</td>
                                <td>{e.ImportDate}</td>
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

export default ImportPage;