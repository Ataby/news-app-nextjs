import React, { useContext, useState } from "react";
import { MyContext } from "../context/FilterContext";

const Navbar = () => {
  // State'ler

  const { setFromWhere, setCategoryy, setLanguage } = useContext(MyContext);

  // Radio button için onChange event handler'ları
  const handleCountryChange = (event) => {
    setFromWhere(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategoryy(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <nav className="navbar">
      <div class="countries">
        <input type="radio" id="option1" name="menu" />
        <label for="option1">WORLD</label>

        <input type="radio" id="option4" name="menu" />
        <label for="option4">TURKEY</label>
        <input type="radio" id="option2" name="menu" />
        <label for="option2">USA</label>

        <input type="radio" id="option3" name="menu" />
        <label for="option3">GERMANY</label>


        <input type="radio" id="option5" name="menu" />
        <label for="option5">CHINA</label>

        <input type="radio" id="option6" name="menu" />
        <label for="option6">SAUDI ARABIA</label>
      </div>

      <div className="navItem categories">
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

      <div className="navItem languages">
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
          عربي
        </label>
        <label>
          <input
            type="radio"
            name="languages"
            value="es"
            onChange={handleLanguageChange}
          />
          Español
        </label>
        <label>
          <input
            type="radio"
            name="languages"
            value="zh"
            onChange={handleLanguageChange}
          />
          中国人
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
