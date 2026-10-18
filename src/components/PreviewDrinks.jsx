import { Link } from "react-router-dom";
import DrinksList from "./DrinksList";

const categories = ["Ordinary Drink", "Cocktail", "Shake", "Other/Unknown"];

const PreviewDrinks = () => {
  return (
    <section>
      {categories.map((category) => (
        <section key={category}>
          <h2>{category}</h2>
          <DrinksList drinks={[]} />
        </section>
      ))}
      <Link to="/drinks">Other drinks</Link>
    </section>
  );
};

export default PreviewDrinks;
