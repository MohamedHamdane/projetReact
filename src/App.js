import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Calc from "./components/calculater/Calc";
import Cards from "./components/cards/Cards";
import Count from "./components/country-api/compo/Count";
import Toodo from "./components/todo/components/Toodo";
import Navbar from "./components/navbar/components/Navbar";
import Home from "./components/home/home";
import Main from "./components/mainNav/Main";
import Contact from "./components/Contact/Contact";
import Aboutme from "./components/Aboutme/Aboutme";
import Notfound from "./components/notfound/NotFound";
import { ThemeProvider } from "./components/context/ThemeContext";

function App() {
  return (
    <div className="all">
      <Router>
        <ThemeProvider>
          <Main/>
        </ThemeProvider>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/calculater" element={<Calc/>}></Route>
          <Route path="/cards" element={<Cards/>}></Route>
          <Route path="/country-api" element={<Count/>}></Route>
          <Route path="/todo" element={<Toodo/>}></Route>
          <Route path="/home"></Route>
          <Route path="/navbar" element={<Navbar/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/Aboutme" element={<Aboutme/>}></Route>
          <Route path="*" element={<Notfound/>}></Route>  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
