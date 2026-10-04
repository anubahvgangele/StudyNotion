import React from "react";

import LogInForm from "./LoginForm";
import SignupForm from "./SignupForm";
import frame from "../assests/frame.png";
import { FcGoogle } from 'react-icons/fc'


function Template({title , desc1 , desc2 , image , formtype , setlogin}){
    return(
    
        <div className="flex justify-between w-11/12 max-w-[1160px] py-12  mx-auto  
        items-center gap-x-12 gap-y-0 animate-[fadeIn_1s_ease-out]">

            <div className="w-11/12 max-w-[450px]">

                <h1 className=" text-gray-200 font-semibold text-[1.875rem] leading-[2.375rem] ">{title}</h1>

                <p className="text-[1.125rem] leading-[1.625rem] mt-4">
                    <span className=" text-[#6b7280] ">{desc1}</span>
                    <br/>
                    <span className=" text-blue-300">{desc2}</span>
                </p>

                {formtype ==="signup"?
                (<SignupForm setlogin={setlogin}/>)
                :
                (<LogInForm  setlogin={setlogin}/>)

                }
                <div className="flex w-full mt-3 flex-row items-center gap-x-2 ">
                    <div className=" h-[1px] w-full bg-gray-700 "></div>

                    <p className=" text-gray-700 font-medium leading-[1.375rem]">OR</p>

                    <div className=" h-[1px] w-full bg-gray-700 "></div>
                </div>

                <button className="w-full flex items-center justify-center rounded-[8px] 
                
                text-[#a3a3a3] border-gray-700 border-2 px-[12px] py-[8px] gap-x-2 mt-6">
                    <FcGoogle/>
                    <p>Sign Up with google</p>
                </button>

                
            </div>
            <div className=" relative w-11/12 max-w-[450px] mx-auto ">
                {/*     <img {frameImage} alt="pattern" width={558} height={504} loading="lazy" />
                    <img {image} alt="students" width={558} height={504} loading="lazy" /> */}

                <img src={frame} w={558} height={504} loading="lazy" alt="icon"/>
                <img src={image} w={558} height={490} loading="lazy" alt="frame"  className=" absolute -top-4 right-4 "/>

               
                
                    

            </div>
        </div>
    );
}
export default Template;