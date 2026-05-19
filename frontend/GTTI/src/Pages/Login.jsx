import { useState } from "react";
import { login } from "../Api/ManagerApi.js";
import { useNavigate, Link } from "react-router-dom";
import { FaUserGraduate, FaKey } from "react-icons/fa"

function Login () {
    const [form, setForm ] = useState({
        UserName: "",
        Password: ""
    });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const res = await login(form)
            localStorage.setItem('token',res.data.token);
            navigate('/dashboard', {replace: true});
        } catch(error) {
            console.log(error);
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
                <h2>Login</h2>
                <input type="text" id="UserName" name="UserName" placeholder="Enter Your UserName" onChange={handleChange}/>
                <input type="password" id="Password" name="Password" placeholder="Enter Your Password" onChange={handleChange} />
                <button>Login</button><p className="text-sm text-blue-400 hover:text-blue-600">You dont't have an Account already?</p>
                <Link to="/register">SignUp</Link>
            </form>
        </div>
    )
}

export default Login;