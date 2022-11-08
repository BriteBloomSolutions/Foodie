import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import {Link} from 'react';
import { NavLink } from "react-router-dom";
import {List} from 'react';
import {styled} from 'react'

const Category = () => {
  return (
    <List>
      <Link to={"/cuisines/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Link>
      <Link to={"/cuisines/American"}>
        <FaHamburger />
        <h4>American</h4>
      </Link>
      <Link to={"/cuisines/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </Link>
      <Link to={"/cuisines/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </Link>
    </List>
  );
};

export default Category;
