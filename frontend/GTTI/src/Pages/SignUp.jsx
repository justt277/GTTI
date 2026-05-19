import { useState } from "react";
import { register } from "../Api/ManagerApi.js";
import { useNavigate } from "react-router-dom";



function SignUp () {
    const [form, setForm ] = useState({
        UserName: "",
        Password: ""
    });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            await register(form)
            navigate('/login')
            alert("Manager Created Successfully")
        } catch(error) {
            console.log(error);
            alert("Error Creating Manager")
        }
    }

    const handleChange = (e) => {
        setForm({
            ...form, 
            [e.target.name] : e.target.value
        })
    }

    return (
            <div>
                <form onSubmit={handleSubmit}>
                    <h2>SignUp</h2>
                    <input type="text" id="UserName" name="UserName" placeholder="Enter Your UserName" onChange={handleChange}/>
                    <input type="password" id="Password" name="Password" placeholder="Enter Your Password" onChange={handleChange} />
                    <button type="submit">SignUp</button>
                </form>
            </div>
    )
}

export default SignUp;