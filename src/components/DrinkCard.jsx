import { Link } from "react-router-dom";

const DrinkCard = ({ drink }) => {
  if (!drink) return null;

  const {
    id,
    _id,
    drink: name,
    strDrink,
    drinkThumb,
    strDrinkThumb,
    description,
  } = drink;

  const drinkId = _id || id;
  const title = name || strDrink || "Untitled drink";
  const image = drinkThumb || strDrinkThumb;

  return (
    <article>
      {image && <img src={image} alt={title} />}
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {drinkId ? (
        <Link to={`/drink/${drinkId}`}>See more</Link>
      ) : (
        <span>Recipe details unavailable</span>
      )}
    </article>
  );
};

export default DrinkCard;
