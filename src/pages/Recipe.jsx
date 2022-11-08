/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {styled} from 'react'
import {Button, Table} from 'bootstrap'


const Recipe = () => {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const params = useParams();

  const fetchDetails = async () => {
    const resp = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_FOOD_API_KEY}`
    );
    const data = await resp.json();
    return data;
  };

  useEffect(() => {
    let isMounted = true;

    fetchDetails().then((data) => {
      if (isMounted) setDetails(data);
    });
    return () => {
      isMounted = false;
    };
  }, [fetchDetails, params.id]);

  return (
    <div>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <div class='info'>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map(({ id, original }) => (
              <li key={id}>{original}</li>
            ))}
          </ul>
        )}

        {activeTab === "instructions" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
          </div>
        )}
      </div>
    </div>
  );
};


export default Recipe;
