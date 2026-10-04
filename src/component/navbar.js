import React from "react";
import { Link } from "react-router-dom";
import logo from "../assests/Logo.svg"
import {toast} from "react-hot-toast";


function Navbar(props){

    const login = props.login;
    const setlogin = props.setlogin;

    return(
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto '  >
        <Link to="/">
            <img src={logo} width={160} height={32} loading="lazy"/>
        </Link>
        <nav>
            <ul className="flex gap-x-6 text-white">

            <li>
                <Link to="/" >
                    
                    Home

                </Link>

            </li>

             <li>
                <Link to="/" >
                    
                    About

                </Link>

                
            </li>

            <li>
                <Link to="/" >
                    
                    Contact

                </Link>
                
            </li>
                
            </ul>
        </nav>
        
        <div className="flex gap-3 ml-5 mr-3 items-center gap-x-4">
        {
        !login &&
        <Link to="/login" >
            <button className=" bg-slate-900 text-white py-[8px] px-[12px] rounded-[8px] border border-slate-950">
                Login
            </button>
        </Link>
        }
        {
        !login &&
         <Link to="/signup">
            <button className=" bg-slate-900 text-white py-[8px] px-[12px] rounded-[8px] border border-slate-950">
                Sign Up
            </button>
        </Link>
        }
        {login &&
         <Link to="/deshboard">
            <button className=" bg-slate-900 text-white py-[8px] px-[12px] rounded-[8px] border border-slate-950">
                Deshboard
            </button>
        </Link>
        }
        {login&&
         <Link to="/">
            <button onClick={()=>{
                setlogin(false);
                toast.success("Log Out");

            }} className=" bg-slate-900 text-white py-[8px] px-[12px] rounded-[8px] border border-slate-950">
                Log Out
            </button>
        </Link>
        }


        </div>
        
    </div>
    );
}
export default Navbar;