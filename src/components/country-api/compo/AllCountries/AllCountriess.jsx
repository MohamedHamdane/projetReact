 
import React, {useState, useEffect} from "react";
import {apiURL } from "../utils/api";
// import CountryInfo from "./CountryInfo/CountryInfo";
import SearchInput from "../Search/SearchInput";
import FilterCountry from "../FilterCountry/FilterCountry";


const AllCountries = () => {

    const [countries , setcountries] = useState([])

    const [isLoading , setIsLoading] = useState(true)

    const [error , setError] = useState('')

    const getAllCountries = async()=> {

        try {
            const res = await fetch(`${apiURL}/all`)

            if(!res.ok) throw new Error('Something went wrong')

                const data = await res.json()

                console.log(data);
                

                setcountries(data)

                setIsLoading(false)


        }catch (error){

               setIsLoading(false)
               setError(error.message)

        }
    };

    const getCountryByName = async(countryName) => {
        try{
            const res = await fetch(`${apiURL}/name/${countryName}`)
            if(!res.ok) throw new Error('Not found any country !')
    
                const data = await res.json();
    
                setcountries(data)

                setIsLoading(false)
        }catch(error){
            setIsLoading(false)
            setError(error.message)
        }
        
    }

    const getCountryByRegion = async(regionName) => {

        try {
            const res = await fetch(`${apiURL}/region/${regionName}`)

            if(!res.ok) throw new Error('Failed .........')
                const data = await res.json()
            setcountries(data)
            setIsLoading(false)
        } catch (error){
            setIsLoading(false)
            setError(false)
        }
    }

    useEffect(()=>{
        getAllCountries();
    }, [])

    return <div className="all__country__wrapper">
        <div className="country__top">
            <div className="search">
                <SearchInput onSearch={getCountryByName}/>
            </div>
            <div className="filter">
                <FilterCountry onSelect={getCountryByRegion}/>
            </div>
        </div>

        <div className="country__bottom">
            {isLoading && !error && <h4>Loading .....</h4>}
            {error && !isLoading && <h4>{error}</h4>}

            {
                countries?.slice(0,10).map(country =>(
                    <div className="country__card">
                        <div className="country__img">
                            <img src={country.flags.png} alt="flag"></img>
                        </div>
                        <div className="country__data">
                            <h3>{country.name.common}</h3>
                            <h6> Population :{country.population}</h6>
                            <h6>Region: {country.region}</h6>
                            <h6>Capital : {country.capital}</h6>
                        </div>
                    </div>
                ))
            }
        

        </div>
    </div>
}

export default AllCountries