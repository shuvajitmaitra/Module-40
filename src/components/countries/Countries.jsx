import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  //   Show visited countries for top..........
  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountry = (country) => {
    console.log("Mark Button clicked");
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };
  // show visited country flag..............
  const [countryFlag, setCountryFlag] = useState([]);
  const handleFlag = (flag) => {
    const newFlag = [...countryFlag, flag];
    setCountryFlag(newFlag);
  };
  //   Load data from api.........
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);
  //   component return from here.........
  return (
    <div>
      <h1>Countries: {countries.length}</h1>

      {/* Display visited countries ............... */}
      <h4>Visited Country: {visitedCountries.length}</h4>
      {visitedCountries.map((country) => (
        <li key={country.cca3}>{country.name.common}</li>
      ))}

      {/* Display country flag ................ */}
      <div className="flag-container">
        <h4>Country Flag: {countryFlag.length} </h4>
        {countryFlag.map((flag, index) => (
          <img key={index} src={flag} />
        ))}
      </div>
      {/* Country card props sent from here................. */}
      <div className="country-container">
        {countries.map((country) => (
          <Country
            handleVisitedCountry={handleVisitedCountry}
            handleFlag={handleFlag}
            country={country}
            key={country.cca2}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
