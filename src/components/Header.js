import { LOGO } from '../utils/constant';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {auth} from '../utils/firebase';
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { netflixIcon } from '../utils/constant';
import { customProfileImage } from '../utils/constant';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user?.user);
    
    // Netflix default avatar for main icon

    // Your custom image for dropdown
    
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                dispatch(removeUser());
                navigate("/");
            })
            .catch((error) => {
                navigate("/error");
            });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {  //rembere it is unsubscribe when compnonent unmount unsubscibe from firebasse documentaion for cleaning purpose 
            if(user) {
                const {uid, email, displayName, photoURL} = user;
                dispatch(addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL || netflixIcon
                }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="absolute w-screen bg-gradient-to-b from-black z-50">
            {user && (
                <div className="px-8 py-2 flex justify-between items-center">
                    <div className="flex items-center">
                        <img 
                            className="w-32 md:w-44" 
                            src={LOGO} 
                            alt="logo"
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 relative group">
                            {/* Main header icon - Netflix default avatar */}
                            <img 
                                className="w-8 h-8 rounded-full"
                                alt="usericon" 
                                src={netflixIcon}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = netflixIcon;
                                }}
                            />
                            
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                                strokeWidth={2} stroke="currentColor" 
                                className="w-4 h-4 text-white transition-transform duration-200 group-hover:rotate-180">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>

                            {/* Dropdown menu with custom profile image */}
                            <div className="absolute top-full right-0 w-48 bg-black/90 border border-gray-700 
                                rounded-md shadow-lg hidden group-hover:block mt-2">
                                <ul className="py-2 text-white text-sm">
                                    <li className="px-4 py-2 hover:bg-gray-700/50 flex items-center gap-2">
                                        <img 
                                            className="w-7 h-7 rounded-full"
                                            src={customProfileImage}
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = netflixIcon;
                                            }}
                                            alt="profile" 
                                        />
                                        {user.displayName}
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-700/50">Account</li>
                                    <li className="px-4 py-2 hover:bg-gray-700/50">Help Center</li>
                                    <li className="border-t border-gray-700">
                                        <button 
                                            className="w-full text-left px-4 py-2 hover:bg-gray-700/50 text-red-500"
                                            onClick={handleSignOut}
                                        >
                                            Sign Out
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
