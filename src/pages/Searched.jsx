import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {Grid} from 'react';

const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const parmas = useParams();

  const getSearchedRecipes = async (search) => {
    const resp = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_FOOD_API_KEY}&query=${search}`
    );
    const data = await resp.json();

    return data.results;
  };

  useEffect(() => {
    let isMounted = true;
    getSearchedRecipes(parmas.search).then((data) => {
      if (isMounted) setSearchedRecipes(data);
    });

    return () => {
      isMounted = false;
    };
  }, [parmas.search]);
  return (
    <div class='grid'>
      {searchedRecipes.map(({ title, id, image }) => (
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


export default Searched;
