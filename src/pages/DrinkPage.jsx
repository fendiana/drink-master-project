import { useParams } from "react-router-dom";
import { useState } from "react";

import DrinkPageHero from "../components/DrinkPageHero";
import DrinkIngredientsList from "../components/DrinkIngredientList";
import RecipePreparation from "../components/RecipePreparation";

const DrinkPage = () => {
  const { drinkId } = useParams();
  const [drink] = useState(null);

  if (!drink) {
    return (
      <section>
        <h1>Drink details</h1>
        <p>Recipe data will be loaded here.</p>
        <p>Drink ID: {drinkId}</p>
      </section>
    );
  }

  return (
    <>
      <DrinkPageHero drink={drink} />
      <DrinkIngredientsList ingredients={drink.ingredients || []} />
      <RecipePreparation instructions={drink.instructions} />
    </>
  );
};

export default DrinkPage;
