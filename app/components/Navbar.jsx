import React, { useState } from "react";

const Navbar = () => {
  // State'ler
  const [countries, setCountries] = useState("");
  const [category, setCategory] = useState("");
  const [languages, setLanguages] = useState("");

  // Radio button için onChange event handler'ları
  const handleCountryChange = (event) => {
    setCountries(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguages(event.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navItem">
        <h3>Countries</h3>
        <label>
          <input
            type="radio"
            name="countries"
            value="us"
            onChange={handleCountryChange}
          />
          USA
        </label>
        <label>
          <input
            type="radio"
            name="countries"
            value="de"
            onChange={handleCountryChange}
          />
          Germany
        </label>
        <label>
          <input
            type="radio"
            name="countries"
            value="tr"
            onChange={handleCountryChange}
          />
          Turkey
        </label>
        <label>
          <input
            type="radio"
            name="countries"
            value="cn"
            onChange={handleCountryChange}
          />
          China
        </label>
        <label>
          <input
            type="radio"
            name="countries"
            value="sa"
            onChange={handleCountryChange}
          />
          Saudi Arabia
        </label>
      </div>

      <div className="navItem">
        <h3>Category</h3>
        <label>
          <input
            type="radio"
            name="category"
            value="health"
            onChange={handleCategoryChange}
          />
          Health
        </label>
        <label>
          <input
            type="radio"
            name="category"
            value="science"
            onChange={handleCategoryChange}
          />
          Science
        </label>
        <label>
          <input
            type="radio"
            name="category"
            value="technology"
            onChange={handleCategoryChange}
          />
          Technology
        </label>
      </div>

      <div className="navItem">
        <h3>Languages</h3>
        <label>
          <input
            type="radio"
            name="languages"
            value="en"
            onChange={handleLanguageChange}
          />
          English
        </label>
        <label>
          <input
            type="radio"
            name="languages"
            value="ar"
            onChange={handleLanguageChange}
          />
          Arabic
        </label>
        <label>
          <input
            type="radio"
            name="languages"
            value="es"
            onChange={handleLanguageChange}
          />
          Spanish
        </label>
        <label>
          <input
            type="radio"
            name="languages"
            value="zh"
            onChange={handleLanguageChange}
          />
          Chinese
        </label>
      </div>

      {/* Seçilen Değerler */}
      <div className="selectedValues">
        <p>Selected Country: {countries}</p>
        <p>Selected Category: {category}</p>
        <p>Selected Language: {languages}</p>
      </div>
    </nav>
  );
};

 

export default Navbar;
