// import './home.css'
// export default function Home() {
//    return(
//     <>
//     <div className='cont'>
//              <h1 id='h11'>
//                     Connect with us 
//                 </h1>
//                 <h2 id='h22'>
//                         We build custom software to help your business thrive
//             </h2>
//     </div>
            
        
    
//     </>
//    )
// }


import { useContext } from 'react';
// import { ThemeContext } from '../ThemeContext'; // Make sure this path is correct
import { ThemeContext } from '../context/ThemeContext';
import './home.css';

export default function Home() {
    const  darkMode  = useContext(ThemeContext);  // Get dark mode state from context

    return (
        <div className={`cont ${darkMode ? 'dark' : ''}`}>
            <h1 id="h11" className={darkMode ? 'dark' : ''}>
                Connect with us
            </h1>
            <h2 id="h22" className={darkMode ? 'dark' : ''}>
                We build custom software to help your business thrive
            </h2>
        </div>
    );
}

