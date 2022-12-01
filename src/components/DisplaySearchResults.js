import { useState } from "react";
import Weather from "./Weather";

const DisplaySearchResults = ({ result }) => {
  const countryLanguages = Object.values(result.at(0).languages);
  const flags = result.at(0).flags.png;
  const countryName = result.at(0).name.common;
  const capitalCity = result.at(0).capital.at(0);
  const area = result.at(0).area;

  //toggling button
  const [show, setShow] = useState(false);

  //checking if results is exactly one country
  if (result.length === 1) {
    console.log("one country:", result.at(0).name.common);
    return (
      <>
        <div>
          <h3>{countryName}</h3>
          <button
            onClick={() => {
              setShow(!show);
            }}
          >
            Show
          </button>
        </div>
        <div>
          <h3>Capital City</h3>
          <p> {capitalCity}</p>
        </div>

        <h3>Area: {area}</h3>
        <div>
          <h3>Languages</h3>
          <ul>
            {countryLanguages.map((language, i) => {
              return <li key={i}>{language}</li>;
            })}
          </ul>
        </div>

        <div>
          <img src={flags} alt="country flag" />
        </div>

        <Weather capitalCity={capitalCity} />
      </>
    );
  }
  //checking if results are less than 10 countries
  else if (result.length <= 10) {
    console.log("top 10:", result.at(0).name.common);
    return result.map((country, i) => {
      return (
        <div key={i}>
          <h3>{country.name.common} </h3>
        </div>
      );
    });
  } else if (result.length === 1) {
    return (
      <>
        <div>
          <h3>{countryName}</h3>
          <button
            onClick={() => {
              setShow(!show);
            }}
          >
            Show
          </button>
        </div>
      </>
    );
  }

  //rejecting if results are more than 10
  else if (result.length > 10) {
    console.log("more than 10");
    return <h3>Too many matches, specify another filter</h3>;
  }
};

export default DisplaySearchResults;
