import React , {useContext} from "react";
import { ThemeContext } from "./ThemeContext";

export default function Toggler(){
    const {theme , ToggleTheme} = useContext(ThemeContext);

    return(
        <div style={{
            backgroundColor : 'red'
        }}>


            <h1>Mode actuel : {theme}</h1>
            <button onClick={ToggleTheme}>Passer en {theme === 'light' ? 'Dark' : 'Light'} Mode 
            </button>
        </div>
    )
}