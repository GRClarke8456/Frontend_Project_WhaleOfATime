import { Link } from "react-router-dom";
import logo from './assets/WOAT.jpeg';

const NavBar = () => {

    // Add function for pop-up - one for open and one for close
    // const openPop() => {
        // document.getElementById("").style.display = "block"
    // }
    // const closePop() => {
        // document.getElementById("").style.display = "none" 
    // }

    return ( 
        <header className="header">
            <input className="search" type="search" placeholder="search..." />
            <Link to=""> <img src={logo} className="logo" alt="Logo"/></Link>
            <button type="submit"> My profile</button>
            <button className="open-register">
                <Link to={"/register"}>Register</Link>
            </button>
            <button>
                <Link to={"/login"}>Login</Link>
            </button>
        </header>
     );
}

// Create a toggle for "Register"/"Login" to "My Profile"
 
export default NavBar;

