import { useState, useEffect } from "react";
import axios from "axios";
import Form from "./components/Form";
import DisplaySearchResults from "./components/DisplaySearchResults";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [countries, setCountries] = useState([]);
  const [showDisplay, setShowDisplay] = useState(
    <div>search for a country</div>
  );

  // fetching data from the api and then storing it into countries
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data))
      .catch((err) => alert(err.message));
  }, []);

  //filtering based on user input
  let result = [];

  const search = () => {
    for (let i = 0; i < countries.length; i++) {
      if (
        countries[i].name.common.toLowerCase().includes(userInput.toLowerCase())
      ) {
        result.push(countries[i]);
        setShowDisplay(<DisplaySearchResults result={result} />);
      }
    }
  };

  //handling change from the search box
  const handleChange = (e) => {
    e.preventDefault();
    setUserInput(e.target.value);
    search();
  };

  return (
    <>
      <Form userInput={userInput} handleChange={handleChange} />
      {showDisplay}
    </>
  );
};

export default App;
