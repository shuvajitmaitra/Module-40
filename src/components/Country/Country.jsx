import { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountry, handleFlag }) => {
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  // console.log(handleVisitedCountry);
  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <img
        src={flags.svg}
        style={{
          width: "300px",
          height: "200px",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
        }}
      />
      <h2>
        <small>Name: </small>
        {name?.common}
      </h2>
      <p>Population: {population} </p>
      <p>
        Area: {area} km<sup>2</sup>{" "}
      </p>
      <p>
        <small>Code: {cca3}</small>
      </p>

      <button onClick={() => handleFlag(country.flags.png)}>Flags</button>
      <button onClick={() => handleVisitedCountry(country)}>
        Mark as Visited
      </button>
      <br />
      <button
        onClick={handleVisited}
        style={{ background: visited ? "black" : "salmon" }}
      >
        {visited ? "Visited" : "Going"}{" "}
      </button>
      {visited ? "I have visited this country" : "I want to visit"}
    </div>
  );
};

export default Country;
