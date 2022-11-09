import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GrGlobe } from "react-icons/gr";
import {CiBowlNoodles} from "react-icons/ci"
import {
  GiGrapes,
  GiChickenOven,
  GiSpain,
  GiFishCooked,
  GiArabicDoor,
  GiNoodles,
  GiFastNoodles,
  GiIndianPalace,
  GiPotato,
  GiSausage,
  GiOlive,
  GiBread,
  GiEuropeanFlag,
  GiChopsticks,
  GiAfrica,
  GiSlicedSausage,
  GiFireBowl,
  GiPineapple,
  GiBowlOfRice,
  GiHotMeal,
} from "react-icons/gi";
import { TbSoup, TbJewishStar } from "react-icons/tb";
import * as React from "react";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import {List} from 'react-router-dom';
import { styled } from "react";
// let cuisineArray = [
//   { name: "African"},
//   { name: "American" },
//   { name: "African" },
//   { name: "American" },
//   { name: "British" },
//   { name: "Cajun" },
//   { name: "Caribbean" },
//   { name: "Chinese" },
//   { name: "Eastern European" },
//   { name: "European" },
//   { name: "French" },
//   { name: "German" },
//   { name: "Greek" },
//   { name: "Indian" },
//   { name: "Irish" },
//   { name: "Italian" },
//   { name: "Japanese" },
//   { name: "Jewish" },
//   { name: "Korean" },
//   { name: "Latin American" },
//   { name: "Mediterranean" },
//   { name: "Mexican" },
//   { name: "Middle Eastern" },
//   { name: "Nordic" },
//   { name: "Southern" },
//   { name: "Spanish" },
//   { name: "Thai" },
//   { name: "Vietnamese" },
// ];
const Category = () => {
  return (
    <nav>
      <NavLink to="/cuisines/African">
        <GiAfrica />
        <h4>African</h4>
      </NavLink>
      <NavLink to="/cuisines/American">
        <FaHamburger />
        <h4>American</h4>
      </NavLink>
      <NavLink to="/cuisines/British">
        <GiSlicedSausage />
        <h4>British</h4>
      </NavLink>
      <NavLink to="/cuisines/Cajun">
        <GiFireBowl />
        <h4>Cajun</h4>
      </NavLink>
      <NavLink to="/cuisines/Carribean">
        <GiPineapple />
        <h4>Carribean</h4>
      </NavLink>
      <NavLink to="/cuisines/Chinese">
        <GiBowlOfRice />
        <h4>Chinese</h4>
      </NavLink>
      <NavLink to="/cuisines/EasternEuropean">
        <TbSoup />
        <h4>Eastern European</h4>
      </NavLink>
      <NavLink to="/cuisines/European">
        <GiEuropeanFlag />
        <h4>European</h4>
      </NavLink>
      <NavLink to="/cuisines/French">
        <GiBread />
        <h4>French</h4>
      </NavLink>
      <NavLink to="/cuisines/German">
        <GiSausage />
        <h4>German</h4>
      </NavLink>
      <NavLink to="/cuisines/Greek">
        <GiOlive />
        <h4>Greek</h4>
      </NavLink>
      <NavLink to="/cuisines/Indian">
        <GiIndianPalace />
        <h4>Indian</h4>
      </NavLink>
      <NavLink to="/cuisines/Irish">
        <GiPotato />
        <h4>Irish</h4>
      </NavLink>
      <NavLink to="/cuisines/Italian">
        <GiHotMeal />
        <h4>Italian</h4>
      </NavLink>
      <NavLink to="/cuisines/Japanese">
        <GiChopsticks />
        <h4>Japanese</h4>
      </NavLink>
      <NavLink to="/cuisines/Jewish">
        <TbJewishStar />
        <h4>Jewish</h4>
      </NavLink>
      <NavLink to="/cuisines/Korean">
        <GiFastNoodles />
        <h4>Korean</h4>
      </NavLink>
      <NavLink to="/cuisines/LatinAmerican">
        <GrGlobe />
        <h4>Latin American</h4>
      </NavLink>
      <NavLink to="/cuisines/Mediterranean">
        <GiGrapes />
        <h4>Mediterranean</h4>
      </NavLink>
      <NavLink to="/cuisines/Mexican">
        <GrGlobe />
        <h4>Mexican</h4>
      </NavLink>
      <NavLink to="/cuisines/MiddleEastern">
        <GiArabicDoor />
        <h4>Middle Eastern</h4>
      </NavLink>
      <NavLink to="/cuisines/Nordic">
        <GiFishCooked />
        <h4>Nordic</h4>
      </NavLink>
      <NavLink to="/cuisines/Southern">
        <GiChickenOven />
        <h4>Southern</h4>
      </NavLink>
      <NavLink to="/cuisines/Spanish">
        <GiSpain />
        <h4>Spanish</h4>
      </NavLink>
      <NavLink to="/cuisines/Thai">
        <GiNoodles />
        <h4>Thai</h4>
      </NavLink>
      <NavLink to="/cuisines/Vietnamese">
        <CiBowlNoodles />
        <h4>Vietnamese</h4>
      </NavLink>
    </nav>
  );
};

export default Category;
