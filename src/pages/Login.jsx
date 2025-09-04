import {useState} from 'react';
import { apiPost } from '../api';
import { Link, useNavigate } from 'react-router-dom';
import "../assets/style.css";
export const Login = () => {
const navigate = useNavigate();
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const handleSubmit = async(e) => {
    e.preventDefault();
    try{
    const res = await apiPost("/auth/login",{email,password});
    const {token,trueUser} = res;
    localStorage.setItem("token",token);
    if(trueUser.role==="Admin"){return navigate("/dashboard");}
    else if(trueUser.role==="User"){return navigate("/EventList");}
    alert("Login Successfull!");}
    catch(err) {alert(err.message);}
};
    return (
    <div className="text-4xl min-h-screen bg-[#eee5f8] flex flex-col">
    <form onSubmit = {(e) => handleSubmit(e) } className="flex flex-col w-[20%]  bg-[#fffdfd] p-[60px] pb-[110px] pt-[90px] mt-[2%] ml-[35%] shadow-[0_20px_50px_rgba(0,0,0,0.3)] mb-[60px]">
        <h1>Sign In</h1>
        <input className="p-[10px] rounded-[10px] flex justify-self-center pb-[15px] pt-[15px] mb-[20px] focus:outline-[#8f819f]  border-[#e1e0e2]"
        type = "text"
        value={email}
        placeholder='Email'
        onChange={(e) => setEmail(e.target.value)}
        />
        <input className="p-[10px] rounded-[10px] flex justify-self-center pb-[15px] pt-[15px] mb-[20px] focus:outline-[#8f819f]  border-[#e1e0e2]"
        type = "password"
        value={password}
        placeholder='Password'
        onChange={(e) => setPassword(e.target.value)}
        />
        <button
        type = "submit" className="w-[100px] bg-[#b15cfb] p-[10px] text-[white] rounded-[10px] text-[20px] ml-[30%]">Login</button>
        <p className="ml-[40px]">Don't have an account? <Link to="/register">Sign Up</Link></p>
        </form>
    </div >
    )
}
