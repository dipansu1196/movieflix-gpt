import Header from './Header';
import React from 'react';
import { BG_URL } from '../utils/constant';
import {useState} from 'react';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm=()=>{
     setIsSignInForm(!isSignInForm);
    }
    return (
        <div className="w-screen h-screen">
            <Header />
            <div 
                className="absolute top-0 left-0 w-screen h-screen bg-cover bg-center bg-no-repeat -z-10"
                style={{backgroundImage: `url(${BG_URL})`}}
            >
            </div>
            <form className="w-full md:w-3/4 lg:w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg">
                <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In":"Sign Up"}</h1>
             {!isSignInForm&&<input 
                    type="text" 
                    placeholder="Full Name" 
                    className="p-4 my-4 w-full bg-gray-700 rounded-lg" 
                />  }   
                <input 
                    type="text" 
                    placeholder="Email" 
                    className="p-4 my-4 w-full bg-gray-700 rounded-lg" 
                /> 
                <input 
                    type="password" 
                    placeholder="Password" 
                    className="p-4 my-4 w-full bg-gray-700 rounded-lg"  
                />
                <button className="p-4 my-6 bg-red-700 w-full rounded-lg font-bold text-lg">
                {isSignInForm? "Sign In":"Sign Up"}
                </button>
                
                <div className="flex justify-between text-gray-500 text-sm">
                    <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <label>Remember me</label>
                    </div>
                    <p className="cursor-pointer hover:underline">Need help?</p>
                </div>

                <div className="py-4 text-white-500">
                    <p onClick={toggleSignInForm} className="py-4 cursor-pointer hover:underline ">
                    {isSignInForm? "New to MovieFlix ? Sign Up Now":"Already Registered ? Sign In Now"}
                    </p>
                    <p className="text-sm">
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. 
                        <span className="text-blue-600 cursor-pointer hover:underline ml-1">
                            Learn more
                        </span>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login;
