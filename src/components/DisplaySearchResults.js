const DisplaySearchResults = ({ result }) => {
  console.log("result", result);
  //checking if results is exactly one country
  if (result.length === 1) {
    console.log("one country:", result.at(0).name.common);
    return (
      <>
        <h3>{result.at(0).name.common}</h3>
        <h3>{result.at(0).capital}</h3>
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
