import React from "react";
import signupImg from "../assests/signup.png"
import Template from "../component/template"

function Signup(setIsLoggedIn){

    return(
        <div>
            <Template
                title='Join the millions learning to code with studyNotion for free'
                desc1='Build skills for today , tomorrow and beyond'
                desc2='Education to future-proof your career'
                image={signupImg}
                formtype="signup"
                setIsLoggedIn={setIsLoggedIn}
            />
            
        </div>
    );
}
export default Signup;