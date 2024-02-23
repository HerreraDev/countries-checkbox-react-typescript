import React, { useState, useEffect } from "react";
import CountryCheckbox from "./components/CountriesCheckbox";

const countries = ["India", "USA", "France"];

const App: React.FC = () => {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);

  useEffect(() => {
    if (selectedCountries.length === countries.length) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  }, [selectedCountries]);

  const handleCountrySelect = (country: string, isSelected: boolean) => {
    let updatedSelectedCountries: string[];

    if (isSelected) {
      updatedSelectedCountries = [...selectedCountries, country];
    } else {
      updatedSelectedCountries = selectedCountries.filter((c) => c !== country);
    }

    setSelectedCountries(updatedSelectedCountries);
    setSelectAll(false);
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedCountries([]);
    } else {
      setSelectedCountries(countries.slice());
    }
    setSelectAll(!selectAll);
  };

  return (
    <div>
      <div>
        <input
          type="checkbox"
          id="selectAll"
          checked={selectAll}
          onChange={handleSelectAll}
        />
        <label htmlFor="selectAll">Select All</label>
      </div>
      {countries.map((country) => (
        <CountryCheckbox
          key={country}
          country={country}
          isSelected={selectedCountries.includes(country)}
          onSelect={handleCountrySelect}
        />
      ))}
    </div>
  );
};

export default App;
