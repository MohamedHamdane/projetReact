// import {FaBars , FaTimes} from "react-icons/fa";
// import { useRef } from "react";
// import "../mainNav/Main.css"
// import { Link } from "react-router-dom";
// // import Navbar from "./components/navbar/components/Navbar";

// function Main(){
//         const navRef = useRef();

//         const showNavbar = ()=> {
//             navRef.current.classList.toggle("responsive_nav")
//         }
//     return(
//         <header>
//             <h3>HAMDANE</h3>
//             <img src="me.jpg" id="imgg"></img>
//             <nav ref={navRef}>
//                 <Link to="/home">HOME</Link>
//                 <Link to="/Aboutme">ABOUT ME</Link>
//                 <Link to="/Navbar">MY WORK</Link>
//                 <Link to="/Contact">CONTACT ME</Link>

//             <button className="nav-btn nav-close-btn" onClick={showNavbar}>
//                 <FaTimes/>
//             </button>
//             </nav>
//             <button className="nav-btn" onClick={showNavbar}>
//                 <FaBars/>
//             </button>
//         </header>
//     )
// }

// export default Main ;




import { FaBars, FaTimes } from "react-icons/fa";
import { useRef, useContext } from "react";
import "../mainNav/Main.css";
import { Link } from "react-router-dom";
// import { ThemeContext } from "../ThemeContext"; // Adjust the path as needed
import { ThemeContext } from "../context/ThemeContext";

function Main() {
    const navRef = useRef();
    const { darkMode, toggleDarkMode } = useContext(ThemeContext);

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header className={darkMode ? "dark" : ""}>
            <h3>HAMDANE</h3>
            <img src="me.jpg" id="imgg" alt="Profile" />
            <nav ref={navRef}>
                <Link to="/home">HOME</Link>
                <Link to="/Aboutme">ABOUT ME</Link>
                <Link to="/Navbar">MY WORK</Link>
                <Link to="/Contact">CONTACT ME</Link>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </header>
    );
}

export default Main;
