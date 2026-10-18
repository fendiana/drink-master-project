import PageTitle from "./PageTitle";

const DrinkPageHero = ({ drink }) => {
  if (!drink) return null;

  return (
    <section>
      <PageTitle>{drink.strDrink || drink.name || "Drink details"}</PageTitle>
      {drink.strDrinkThumb && (
        <img
          src={drink.strDrinkThumb}
          alt={drink.strDrink || drink.name || "Cocktail"}
        />
      )}
      {drink.description && <p>{drink.description}</p>}
      <p>Category: {drink.strCategory || "Not specified"}</p>
      <p>Alcohol: {drink.strAlcoholic || "Not specified"}</p>
      <p>Glass: {drink.strGlass || "Not specified"}</p>
      <button type="button">Add to favorite drinks</button>
    </section>
  );
};

export default DrinkPageHero;
