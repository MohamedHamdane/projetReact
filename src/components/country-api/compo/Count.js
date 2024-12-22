import './App.css';
// import {Routes, Route} from 'react-router-dom'
import AllCountries from './AllCountries/AllCountriess';
// import CountryInfo from './compo/AllCountries/CountryInfo/CountryInfo';
function Count() {
  return (
    <>
    <div className='header'>
      <div className='container'>
        <h5>The world in ur hands</h5>
      </div>
    </div>  
    <div className='container'>
      {/* <Routes>
        <Route path='/' element={<AllCountries/>}/>
        <Route path='/country/:countryName' element={<CountryInfo/>}/>
      </Routes> */}
      {/* <CountryInfo/> */}
      <AllCountries/>
    </div>
    </>
    
  );
}

export default Count;
