import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";



const Random = () => {
  const [random, setRandom] = useState([]);

  const getRandomRecipes = async () => {
    const getData = localStorage.getItem("popular");

    if (getData) {
      setRandom(JSON.parse(getData));
    } else {
      const resp = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_FOOD_API_KEY}&number=10`
      );
      const data = await resp.json();
      setRandom(data.recipes);
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      console.log(data.recipes);
    }
  };

  useEffect(() => {
    getRandomRecipes();
  }, []);
  return (
    <div>
      <h3>Random Recipes</h3>
      <Splide
        options={{
          perPage: 4,
          arrows: true,
          pagination: false,
          drag: "free",
          gap: "5rem",
          breakpoints: {
            1024: {
              perPage: 3,
            },
            767: {
              perPage: 2,
            },
            640: {
              perPage: 1,
            },
          },
        }}
      >
       
        {random.map(({ title, id, image }) => (
          <SplideSlide key={id}>
            <div class= "card">            
            <img class="card-img-top" src={image} alt={title} />
 <Link to={`/recipe/${id}`}>
              <h6 class='card-title'>{title}</h6></Link>

              <div class= 'card-body'>
             
           </div> </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};


export default Random;
