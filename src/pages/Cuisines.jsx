import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import {Grid} from 'react'


const Cuisines = () => {
  const [cuisines, setCuisines] = useState([]);
  const params = useParams();

  const getCuisines = async (name) => {
    const resp = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_FOOD_API_KEY}&cuisine=${name}`
    );
    const data = await resp.json();

    return data.results;
  };

  useEffect(() => {
    let isMounted = true;
    getCuisines(params.type).then((data) => {
      if (isMounted) setCuisines(data);
    });
    return () => {
      isMounted = false;
    };
  }, [params.type]);

  return (
    <div class='grid'
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisines.map(({ id, title, image }) => (
        <div class="card" key={id}>
          <Link to={`/recipe/${id}`}>
            <img src={image} alt={title} />
            <h4>{title}</h4>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Cuisines;
