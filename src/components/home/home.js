import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './home.css'

// Define translations
export const translations = {
  en: {
    title: "Connect with us ",
    subtitle: "We build custom software to help your business thrive",
  },
  es: {
    title: "Conéctate con nosotros",
    subtitle: "Construimos software personalizado para ayudar a tu negocio a prosperar",
  },
  dr: {
    title: "تسجل معنا",
    subtitle: "كنبنيو برامج مخصصة باش نعاونو البيزنيس ديالك تزيد القدام",
  }
};

export default function Home() {
  const darkMode = useContext(ThemeContext); // Get dark mode state from context
  const [language, setLanguage] = useState('en'); // Default language is English

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };
  
  // Set the direction of the page based on the selected language
  const textDirection = language === 'dr' ? 'rtl' : 'ltr';  // 'dr' is for Darija (Arabic)

  return (
    <div className={`cont ${darkMode ? 'dark' : ''}`} dir={textDirection}> {/* dir :  Apply RTL/LTR dynamically */}
      {/* Language Selector - Only on Home */}
      <label htmlFor="language-select" className={darkMode ? 'dark' : ''}>
      </label>
      <select
            id="language-select"
            value={language}
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

      
      <h1 id="h11" className={darkMode ? 'dark' : ''}>
        {translations[language].title}
      </h1>
      <h2 id="h22" className={darkMode ? 'dark' : ''}>
        {translations[language].subtitle}
      </h2>
    </div>
  );
}
