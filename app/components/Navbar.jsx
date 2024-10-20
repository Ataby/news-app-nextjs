import React, { useContext, useState } from "react";
import { MyContext } from "../context/FilterContext";

const Navbar = () => {
  // State'ler

  const { setFromWhere, setCategoryy, setLanguage } = useContext(MyContext);

  // Radio button için onChange event handler'ları
  const handleCountryChange = (event) => {
    setFromWhere(event.target.value);
    console.log(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategoryy(event.target.value);
    console.log(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    console.log(event.target.value);
  };

  return (
    <nav className="navbar">
      <div class="countries">
        <input type="radio" id="option1" name="menu" value="" onClick={(e)=> handleCountryChange(e)} />
        <label for="option1">WORLD</label>

        <input type="radio" id="option4" name="menu" value="tr" onClick={(e)=> handleCountryChange(e)} />
        <label for="option4"  >TURKEY</label>

        <input type="radio" id="option2" name="menu" value="us" onClick={(e)=> handleCountryChange(e)} />
        <label for="option2">USA</label>

        <input type="radio" id="option3" name="menu" value="de" onClick={(e)=> handleCountryChange(e)}/>
        <label for="option3">GERMANY</label>

        <input type="radio" id="option5" name="menu" value="ch" onClick={(e)=> handleCountryChange(e)}/>
        <label for="option5">CHINA</label>

        <input type="radio" id="option6" name="menu" value="sa" onClick={(e)=> handleCountryChange(e)}/>
        <label for="option6">SAUDI ARABIA</label>
      </div>

      <div className="navItem categories">
        <input
          type="radio"
          name="category"
          value="health"
          id="health"
          onClick={(e)=>handleCategoryChange(e)}
        />
        <label for="health">HEALTH</label>

        <input
          type="radio"
          name="category"
          value="science"
          id="science"
          onClick={(e)=>handleCategoryChange(e)}
          />
        <label for="science">SCIENCE</label>

        <input
          type="radio"
          name="category"
          value="technology"
          id="technology"
          onClick={(e)=>handleCategoryChange(e)}
        />
        <label for="technology">TECHNOLOGY</label>
        <input
          type="radio"
          name="category"
          value="general"
          id="general"
          onClick={(e)=>handleCategoryChange(e)}
        />
        <label for="general">GENERAL</label>
      </div>

      <div className="navItem languages">
        <input
          type="radio"
          name="languages"
          value="en"
          id="english"
          onClick={(e)=> handleLanguageChange(e)}
        />
        <label for="english">english</label>

        <input
          type="radio"
          name="languages"
          value="de"
          id="deutsch"
          onClick={(e)=> handleLanguageChange(e)}
        />
        <label for="deutsch">deutsch</label>

        <input
          type="radio"
          name="languages"
          value="es"
          id="espanol"
          onClick={(e)=> handleLanguageChange(e)}
        />
        <label for="espanol">español</label>

        <input
          type="radio"
          name="languages"
          value="zh"
          id="chinese"
          onClick={(e)=> handleLanguageChange(e)}
        />
        <label for="chinese">中国人</label>
      </div>
    </nav>
  );
};

export default Navbar;
