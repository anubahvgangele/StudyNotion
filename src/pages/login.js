import React from "react";
import Template from "../component/template"
import loginImg from "../assests/login.png"


function Login({setlogin}){

    return(
        <div>
            <Template
                title='Welcome Back'
                desc1='Build skills for today , tomorrow and beyond'
                desc2='Education to future-proof your career'
                image={loginImg}
                formtype="logIn"
                setlogin={setlogin}
            />

        </div>

    );
}
export default Login;