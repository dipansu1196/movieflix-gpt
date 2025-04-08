import Header from './Header';
import React from 'react';
import { BG_URL } from '../utils/constant';
import {useState, useRef} from 'react';
import {checkValidData} from '../utils/validate';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {auth} from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const fullname = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
        setErrorMessage(null); // Clear any existing errors
    };

    const handleButtonClick = async () => {
        // Get form values
        const emailValue = email.current?.value;
        const passwordValue = password.current?.value;
        const fullnameValue = fullname.current?.value;

        // Validate form data
        const message = isSignInForm 
            ? checkValidData("", emailValue, passwordValue)
            : checkValidData(fullnameValue, emailValue, passwordValue);

        setErrorMessage(message);
        if(message) return; // Stop if validation failed

        setIsLoading(true);
        
        try {
            if(!isSignInForm) {
                // Sign Up Logic
                const userCredential = await createUserWithEmailAndPassword(
                    auth, 
                    emailValue, 
                    passwordValue
                );

                // Update profile
                await updateProfile(userCredential.user, {
                    displayName: fullnameValue,
                    photoURL: "https://th.bing.com/th/id/OIP.TZW9RuK5YMWwWT2S4wEciQHaE7?w=306&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                });

                // Update Redux store
                const {uid, email, displayName, photoURL} = auth.currentUser;
                dispatch(addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL
                }));

            } else {
                // Sign In Logic
                const userCredential = await signInWithEmailAndPassword(
                    auth, 
                    emailValue, 
                    passwordValue
                );

                // Update Redux store
                const {uid, email, displayName, photoURL} = userCredential.user;
                dispatch(addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL
                }));
            }

            // Navigate to browse page on success
            navigate("/browse");

        } catch (error) {
            // Handle errors
            setErrorMessage(error.message);
            console.error("Auth error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-screen h-screen">
            <Header />
            <div 
                className="absolute top-0 left-0 w-screen h-screen bg-cover bg-center bg-no-repeat -z-10"
                style={{backgroundImage: `url(${BG_URL})`}}
            >
                <div className="w-screen h-screen bg-black bg-opacity-50"></div>
            </div>
            
            <form 
                onSubmit={(e) => e.preventDefault()}
                className="w-full md:w-3/4 lg:w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg"
            >
                <h1 className="font-bold text-3xl py-4">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>

                {!isSignInForm && (
                    <input 
                        ref={fullname}
                        type="text" 
                        placeholder="Full Name" 
                        className="p-4 my-4 w-full bg-gray-700 rounded-lg" 
                    />
                )}

                <input 
                    ref={email}
                    type="email" 
                    placeholder="Email Address" 
                    className="p-4 my-4 w-full bg-gray-700 rounded-lg" 
                />

                <input 
                    ref={password}
                    type="password" 
                    placeholder="Password" 
                    className="p-4 my-4 w-full bg-gray-700 rounded-lg"  
                />

                {errorMessage && (
                    <p className="text-red-500 text-sm py-2">{errorMessage}</p>
                )}

                <button 
                    className="p-4 my-6 bg-red-700 w-full rounded-lg font-bold text-lg disabled:opacity-50"
                    onClick={handleButtonClick}
                    disabled={isLoading}
                >
                    {isLoading ? "Loading..." : (isSignInForm ? "Sign In" : "Sign Up")}
                </button>

                <div className="flex justify-between text-gray-500 text-sm">
                    <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <label>Remember me</label>
                    </div>
                    <p className="cursor-pointer hover:underline">Need help?</p>
                </div>

                <div className="py-4 text-gray-500">
                    <p onClick={toggleSignInForm} className="cursor-pointer hover:underline">
                        {isSignInForm 
                            ? "New to MovieFlix? Sign Up Now" 
                            : "Already Registered? Sign In Now"
                        }
                    </p>
                    
                    <p className="text-sm mt-2">
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. 
                        <span className="text-blue-600 cursor-pointer hover:underline ml-1">
                            Learn more
                        </span>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
