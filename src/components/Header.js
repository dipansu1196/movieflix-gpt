import {LOGO} from '../utils/constant';
const Header=()=>{
    return (
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black">
    <img  className="w-30 h-28 p-2"
    src={LOGO} alt="logo"/>   
        </div>
    )
}

export default Header;
