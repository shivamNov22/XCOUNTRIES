import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://xcountries-backend.labs.crio.do/all`,
      );

      setCountries(res.data);
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="countries-container">
      {countries.map((country) => (
        <div key={country.abbr} className="country-card">
          <img src={country.flag} alt={country.name} className="country-flag" />
          <p className="country-name">{country.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
