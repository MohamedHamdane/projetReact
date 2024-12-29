import {FaBars , FaTimes} from "react-icons/fa";
import { useContext, useRef, useState } from "react";
import "../styles/main.css"
import { Link } from "react-router-dom";

export const translations_nav = {
    en :{
        title : "Welcome",
        subtitle : "Shape your destiny, the FUTURE is calling .",
    },
    es :{
        title : "Hola",
        subtitle : "Dale forma a tu destino, el FUTURO te llama .",
    },
    dr :{
        title : "مرحبا",
        subtitle : " شكّل القدر ديالك ، المستقبل كيناديك .",
    }

}


function Navbar(){
        const navRef = useRef();
        const [lang , setLang] = useState('en');

        const handleLanguageChange = (event) => {
            setLang(event.target.value);
        };

        const textDirection = lang === 'dr' ? 'rtl' : 'ltr' ;


        const showNavbar = ()=> {
            navRef.current.classList.toggle("responsive_nav")
        }
    return(
        <div >
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
        <select
            id="language-select"
            value={lang}
            onChange={handleLanguageChange}
            style={{
                position: 'fixed',   
                top: '90px',      
                left: '20px',       
                padding: '8px',
                margin: '0',         
                borderRadius: '4px',
                border: '1px solid #eee',
                backgroundColor: 'transparent', 
                color : 'black ' ,
                zIndex: '1000',  
            }}
            >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="dr">darija</option>
      </select>
      <div dir={textDirection}>
        <h1 id="h11" >{translations_nav[lang].title}</h1>
        <h2 id="h22" >{translations_nav[lang].subtitle}</h2>
      </div>
        
        </div>
    )
}

export default Navbar ;