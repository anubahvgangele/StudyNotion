import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye , AiOutlineEyeInvisible  } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
function LogInForm({setlogin}){
        
    const[formData,setFormData] = useState({Email:"",password:""});

    

    const navigate = useNavigate();

    function eventhandler(event){

        setFormData( (prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))

    }

    function sumbithandler(event){
        event.preventDefault();

        setlogin(true);
        toast.success("Logged In");
        navigate("/deshboard");
    }
    const [password , setpassword] = useState(false);

    return(
        <form onSubmit={sumbithandler} className="flex flex-col w-full gap-y-4 mt-4">
            <label className=" w-full text-[0.875rem] text-gray-200 mb-1 leading-[1.375rem]">
        
            <p className="text-white">
                
                Email Address<sup className="text-pink-700">*</sup>

            </p>
            <input className="bg-gray-900 rounded-[0.5rem] text-gray-200 w-full p-[12px] border 

            border-b-gray-400 border-b-4 focus:border-blue-600 focus:outline-none autofill:bg-gray-900" 

            required type="email"
            value={formData.Email}
            name="Email"
            onChange={eventhandler}
            placeholder="Enter email Address"

            />
             </label>
        <label className="relative">
        
            <p className=" w-full text-[0.875rem] text-gray-200 mb-1 leading-[1.375rem]">
                
                Enter password<sup className="text-pink-700">*</sup>

            </p>
            <input className="bg-gray-900 rounded-[0.5rem] text-gray-200 w-full p-[12px] border 

             border-b-gray-400 border-b-4 focus:border-blue-600 focus:outline-none autofill:bg-gray-900" 
            required type={password ? ('text') : ('password')}
            value={formData.password}
            name="password"
            onChange={eventhandler}
            placeholder="Enter password"

            />
            <span className=" absolute right-3 top-[38px] cursor-pointer" onClick={() => setpassword(prev => !prev)}>
                {password ? (<AiOutlineEyeInvisible fontSize={24} className="text-gray-300 hover:text-blue-500"/>) : 
                (<AiOutlineEye fontSize={24} className="text-gray-300 hover:text-blue-500"/>)}
            </span>
            
                <Link to="#">
                
                <p className=" max-w-max text-[0.875rem] cursor-pointer ml-auto text-blue-500 mb-1 leading-[1.375rem]">
                    Forgot Password
                </p>


                </Link>
                
            

       
        </label>
        
            <button type="sumbit" className=" bg-yellow-400 rounded-[8px] mt-3 font-medium cursor-pointer 
            text-black px-[12px] py-[8px] hover:bg-yellow-600 duration-300">
                Sign In
            </button>
    
        
    </form>
    );
    
}
export default LogInForm;