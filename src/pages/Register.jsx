import { useState } from "react";
import { apiPost } from "../api";
import { Link } from "react-router-dom";
import "../assets/style.css";


const Register = () => {
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [age,setAge] = useState(18);
    const [gender,setGender] = useState("");
    const [location,setLocation] = useState();
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
        await apiPost("/auth/register",{username,email,password,age,gender,location});
        alert("Registration Successfull!") ;}
        catch(err) {alert(err.message)}
    }
return (
    <div className="text-4xl min-h-screen bg-[#eee5f8] flex flex-col" >
    <form onSubmit={handleSubmit} className="flex flex-col w-[20%]  bg-[#fffdfd] p-[60px] pb-[110px] pt-[90px] mt-[10px] ml-[35%] shadow-[0_20px_50px_rgba(0,0,0,0.3)] mb-[60px]">
                <h1 className="mt-[0px]">Sign Up</h1>
        <input className="p-[10px] rounded-[10px] flex justify-self-center pb-[15px] pt-[15px] mb-[20px] focus:outline-[#8f819f]  border-[#e1e0e2]"
        type="text"
        value={username}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        />
        <input className="p-[10px] rounded-[10px] flex justify-self-center pb-[15px] pt-[15px] mb-[20px] focus:outline-[#8f819f]  border-[#e1e0e2]"
        type="text"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        />
        <input className="p-[10px] rounded-[10px] flex justify-self-center pb-[15px] pt-[15px] mb-[20px] focus:outline-[#8f819f]  border-[#e1e0e2]"
        type="text"
        value={password}
        id="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        />
    <input className="p-[10px] rounded-[10px] flex justify-self-center pb-[15px] pt-[15px] mb-[20px] focus:outline-[#8f819f]  border-[#e1e0e2]"
        type="number"
        id="age"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}/>
        <div className="flex flex-row">
        <label className="flex items-center text-sm pb-[30px] pr-[20px]">
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={gender === "Male"}
                        onChange={(e) => setGender(e.target.value)}
                        className="mr-2"
                    />
                    <span>Male</span>
                </label>
                <label className="flex items-center text-sm pb-[30px]">
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={gender === "Female"}
                        onChange={(e) => setGender(e.target.value)}
                        className="mr-2"
                    />
                    <span>Female</span>
                </label>
                </div>
                <select className="rounded-[10px] p-[15px] mb-[10px] mt-[0px]" 
                    value={location}
                    onChange={(e)=>setLocation(e.target.value)}>
                    <option value="" disabled selected>Select a country</option>
                    <option value="Egypt">Egypt</option>
                    <option value="United States">United States</option>
                    <option value="France">France</option>
                    <option value="Italy">Italy</option>
                    <option value="Spain">Spain</option>
                    <option value="Canada">Canada</option>
                    <option value="Other">Other</option>
                    </select>
        <button type="submit" className="w-[100px] bg-[#b15cfb] p-[10px] text-[white] rounded-[10px] text-[20px] ml-[30%]">Sign Up</button>
        <p className="ml-[20px]">Already have an account? <Link to="/login">Sign In</Link></p>
    </form>
    </div>
)
}

export default Register