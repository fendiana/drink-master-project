import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PageTitle from "../components/PageTitle";
import DrinkDescriptionFields from "../components/DrinkDescriptionFields";
import DrinkIngredientsFields from "../components/DrinkIngredientsFields";
import RecipePreparation from "../components/RecipePreparation";
import FollowUs from "../components/FollowUs";
import PopularDrinks from "../components/PopularDrinks";

const initialFormData = {
  name: "",
  category: "",
  alcohol: "",
  glass: "",
  image: "",
  ingredients: "",
  instructions: "",
};

const AddDrinkPage = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Recipe form:", formData);
  };

  return (
    <section>
      <PageTitle>Add drink</PageTitle>
      <form onSubmit={handleSubmit}>
        <DrinkDescriptionFields formData={formData} onChange={handleChange} />
        <DrinkIngredientsFields formData={formData} onChange={handleChange} />
        <RecipePreparation formData={formData} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
      <FollowUs />
      <PopularDrinks />
    </section>
  );
};

export default AddDrinkPage;
