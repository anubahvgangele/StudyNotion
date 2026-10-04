import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye , AiOutlineEyeInvisible  } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {

    const [signupData, setSignupData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        conformpassword: "",
    });

    function changehandler(event) {
        setSignupData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }));
    }

    const [password, setpassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [accountType,setAccountType]=useState("student");

    const navigate = useNavigate();

    function clickhandler(event){
         event.preventDefault();

        if(signupData.password != signupData.conformpassword){

            toast.error("Passwords do not match");

            return;
        }

           
        else{
           

            navigate("/deshboard");

            toast.success("Account Created");

            const accountData={
                ...signupData
            }
            console.log("printing account data")
            console.log(accountData);

            const finalData={
                ...accountData,
                accountType
            }
            console.log(finalData);

        }
        
    }

    return (
        <div>

            <div className=" flex bg-gray-900 p-1 gap-x-1 my-6 rounded-full max-w-max outline-none border-none">
                <button onClick={() => setAccountType("student")} className={`${accountType === "student" ? "bg-gray-600 text-gray-300" : 

                "bg-transparent text-white"} py-2 px-5 outline-none border-none rounded-full transition-all duration-0.2s`}>Student</button>

                <button onClick={() => setAccountType("Instructor")}  className={`${accountType === "Instructor" ? "bg-gray-600 text-gray-300" : 

                "bg-transparent text-white"} py-2 px-5 outline-none border-none rounded-full transition-all duration-0.2s`}> Instructor</button>
            </div>

            <form className=" flex flex-col gap-4">

                {/* First name and lastname */}
                <div className=" flex justify-between">
                    <label>
                        <p className="text-white">First Name<sup>*</sup></p>

                        <input
                        required
                        type="text"
                        name="firstname"
                        value={signupData.firstname}
                        placeholder="Enter your FirstName"
                        onChange={changehandler}
                        className="bg-gray-900 rounded-[0.5rem] text-gray-200 w-full p-[12px] border 

                        border-b-gray-400 border-b-4 focus:border-blue-600 focus:outline-none autofill:bg-gray-900" 
                        />
                    </label>

                    <label>
                        <p className="text-white">Last Name<sup>*</sup></p>

                        <input
                            required
                            type="text"
                            name="lastname"
                            value={signupData.lastname}
                            placeholder="Enter your LastName"
                            onChange={changehandler}
                            className="bg-gray-900 rounded-[0.5rem] text-gray-200 w-full p-[12px] border 

                    border-b-gray-400 border-b-4 focus:border-blue-600 focus:outline-none autofill:bg-gray-900" 
                        />
                    </label>
                </div>

                {/* Email */}
                <label >
                    <p className="text-white">Email</p>

                    <input
                        required
                        type="email"
                        name="email"
                        value={signupData.email}
                        placeholder="Enter your Email"
                        onChange={changehandler}
                        className="bg-gray-900 rounded-[0.5rem] text-gray-200 w-full p-[12px] border 

                border-b-gray-400 border-b-4 focus:border-blue-600 focus:outline-none autofill:bg-gray-900" 
                    />
                </label>

                {/* Password */}
                <div className="flex justify-between">

                    <label className="relative">
                        <p className="text-white">Enter Password</p>

                        <input
                            required
                            type={password ? "text" : "password"}
                            name="password"
                            value={signupData.password}
                            placeholder="Enter password"
                            onChange={changehandler}
                            className="bg-gray-900 rounded-[0.5rem] text-gray-200 w-full p-[12px] border 

                        border-b-gray-400 border-b-4 focus:border-blue-600 focus:outline-none autofill:bg-gray-900" 
                        />
                        <span className=" absolute right-3 top-[38px] cursor-pointer" onClick={() => setpassword(prev => !prev)}>
                            {password ? (<AiOutlineEyeInvisible fontSize={24} className="text-gray-300 hover:text-blue-500"/>) 

                            : (<AiOutlineEye fontSize={24} className="text-gray-300 hover:text-blue-500"/>)}
                        </span>
                    </label>

                    <label className="relative">
                        <p className="text-white">Confirm Password</p>

                        <input
                            required
                            type={showConfirmPassword ? "text" : "password"}
                            name="conformpassword"
                            value={signupData.conformpassword}
                            placeholder="Confirm Password"
                            onChange={changehandler}
                            className="bg-gray-900 rounded-[0.5rem] text-gray-200 w-full p-[12px] border 

                        border-b-gray-400 border-b-4 focus:border-blue-600 focus:outline-none autofill:bg-gray-900" 
                        />
                        <span className=" absolute right-3 top-[36px] cursor-pointer" onClick={ () => setShowConfirmPassword(prev => !prev)}>
                            {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} className="text-gray-300 hover:text-blue-500"/>) : 

                            (<AiOutlineEye fontSize={24} className="text-gray-300 hover:text-blue-500"/>)}
                        </span>
                        
                    </label>

                </div>
                {/* Create account button */}
                
                <button onClick={clickhandler} className=" w-full bg-yellow-400 rounded-[8px] mt-3 font-medium cursor-pointer 
            text-black px-[12px] py-[8px] hover:bg-yellow-600 duration-300">Create Account</button>

            </form>

        </div>
    );
};

export default SignupForm;