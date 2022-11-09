import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import * as React from "react";
import {NavLink} from 'react-router-dom';
// import { NavLink } from "react-router-dom";
// import {List} from 'react-router-dom';
import {styled} from 'react'

const Category = () => {
  return (
    <nav>
      <NavLink to="/cuisines/Italian">
        <FaPizzaSlice />
        {/* <h4>Italian</h4> */}
      </NavLink>
      <NavLink to="/cuisines/American">
        <FaHamburger />
        <h4>American</h4>
      </NavLink>
      <NavLink to="/cuisines/Thai">
        <GiNoodles />
        <h4>Thai</h4>
      </NavLink>
      <NavLink to="/cuisines/Japanese">
        <GiChopsticks />
        <h4>Japanese</h4>
      </NavLink>
    </nav>
  );
};

export default Category;
