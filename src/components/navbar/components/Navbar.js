import {FaBars , FaTimes} from "react-icons/fa";
import { useRef } from "react";
import "../styles/main.css"
import { Link } from "react-router-dom";

function Navbar(){
        const navRef = useRef();

        const showNavbar = ()=> {
            navRef.current.classList.toggle("responsive_nav")
        }
    return(
        <>
        <header>
            <h3>HAMDANE</h3>
            <nav ref={navRef}>
                <Link to="/home">HOME</Link>
                <Link to="/calculater">CALCULATER</Link>
                <Link to="/cards">CARDS</Link>
                <Link to="/country-api">COUNTRY-API</Link>
                <Link to="/todo">TODO-LIST</Link>
                <Link to="/notfound"></Link>

           

            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes/>
            </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>

        </header>
        <h1 id="h11">Welcome</h1>
        <h2 id="h22">A better learning journey FUTURE start here</h2>
        </>
        
    )
}

export default Navbar ;