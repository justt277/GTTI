import { useState, useEffect } from "react";
import { createFood, gotFoods, updateFood, deleteFood } from "../Api/FoodApi.js";
import { FaEdit, FaTrash , FaPlus} from "react-icons/fa";

function FoodPage() {
    const [form, setForm ] = useState({
        Food_Name: "",
        OwnerName: ""
    })
    const [food, setFood ] = useState([]);

    const fetchFood = async () => {
       const response =  await gotFoods();
       setFood(response.data.data)
    };

    useEffect(() => {
        fetchFood();
    }, []);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            await createFood(form)
            fetchFood()
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
            await deleteFood(_id);
            alert("Food Deleted Successfully🍎->🗑️")
            fetchFood();
        } catch (error) {
            console.log(error);
            alert("Try Again🔃")
        }
    }

    const handleUpdate = async (_id, data) => {
        try {
            await updateFood(_id, data)
            alert("Food Updated Successfully🍓🍓-->🍎🍎😁😏")
            fetchFood();
        } catch (error) {
            console.log(error);
            alert("Try Again☠️🔃")
        }
    }

    return(
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <h2>Food🍎</h2>
                    <input type="text" name="Food_Name" placeholder="Enter Food-Name🍎" onChange={handleChange}/>
                    <input type="text" name="OwnerName" placeholder="Enter Owner-Name🍎" onChange={handleChange} />
                    <button><FaPlus />Food</button>
                </form>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Food_Id</th>
                            <th>Food_Name</th>
                            <th>Food_OwnerName</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {food?.map((f) => (
                            <tr key={f._id}>
                                <td>{f._id}</td>
                                <td>{f.Food_Name}</td>
                                <td>{f.OwnerName}</td>
                                <td>
                                    <button onClick={async () => {
                                        const newName = prompt(
                                            "Enter New FoodName🍎",
                                            d.Food_Name
                                        );
                                        const newOwner = prompt(
                                            "Enter New Food Owner🙍",
                                            d.OwnerName
                                        )
                                        handleUpdate(d._id,{
                                            Food_Name: newName,
                                            OwnerName: newOwner
                                        })
                                    } }><FaEdit/>Update</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(d._id)}>
                                        Delete
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

export default FoodPage;