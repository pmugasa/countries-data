const DisplaySearchResults = ({ result }) => {
  const countryLanguages = Object.values(result.at(0).languages);
  const flags = result.at(0).flags.png;
  const countryName = result.at(0).name.common;
  const capitalCity = result.at(0).capital.at(0);
  const area = result.at(0).area;
  //checking if results is exactly one country
  if (result.length === 1) {
    console.log("one country:", result.at(0).name.common);
    return (
      <>
        <h3>{countryName}</h3>
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
      </>
    );
  }
  //checking if results are less than 10 countries
  else if (result.length <= 10) {
    console.log("top 10:", result.at(0).name.common);
    return result.map((country, i) => {
      return <h3 key={i}>{country.name.common}</h3>;
    });
  }

  //rejecting if results are more than 10
  else if (result.length > 10) {
    console.log("more than 10");
    return <h3>Too many matches, specify another filter</h3>;
  }
};

export default DisplaySearchResults;
