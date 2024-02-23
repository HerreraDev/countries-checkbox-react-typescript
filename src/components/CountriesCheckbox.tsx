import React from "react";

interface CountryCheckboxProps {
  country: string;
  isSelected: boolean;
  onSelect: (country: string, isSelected: boolean) => void;
}

const CountryCheckbox: React.FC<CountryCheckboxProps> = ({
  country,
  isSelected,
  onSelect,
}) => {
  return (
    <div>
      <input
        type="checkbox"
        id={country}
        checked={isSelected}
        onChange={() => onSelect(country, !isSelected)}
      />
      <label htmlFor={country}>{country}</label>
    </div>
  );
};

export default CountryCheckbox;
